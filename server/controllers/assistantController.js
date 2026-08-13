const OpenAI = require("openai");

// =============================================
// Estimate reading time (words / 200 wpm)
// =============================================
const estimateReadingTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

// =============================================
// Context-aware system prompt with question classification
// =============================================
const buildSystemPrompt = (subject, topic) => {
  return `You are an experienced, patient, and engaging Computer Science professor helping a second-year engineering student.

CURRENT CONTEXT:
- Subject: ${subject}
- Topic: ${topic}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — CLASSIFY THE QUESTION (do this internally first):

Category A — Current Topic:
The question is directly about "${topic}" in "${subject}".
→ Answer fully with structured explanation.

Category B — Related Topic (from the SAME subject):
The question is about a different topic within "${subject}", but NOT about "${topic}".
→ Provide a SHORT explanation to connect the concepts, then tell the student this topic has its own dedicated page in the syllabus.
→ Format:
  📍 **This question is from a related topic**

  **Current Topic:** ${topic}
  **Requested Concept:** [detected concept name]

  [Short 2–3 sentence explanation connecting it to the current topic]

  > 💡 For a complete explanation, open the **[concept topic name]** topic from the syllabus.

Category C — Completely Unrelated:
The question has nothing to do with "${subject}" at all (e.g. sports, cooking, poetry, unrelated tech).
→ Respond: "This AI assistant is designed to help you learn **${subject}**. Please ask questions related to this subject."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — ANSWER FORMAT (for Category A and B):

Use this Markdown structure (include only applicable sections):

## Definition
[concise definition]

## Simple Explanation
[simple English with daily-life analogy if possible]

## Example
[concrete example — code block if code is involved]

## Key Points
- Point 1
- Point 2

## Common Mistake
[one common mistake students make and how to avoid it]

## Related Concepts
[1–2 sentence mention of concepts directly related to this topic]

## 📚 Exam Tip
[1–2 sentences — is this commonly asked in university exams or technical interviews? Include a quick memory trick if applicable]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — METADATA LINE (mandatory, always at the very end):

After the full answer, add this exact metadata block on its own line:
---META---
DIFFICULTY:[Beginner|Intermediate|Advanced]|FOLLOWUPS:question1?|question2?|question3?

Rules for DIFFICULTY: choose based on how complex the overall answer was.
Rules for FOLLOWUPS: 3 short (≤10 words each), dynamically generated follow-up questions the student would naturally ask next about "${topic}".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL RULES:
- Never start with "Certainly!", "Great question!", or similar filler phrases.
- Never hallucinate facts. If you are unsure, say so honestly.
- Use \`inline code\` for variable names and short snippets.
- Use triple-backtick code blocks with the language name for multi-line code.
- Keep responses educational, focused, and student-friendly.`;
};

// =============================================
// Parse metadata from end of AI response
// =============================================
const parseMetadata = (rawText) => {
  const metaMarker = "---META---";
  const metaIdx = rawText.lastIndexOf(metaMarker);

  if (metaIdx === -1) {
    return { answer: rawText.trim(), difficulty: "Beginner", followUps: [] };
  }

  const answer = rawText.slice(0, metaIdx).trim();
  const metaLine = rawText.slice(metaIdx + metaMarker.length).trim();

  let difficulty = "Beginner";
  let followUps = [];

  // Parse DIFFICULTY
  const diffMatch = metaLine.match(/DIFFICULTY:(Beginner|Intermediate|Advanced)/i);
  if (diffMatch) difficulty = diffMatch[1];

  // Parse FOLLOWUPS
  const fuMatch = metaLine.match(/FOLLOWUPS:(.+)/);
  if (fuMatch) {
    followUps = fuMatch[1]
      .split("|")
      .map((q) => q.trim())
      .filter((q) => q.length > 0)
      .slice(0, 3);
  }

  return { answer, difficulty, followUps };
};

// =============================================
// POST /api/assistant/chat
// =============================================
const chat = async (req, res) => {
  const { subject, topic, question, conversationHistory = [] } = req.body;

  // --- Input validation ---
  if (!subject || !topic || !question) {
    return res.status(400).json({
      success: false,
      message: "subject, topic, and question are all required.",
    });
  }

  if (typeof subject !== "string" || typeof topic !== "string" || typeof question !== "string") {
    return res.status(400).json({
      success: false,
      message: "subject, topic, and question must be valid strings.",
    });
  }

  const cleanQuestion = question.trim().replace(/---META---/g, "");

  if (cleanQuestion.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Question is too short.",
    });
  }

  if (cleanQuestion.length > 1000) {
    return res.status(400).json({
      success: false,
      message: "Question exceeds the maximum length of 1000 characters.",
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey.trim() === "" || apiKey === "your_groq_api_key_here") {
    console.error("[AI Assistant] GROQ_API_KEY is missing.");
    return res.status(503).json({
      success: false,
      message: "AI Assistant is not configured. Please set GROQ_API_KEY in the server .env file.",
    });
  }

  try {
    const client = new OpenAI({
      apiKey,
      baseURL: "https://api.groq.com/openai/v1",
      timeout: 20000, // 20s timeout
    });

    // Build message array: system + last 10 conversation messages + new question
    const historyArray = Array.isArray(conversationHistory) ? conversationHistory : [];
    const historyMessages = historyArray.slice(-10).map((msg) => ({
      role: msg.role === "ai" ? "assistant" : "user",
      content: typeof msg.text === "string" ? msg.text.slice(0, 1000) : "",
    }));

    const messages = [
      { role: "system", content: buildSystemPrompt(subject.slice(0, 100), topic.slice(0, 100)) },
      ...historyMessages,
      { role: "user", content: cleanQuestion },
    ];

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.65,
      max_tokens: 1600,
    });

    const rawAnswer = response.choices[0]?.message?.content || "";

    if (!rawAnswer) {
      return res.status(503).json({
        success: false,
        message: "No response generated. Please try again.",
      });
    }

    // Parse metadata (difficulty + followUps) out of the response
    const { answer, difficulty, followUps } = parseMetadata(rawAnswer);

    // Calculate reading time
    const readingTime = estimateReadingTime(answer);

    return res.json({
      success: true,
      answer,
      difficulty,
      followUps,
      readingTime,
    });
  } catch (err) {
    console.error("[AI Assistant Error]", err.message || err);
    return res.status(503).json({
      success: false,
      message: "AI Assistant is temporarily unavailable. Please try again later.",
    });
  }
};

module.exports = { chat };

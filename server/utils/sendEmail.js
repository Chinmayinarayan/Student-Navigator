const { Resend } = require("resend");

/**
 * Send email using the Resend API SDK.
 * @param {Object} options - Email options
 * @param {string} options.email - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} [options.message] - Text message content fallback
 * @param {string} [options.html] - HTML content of the email
 */
const sendEmail = async (options) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Email Delivery Failed: RESEND_API_KEY is not defined in the environment.");
    throw new Error("Missing RESEND_API_KEY configuration");
  }

  const resend = new Resend(apiKey);

  const fromName = process.env.FROM_NAME || "Student Navigator Team";
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const fromString = `${fromName} <${fromEmail}>`;

  const { data, error } = await resend.emails.send({
    from: fromString,
    to: options.email,
    subject: options.subject,
    html: options.html || `<p>${options.message}</p>`,
  });

  if (error) {
    // Log the error clearly without exposing any API keys or secrets
    console.error("Resend API Delivery Error:", error.message || error);
    throw new Error(`Resend API Error: ${error.message || "Failed to send email"}`);
  }

  console.log(`Email dispatched successfully! Message ID: ${data?.id}`);
  return data;
};

module.exports = sendEmail;

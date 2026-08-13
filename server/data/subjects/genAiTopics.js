module.exports = [
  {
    "title": "Introduction to Generative AI",
    "slug": "generative-ai-introduction-to-generative-ai",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand foundational Generative AI: What is Artificial Intelligence, What is Generative AI, Evolution (from Rule-based AI to Deep Learning, GANs, Transformers, and LLMs), Generative AI vs Traditional Discriminative AI ($P(Y|X)$ vs $P(X,Y)$ or $P(X)$), Real-world Applications, Benefits & Limitations, and Future Trends.",
    "subTopics": [
      "What is Artificial Intelligence?",
      "What is Generative AI?",
      "Evolution of Generative AI",
      "Generative AI vs Traditional AI",
      "Applications of Generative AI",
      "Benefits and Limitations",
      "Future of Generative AI"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Differentiate Discriminative Models (predict label $Y$ given input $X$: $P(Y|X)$) vs Generative Models (learn data distribution $P(X)$ to generate novel instances).",
      "Trace Generative AI milestones: N-gram language models $\to$ RNN/LSTM $\to$ GANs (2014) $\to$ VAEs $\to$ Transformer Attention (2017) $\to$ Diffusion Models (2020) $\to$ ChatGPT/LLM Era (2022+).",
      "Identify key benefits (productivity, creative generation, code synthesis) and limitations (hallucinations, bias, compute cost)."
    ],
    "notes": [
      {
        "title": "Discriminative vs Generative AI & Evolutionary Timeline",
        "content": "INTRODUCTION TO GENERATIVE AI\n\n1. Discriminative vs Generative AI Taxonomy:\n   - Discriminative Models: Learn decision boundary separating classes $P(Y|X)$.\n     - Goal: Classify or predict target output (e.g. Is this email Spam or Not Spam? Is this image a Cat or Dog?).\n     - Algorithms: Logistic Regression, SVM, Random Forest, ResNet.\n   - Generative Models: Learn underlying probability distribution of data $P(X)$ or joint distribution $P(X,Y)$.\n     - Goal: Generate new, synthetic data samples indistinguishable from training data (e.g. Write an essay, generate a photo-realistic human face).\n     - Algorithms: GANs, VAEs, Diffusion Models, Auto-regressive Transformers (GPT, Claude, Gemini, Llama)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Generative Deep Learning",
        "author": "David Foster"
      },
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville"
      }
    ],
    "practiceLinks": [
      {
        "title": "Google Cloud Generative AI Fundamentals",
        "url": "https://www.cloudskillsboost.google/course_templates/536"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Discriminative AI and Generative AI in terms of probability modeling. (2 Marks)",
        "State 3 key breakthroughs that led to modern Large Language Models. (2 Marks)",
        "Define Hallucination in Generative AI. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Evolution of Generative AI from Statistical N-gram models to GANs, Diffusion Models, and Transformer Large Language Models. (6 Marks)",
        "Compare Generative AI applications across Text, Image, Audio, Code, and Multimodal domains detailing industry impact. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Generative AI Architecture & Economics. Detail compute infrastructure (GPU clusters, H100/B200 flops), energy consumption, open-weights vs proprietary model ecosystems, data quality scaling laws (Kaplan & Chinchilla scaling laws), and societal impacts. (10 Marks)"
      ]
    }
  },
  {
    "title": "Foundations of Machine Learning",
    "slug": "generative-ai-foundations-of-machine-learning",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master foundational ML & Deep Learning concepts: Introduction to ML, Types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning RL), Artificial Neural Networks (Perceptron, Activation functions ReLU/Sigmoid/Softmax, Forward/Backpropagation, Loss functions MSE/Cross-Entropy, Gradient Descent optimizers Adam/SGD), and Deep Learning Overview (CNNs, RNNs, LSTMs).",
    "subTopics": [
      "Introduction to Machine Learning",
      "Types of Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Neural Networks Basics",
      "Deep Learning Overview"
    ],
    "prerequisiteTitles": [
      "Introduction to Generative AI"
    ],
    "learningObjectives": [
      "Understand Perceptron Forward Pass: $z = mathbf{w}^T mathbf{x} + b implies a = sigma(z)$.",
      "Understand Backpropagation & Gradient Descent weight update: $w_{new} = w_{old} - eta \frac{partial mathcal{L}}{partial w}$.",
      "Differentiate RNN (Recurrent Neural Networks), LSTM (Long Short-Term Memory vanishing gradient fix), and CNN (Convolutional Neural Networks)."
    ],
    "notes": [
      {
        "title": "Perceptron Math, Backpropagation & Activation Functions",
        "content": "NEURAL NETWORKS & DEEP LEARNING FOUNDATIONS\n\n1. Forward Pass & Activation Functions:\n   - Sigmoid: $sigma(z) = \frac{1}{1 + e^{-z}} in (0,1)$ (Binary Classification).\n   - ReLU (Rectified Linear Unit): $f(z) = max(0, z)$ (Hidden layers, prevents vanishing gradient!).\n   - Softmax: $P(y=i|mathbf{z}) = \frac{e^{z_i}}{sum_j e^{z_j}}$ (Multi-class probability distribution).\n\n2. Gradient Descent Weight Update Formula:\n   $w_{ij}^{(l)} leftarrow w_{ij}^{(l)} - eta \frac{partial mathcal{L}}{partial w_{ij}^{(l)}}$\n   - Where $eta$ is Learning Rate, $mathcal{L}$ is Loss Function (Cross-Entropy Loss $mathcal{L} = -sum y_i log hat{y}_i$)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow"
      },
      {
        "title": "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        "author": "Aurélien Géron"
      }
    ],
    "practiceLinks": [
      {
        "title": "DeepLearning.AI Neural Networks Course",
        "url": "https://www.deeplearning.ai/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 3 main types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning). (2 Marks)",
        "Why is ReLU activation preferred over Sigmoid in deep neural network hidden layers? (2 Marks)",
        "What is the Vanishing Gradient Problem in standard Recurrent Neural Networks (RNNs)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Backpropagation algorithm step-by-step using Chain Rule of Calculus for updating weights in a multi-layer neural network. (6 Marks)",
        "Compare RNN, LSTM (Forget gate, Input gate, Output gate), and Transformer architectures for processing sequential text data. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Deep Learning Optimization. Detail Stochastic Gradient Descent (SGD), Momentum, Adam Optimizer ($m_t, v_t$ bias-corrected moments), Cross-Entropy Loss, Overfitting regularizations (Dropout, L2 Weight Decay, Batch Normalization), and Hyperparameter tuning. (10 Marks)"
      ]
    }
  },
  {
    "title": "Large Language Models (LLMs)",
    "slug": "generative-ai-large-language-models",
    "order": 3,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master LLM core architecture & mechanics: How Language Models Work (Auto-regressive token prediction $P(w_t | w_1 dots w_{t-1})$), Tokens and Tokenization (BPE Byte-Pair Encoding, WordPiece, Tiktoken), Word Embeddings (Word2Vec, High-dimensional vector space), Context Windows (Tokens limit 4k-2M tokens), Scaled Dot-Product Self-Attention Mechanism ($\text{Attention}(Q,K,V) = \text{softmax}left(\frac{QK^T}{sqrt{d_k}}\right)V$), Multi-Head Attention, Transformer Architecture (Encoder-Decoder vs Decoder-Only), Pre-training vs Fine-tuning, and Inference Process (Temperature, Top-p / Nucleus sampling, Top-k).",
    "subTopics": [
      "Introduction to LLMs",
      "How Language Models Work",
      "Tokens and Tokenization",
      "Embeddings",
      "Context Windows",
      "Attention Mechanism",
      "Transformer Architecture",
      "Pre-training vs Fine-tuning",
      "Inference Process"
    ],
    "prerequisiteTitles": [
      "Foundations of Machine Learning"
    ],
    "learningObjectives": [
      "Derive Scaled Dot-Product Self-Attention Equation: $\text{Attention}(Q,K,V) = \text{softmax}left(\frac{Q K^T}{sqrt{d_k}}\right) V$.",
      "Understand BPE Byte-Pair Encoding tokenization mechanics (sub-word units, vocabulary creation).",
      "Control LLM Inference generation parameters: Temperature ($T \to 0$ deterministic vs $T > 1$ creative), Top-p (Nucleus sampling), Top-k."
    ],
    "notes": [
      {
        "title": "Transformer Self-Attention Math & Inference Decoding Parameters",
        "content": "TRANSFORMER ARCHITECTURE & ATTENTION MECHANISM\n\n1. Scaled Dot-Product Self-Attention Formula (Vaswani et al., 2017):\n   $\text{Attention}(Q,K,V) = \text{softmax}left( \frac{Q K^T}{sqrt{d_k}} \right) V$\n   - $Q$ (Query): What the current token is looking for ($Q = X W_Q$).\n   - $K$ (Key): What each token contains ($K = X W_K$).\n   - $V$ (Value): The actual representation conveyed ($V = X W_V$).\n   - Scaling factor $sqrt{d_k}$: Prevents dot products from growing excessively large in high dimensions (which causes vanishing gradients in Softmax!).\n\n2. Inference Decoding Parameters:\n   - Temperature ($T$): Rescales logits $z_i / T$ before Softmax. $T=0.1 implies$ sharp, deterministic output; $T=1.0 implies$ creative output.\n   - Top-p (Nucleus Sampling): Selects smallest set of tokens whose cumulative probability $sum P ge p$ (e.g. $p=0.9$)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Build a Large Language Model (From Scratch)",
        "author": "Sebastian Raschka"
      }
    ],
    "practiceLinks": [
      {
        "title": "Tiktoken Tokenizer Playground",
        "url": "https://platform.openai.com/tokenizer"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write formula for Scaled Dot-Product Attention and explain the purpose of the $sqrt{d_k}$ scaling factor. (2 Marks)",
        "Differentiate between Encoder-Only (BERT), Decoder-Only (GPT), and Encoder-Decoder (T5) Transformer architectures. (2 Marks)",
        "Explain how Temperature $T$ affects LLM output sampling. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the complete Transformer Architecture (Vaswani et al.) detailing Multi-Head Attention, Positional Encoding, Feed-Forward Networks, and Residual Connections with a block diagram. (6 Marks)",
        "Explain Byte-Pair Encoding (BPE) Tokenization algorithm step-by-step showing how subword tokens handle Out-Of-Vocabulary (OOV) words. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on LLM Pre-training & Inference Optimization. Detail Masked Language Modeling (MLM) vs Causal Language Modeling (CLM), KV-Cache (Key-Value Caching) memory optimization during inference, FlashAttention GPU kernel speedup, Rotational Position Embedding (RoPE), and Context Window extension techniques (ALiBi, YaRN). (10 Marks)"
      ]
    }
  },
  {
    "title": "Prompt Engineering",
    "slug": "generative-ai-prompt-engineering",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master techniques to program LLM behavior: Introduction to Prompt Engineering, Prompt Design Principles (Clarity, Specificity, Context, Constraints), Zero-Shot Prompting, One-Shot Prompting, Few-Shot Prompting, Chain-of-Thought (CoT) Prompting, Tree-of-Thoughts (ToT), Role Prompting (System vs User vs Assistant prompts), Structured Output Prompting (JSON mode, Pydantic schemas), Prompt Evaluation, and Prompt Optimization.",
    "subTopics": [
      "Introduction to Prompt Engineering",
      "Prompt Design Principles",
      "Zero-Shot Prompting",
      "One-Shot Prompting",
      "Few-Shot Prompting",
      "Chain-of-Thought Prompting",
      "Role Prompting",
      "Structured Output Prompting",
      "Prompt Evaluation",
      "Prompt Optimization"
    ],
    "prerequisiteTitles": [
      "Large Language Models (LLMs)"
    ],
    "learningObjectives": [
      "Apply Few-Shot & Chain-of-Thought (CoT) Prompting: Encouraging step-by-step reasoning ('Let's think step by step') to improve complex math and logic scores.",
      "Enforce Structured JSON Outputs using Pydantic / OpenAI JSON Schema mode.",
      "Evaluate prompt robustness against Prompt Injection attacks and Jailbreaking attempts."
    ],
    "notes": [
      {
        "title": "Chain-of-Thought (CoT) Prompting Template & Pydantic JSON Mode",
        "content": "PROMPT ENGINEERING FRAMEWORKS & STRUCTURED OUTPUTS\n\n1. Chain-of-Thought (CoT) Prompting Template:\n   - System: \"You are an expert mathematical reasoning AI assistant.\"\n   - User: \"Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?\"\n   - Assistant (CoT Example): \"A: Roger started with 5 balls. 2 cans of 3 tennis balls each is $2 \times 3 = 6$ tennis balls. $5 + 6 = 11$. The answer is 11.\"\n   - Target User Query: \"Q: [New Complex Problem]. Let's think step by step:\"\n\n2. Structured Output Prompting (OpenAI Pydantic Schema):\n```python\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass ExtractionSchema(BaseModel):\n    person_name: str\n    organization: str\n    confidence_score: float\n\nclient = OpenAI()\nresponse = client.beta.chat.completions.parse(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Sam Altman is the CEO of OpenAI.\"}],\n    response_format=ExtractionSchema,\n)\ndata = response.choices[0].message.parsed\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Prompt Engineering Handbook",
        "author": "DAIR.AI"
      }
    ],
    "practiceLinks": [
      {
        "title": "LearnPrompting.org Interactive Guide",
        "url": "https://learnprompting.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Zero-Shot, One-Shot, and Few-Shot Prompting. (2 Marks)",
        "What is Chain-of-Thought (CoT) Prompting and why does it improve reasoning? (2 Marks)",
        "What is Prompt Injection and how can it be mitigated? (2 Marks)"
      ],
      "sixMarks": [
        "Design a Few-Shot System Prompt to convert unstructured customer feedback emails into structured JSON containing Sentiment (Positive/Negative/Neutral), Urgency (High/Medium/Low), and Key Issues list. (6 Marks)",
        "Explain Tree-of-Thoughts (ToT) prompting framework and compare it with Chain-of-Thought (CoT) for solving complex search problems like 24-Point Math Game. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Prompt Optimization & Automated Evaluation. Detail DSPy (Declarative Self-improving Pythonic prompts), A/B testing prompt variations using LLM-as-a-Judge evaluations (using GPT-4 to grade outputs on rubric criteria), System Prompt Guardrails, and RAG prompt assembly strategies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Generative AI Models",
    "slug": "generative-ai-models",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore frontier & open-source model families: OpenAI GPT Models (GPT-4o, o1/o3 reasoning models), Meta Llama Models (Llama 3.1 / 3.3 open weights 8B, 70B, 405B), Google Gemini Models (Gemini 1.5 Pro 2M context window), Anthropic Claude Models (Claude 3.5 Sonnet, Artifacts), Mistral / Mixtral Models (Sparse Mixture-of-Experts MoE), Image Models (Stable Diffusion XL/3, DALL-E 3, Midjourney), Audio Models (Whisper speech recognition), Code Models (Codex, StarCoder), and Model Benchmark Comparisons (MMLU, HumanEval, GSM8K).",
    "subTopics": [
      "GPT Models",
      "Llama Models",
      "Gemini Models",
      "Claude Models",
      "Mistral Models",
      "Stable Diffusion",
      "DALL·E",
      "Whisper",
      "Codex",
      "Model Comparison"
    ],
    "prerequisiteTitles": [
      "Large Language Models (LLMs)"
    ],
    "learningObjectives": [
      "Understand Mixture-of-Experts (MoE) Architecture (Mixtral 8x7B): Routing tokens to specialized expert sub-networks via a Router/Gating network.",
      "Compare Closed-Source API Models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro) vs Open-Weights Models (Llama 3.3, Mistral NeMo, DeepSeek V3).",
      "Evaluate Models on standard AI Benchmarks: MMLU (General knowledge), HumanEval (Python coding), GSM8K (Math word problems), MATH."
    ],
    "notes": [
      {
        "title": "Mixture-of-Experts (MoE) Architecture & Benchmark Comparison Table",
        "content": "GENERATIVE AI MODEL LANDSCAPE & MIXTURE-OF-EXPERTS\n\n1. Mixture-of-Experts (MoE) Architecture (e.g. Mixtral 8x7B / DeepSeek V3):\n   Replaces dense feed-forward layers with multiple 'Expert' sub-networks.\n   - Router Network: For each token, a Router computes top-$k$ probabilities and routes the token ONLY to the $k$ best expert networks (e.g. 2 out of 8 experts active per token).\n   - Advantage: Massive parameter count (e.g. 47B total params) with computational speed of much smaller models (e.g. 13B active params per token)!\n\n2. Standard AI Evaluation Benchmarks:\n   - MMLU (Massive Multitask Language Understanding): 57 subjects (STEM, Humanities, Social Sciences).\n   - HumanEval: 164 Python coding challenges measuring Zero-Shot Pass@1 rate.\n   - GSM8K: 8,500 grade-school math word problems testing multi-step arithmetic."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Generative AI on AWS",
        "author": "Chris Fregly, Antje Barth, Shelbee Eigenbrode"
      }
    ],
    "practiceLinks": [
      {
        "title": "LMSYS Chatbot Arena Leaderboard",
        "url": "https://chat.lmsys.org/"
      },
      {
        "title": "Hugging Face Open LLM Leaderboard",
        "url": "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Mixture-of-Experts (MoE) architecture in LLMs. (2 Marks)",
        "Compare Open-Weights Models (Llama 3) vs Closed-API Models (GPT-4o) on privacy, cost, and control. (2 Marks)",
        "What is the HumanEval benchmark used to measure? (2 Marks)"
      ],
      "sixMarks": [
        "Compare GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Llama 3.3 on context window size, multimodal capabilities, license type, and reasoning benchmarks. (6 Marks)",
        "Describe Whisper Speech-to-Text architecture detailing audio spectrogram tokenization, Encoder-Decoder Transformer processing, and multilingual translation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Open-Source Generative AI Ecosystem. Detail Hugging Face Model Hub, GGUF / AWQ model quantization formats for local execution (Ollama / vLLM), Multimodal Vision-Language Models (VLMs e.g. Llama-3.2-Vision, Qwen2-VL), and inference serving optimizations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Text Generation",
    "slug": "generative-ai-text-generation",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master natural language text generation tasks: Text Completion, Text Summarization (Extractive vs Abstractive), Machine Translation, Question Answering, Content Generation, Automated Email Generation, Code Generation, and Documentation Generation.",
    "subTopics": [
      "Text Completion",
      "Text Summarization",
      "Translation",
      "Question Answering",
      "Content Generation",
      "Email Generation",
      "Code Generation",
      "Documentation Generation"
    ],
    "prerequisiteTitles": [
      "Prompt Engineering"
    ],
    "learningObjectives": [
      "Differentiate Extractive Summarization (selecting key sentences) vs Abstractive Summarization (generating new paraphrased summary text using LLMs).",
      "Implement automated Code & Docstring Generation using Python OpenAI SDK.",
      "Evaluate Summarization quality using ROUGE (Recall-Oriented Understudy for Gisting Evaluation) and BLEU metrics."
    ],
    "notes": [
      {
        "title": "Abstractive Summarization Python Code & ROUGE Evaluation Metric",
        "content": "TEXT GENERATION TASKS & ROUGE EVALUATION\n\n1. Abstractive Summarization Python OpenAI Code:\n```python\nfrom openai import OpenAI\n\nclient = OpenAI()\n\ndef summarize_article(text, target_length_words=100):\n    prompt = f\"\"\"Summarize the following technical article in approximately {target_length_words} words. \nFocus on key findings, business implications, and actionable takeaways.\n\nArticle:\n{text}\n\"\"\"\n    response = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[{\"role\": \"user\", \"content\": prompt}],\n        temperature=0.3\n    )\n    return response.choices[0].message.content\n```\n\n2. ROUGE Metrics for Summarization:\n   - ROUGE-1: Overlap of unigrams (single words) between generated summary and reference.\n   - ROUGE-2: Overlap of bigrams (two-word phrases).\n   - ROUGE-L: Longest Common Subsequence (LCS) score."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Natural Language Processing with Transformers",
        "author": "Lewis Tunstall, Leandro von Werra, Thomas Wolf"
      }
    ],
    "practiceLinks": [
      {
        "title": "OpenAI API Documentation",
        "url": "https://platform.openai.com/docs/guides/text-generation"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Extractive and Abstractive Text Summarization. (2 Marks)",
        "What is ROUGE score in evaluating summarization models? (2 Marks)",
        "State 3 key system prompt constraints when generating automated code documentation. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python script to build an Automated Email Response Generator that categorizes customer complaints and drafts personalized professional replies. (6 Marks)",
        "Explain ROUGE-1, ROUGE-2, and ROUGE-L metrics detailing precision, recall, and F1-score calculations against human reference summaries. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Natural Language Generation (NLG) Applications. Detail Multi-lingual Translation using LLMs, In-context Learning for Code Generation, Docstring & Unit Test auto-generation, Constrained Decoding (JSON / Grammars), and Hallucination mitigation in factual Q&A. (10 Marks)"
      ]
    }
  },
  {
    "title": "Image Generation",
    "slug": "generative-ai-image-generation",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master AI computer vision & diffusion models: Introduction to Image Generation, Latent Diffusion Models (LDMs - Forward Noise Addition Process $q(x_t|x_{t-1})$ vs Reverse Denoising U-Net Process $p_\theta(x_{t-1}|x_t)$), Text-to-Image Generation (CLIP text embedding guidance), Image Editing, Image Inpainting (filling missing mask regions), Image Outpainting (expanding canvas), Image Upscaling (Super-Resolution), AI Art Generation, and Prompt Writing for Images (Negative prompts, CFG Classifier-Free Guidance scale, Samplers Euler/DPM++).",
    "subTopics": [
      "Introduction to Image Generation",
      "Diffusion Models",
      "Text-to-Image Generation",
      "Image Editing",
      "Image Inpainting",
      "Image Upscaling",
      "AI Art Generation",
      "Prompt Writing for Images"
    ],
    "prerequisiteTitles": [
      "Foundations of Machine Learning"
    ],
    "learningObjectives": [
      "Understand Latent Diffusion Model Architecture (Stable Diffusion): Autoencoder (VAE) compresses image $x \to z$ to latent space; U-Net denoises $z_t$ conditioned on CLIP text embeddings $c$.",
      "Understand Classifier-Free Guidance (CFG Scale): Balancing adherence to text prompt vs sample diversity ($z_{guided} = z_{uncond} + s cdot (z_{cond} - z_{uncond})$).",
      "Execute Image Inpainting and ControlNet structural conditioning (Canny edge, Depth map)."
    ],
    "notes": [
      {
        "title": "Diffusion Forward/Reverse Process & CFG Scale Formula",
        "content": "LATENT DIFFUSION MODELS & IMAGE GENERATION\n\n1. Stable Diffusion Architecture:\n   - Variational Autoencoder (VAE): Encodes high-res image ($512 \times 512 \times 3$) into compact latent representation ($64 \times 64 \times 4$), reducing compute 64x!\n   - CLIP Text Encoder: Converts text prompt into conditioning embedding vector $c$.\n   - Denoising U-Net: Predicts noise $epsilon_\theta(z_t, t, c)$ at timestep $t$ using Cross-Attention with text embedding $c$.\n\n2. Classifier-Free Guidance (CFG Scale $s$):\n   Controls how strictly the generated image matches the text prompt:\n   $mathbf{epsilon}_{final} = mathbf{epsilon}(z_t, t, emptyset) + s cdot Big[ mathbf{epsilon}(z_t, t, c) - mathbf{epsilon}(z_t, t, emptyset) Big]$\n   - Low CFG ($s sim 3-5$): Creative, loose prompt matching.\n   - Ideal CFG ($s sim 7-9$): Good balance of quality and prompt fidelity.\n   - High CFG ($s > 15$): Over-saturated, artifact-prone images."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Generative Deep Learning",
        "author": "David Foster"
      }
    ],
    "practiceLinks": [
      {
        "title": "Hugging Face Diffusers Library Documentation",
        "url": "https://huggingface.co/docs/diffusers/index"
      },
      {
        "title": "Stable Diffusion WebUI (Automatic1111)",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Forward Noise Process and Reverse Denoising Process in Diffusion Models. (2 Marks)",
        "What is Classifier-Free Guidance (CFG Scale) in text-to-image generation? (2 Marks)",
        "Differentiate between Image Inpainting and Image Outpainting. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Latent Diffusion Model (Stable Diffusion) architecture detailing VAE Encoder/Decoder, CLIP Text Encoder, and U-Net Cross-Attention denoising mechanism. (6 Marks)",
        "Write Python code using Hugging Face `diffusers` library to generate a $1024 \times 1024$ image using `StableDiffusionXLPipeline` with a prompt and negative prompt. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Image Conditioning Techniques. Detail ControlNet (Conditioning on Canny Edges, Pose Estimation OpenPose, Depth maps), LoRA (Low-Rank Adaptation) fine-tuning for custom art styles/faces, Flux.1 model architecture, and FID (Fréchet Inception Distance) image evaluation metric. (10 Marks)"
      ]
    }
  },
  {
    "title": "Audio and Video Generation",
    "slug": "generative-ai-audio-and-video-generation",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore generative media technologies: Speech Synthesis, Text-to-Speech (TTS - ElevenLabs, Bark, Tacotron 2), Speech-to-Text (STT - OpenAI Whisper), Music Generation (Suno AI, Udio, MusicLM), Voice Cloning basics (Zero-shot neural speaker adaptation), Video Generation (Text-to-Video - Sora, Runway Gen-2/Gen-3, Pika), AI Avatars (HeyGen, Synthesia lip-syncing), and Multimodal AI integration.",
    "subTopics": [
      "Speech Synthesis",
      "Text-to-Speech",
      "Speech-to-Text",
      "Music Generation",
      "Voice Cloning Basics",
      "Video Generation",
      "AI Avatars",
      "Multimodal AI"
    ],
    "prerequisiteTitles": [
      "Image Generation"
    ],
    "learningObjectives": [
      "Understand Audio Neural Codecs & Tokenization (SoundStream, EnCodec: Converting continuous audio waveforms into discrete acoustic tokens).",
      "Understand Video Generation Mechanics: Extending 2D Spatial Diffusion U-Nets to 3D Spatio-Temporal Attention (adding Temporal Attention layers across video frames).",
      "Execute Python Speech-to-Text transcription using OpenAI Whisper library."
    ],
    "notes": [
      {
        "title": "3D Spatio-Temporal Video Diffusion & Whisper Python Code",
        "content": "AUDIO & VIDEO GENERATION MECHANICS\n\n1. 3D Spatio-Temporal Video Diffusion (Sora / Runway):\n   Text-to-Video models extend 2D Image Diffusion by processing 3D Video Latent Patches ($T \times H \times W$).\n   - Spatial Attention: Learns object shapes and textures within individual frame slices.\n   - Temporal Self-Attention: Learns motion dynamics, camera movements, and object physics consistency across consecutive time frames $T$.\n\n2. OpenAI Whisper Python Transcription Code:\n```python\nimport whisper\n\n# Load Whisper model (tiny, base, small, medium, large-v3)\nmodel = whisper.load_model(\"base\")\n\n# Transcribe audio file with automatic language detection\nresult = model.transcribe(\"meeting_recording.mp3\")\nprint(\"Detected Language:\", result[\"language\"])\nprint(\"Transcription:\n\", result[\"text\"])\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Deep Learning for Audio Applications",
        "author": "Patrick McCallum"
      }
    ],
    "practiceLinks": [
      {
        "title": "OpenAI Whisper GitHub Repository",
        "url": "https://github.com/openai/whisper"
      }
    ],
    "questionBank": {
      "conceptual": [
        "How do Video Diffusion Models achieve temporal consistency across video frames? (2 Marks)",
        "What is Zero-Shot Voice Cloning in speech synthesis? (2 Marks)",
        "Explain the role of Mel-Spectrograms in Neural Text-to-Speech (TTS) models. (2 Marks)"
      ],
      "sixMarks": [
        "Describe OpenAI Whisper Architecture detailing Audio Spectrogram Log-Mel feature extraction, Encoder-Decoder Transformer processing, and multi-task decoding (speech recognition, language identification, translation). (6 Marks)",
        "Explain AI Avatar Lip-Syncing technology (HeyGen/Synthesia) detailing 3D facial mesh tracking, phoneme-to-viseme mapping, and neural rendering. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Multimodal Generative AI. Detail joint Audio-Visual-Text Embeddings (ImageBind), Suno/Udio Music Generation using hierarchical transformer neural audio codecs, Text-to-Video Spatio-Temporal Transformer Latent Patches (Sora), and deepfake detection algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Retrieval-Augmented Generation (RAG)",
    "slug": "generative-ai-retrieval-augmented-generation",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master enterprise knowledge retrieval: Introduction to RAG (Solving LLM hallucinations & stale knowledge), Knowledge Retrieval architecture, Dense Embedding Models (`text-embedding-3-small`, BGE, E5), Vector Databases (Pinecone, ChromaDB, Weaviate, Qdrant, Milvus, pgvector), Vector Similarity Search (Cosine Similarity $cos\theta = \frac{mathbf{A} cdot mathbf{B}}{|mathbf{A}||mathbf{B}|}$, Euclidean Distance, Dot Product, HNSW Indexing), Document Chunking strategies (Fixed-size, Sentence-level, Recursive Character Chunking, Semantic Chunking), Context Retrieval, and RAG Pipeline Design (Naïve RAG vs Advanced RAG: Re-ranking with Cohere Cross-Encoder, HyDE Hypothetical Document Embeddings, Parent Document Retriever).",
    "subTopics": [
      "Introduction to RAG",
      "Knowledge Retrieval",
      "Embedding Models",
      "Vector Databases",
      "Similarity Search",
      "Document Chunking",
      "Context Retrieval",
      "RAG Pipeline Design"
    ],
    "prerequisiteTitles": [
      "Large Language Models (LLMs)",
      "Prompt Engineering"
    ],
    "learningObjectives": [
      "Calculate Vector Cosine Similarity: $cos(mathbf{A}, mathbf{B}) = \frac{mathbf{A} cdot mathbf{B}}{|mathbf{A}| |mathbf{B}|}$.",
      "Build an end-to-end RAG pipeline using Python, ChromaDB, and OpenAI API.",
      "Implement Advanced RAG techniques: Re-ranking retrieved chunks using a Cross-Encoder to boost Precision@K and Reciprocal Rank (MRR)."
    ],
    "notes": [
      {
        "title": "Vector Cosine Similarity Math & Complete ChromaDB Python RAG Pipeline",
        "content": "RETRIEVAL-AUGMENTED GENERATION (RAG) ARCHITECTURE\n\n1. Cosine Similarity Formula:\n   $\text{Similarity}(mathbf{A}, mathbf{B}) = cos(\theta) = \frac{mathbf{A} cdot mathbf{B}}{|mathbf{A}| |mathbf{B}|} = \frac{sum_{i=1}^n A_i B_i}{sqrt{sum_{i=1}^n A_i^2} sqrt{sum_{i=1}^n B_i^2}}$\n\n2. Complete Python RAG Pipeline with ChromaDB & OpenAI:\n```python\nimport chromadb\nfrom openai import OpenAI\n\n# 1. Initialize Clients & Vector Store\nclient = OpenAI()\nchroma_client = chromadb.Client()\ncollection = chroma_client.create_collection(name=\"pdf_docs\")\n\n# 2. Add Document Chunks to Vector DB\ndocuments = [\n    \"Company policy: Employees get 20 days of paid vacation per year.\",\n    \"Health insurance covers dental and optical treatments up to $2,000.\"\n]\ncollection.add(\n    documents=documents,\n    ids=[\"doc1\", \"doc2\"]\n)\n\n# 3. Query Vector Database\nuser_query = \"How many vacation days do I get?\"\nresults = collection.query(query_texts=[user_query], n_results=1)\nretrieved_context = results['documents'][0][0]\n\n# 4. Generate Answer using LLM with Retrieved Context\nprompt = f\"Answer user query based ONLY on context.\nContext: {retrieved_context}\nQuery: {user_query}\"\nresponse = client.chat.completions.create(\n    model=\"gpt-4o-mini\",\n    messages=[{\"role\": \"user\", \"content\": prompt}]\n)\nprint(\"RAG Answer:\", response.choices[0].message.content)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Building Systems with the ChatGPT API",
        "author": "DeepLearning.AI"
      }
    ],
    "practiceLinks": [
      {
        "title": "ChromaDB Official Documentation",
        "url": "https://docs.trychroma.com/"
      },
      {
        "title": "Pinecone Vector Database Docs",
        "url": "https://docs.pinecone.io/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how RAG solves LLM Hallucinations and Stale Knowledge cutoff problems. (2 Marks)",
        "Write formula for Cosine Similarity between two embedding vectors $mathbf{A}$ and $mathbf{B}$. (2 Marks)",
        "Differentiate between Bi-Encoder embeddings and Cross-Encoder Re-rankers in RAG. (2 Marks)"
      ],
      "sixMarks": [
        "Describe complete RAG Pipeline architecture detailing Document Ingestion, Recursive Chunking, Vector Embedding generation, Vector DB HNSW Indexing, Similarity Search, and Context-Augmented Prompt Generation. (6 Marks)",
        "Compare Document Chunking strategies (Fixed-character chunking with overlap vs Sentence-boundary chunking vs Semantic similarity chunking) on retrieval recall and context fragmentation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced RAG Architecture. Detail HyDE (Hypothetical Document Embeddings), Multi-Query Expansion, Graph RAG (Knowledge Graphs + Vector Search), Parent Document / Sentence Window Retriever, RAG Evaluation Metrics (Ragas framework: Faithfulness, Answer Relevance, Context Recall, Context Precision), and Vector DB scaling (HNSW vs IVFFlat). (10 Marks)"
      ]
    }
  },
  {
    "title": "AI Agents",
    "slug": "generative-ai-ai-agents",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master autonomous agentic workflows: Introduction to AI Agents, Agent Architecture (ReAct Framework: Reasoning + Acting loop), Tool Calling / Function Calling (LLM selecting & executing API tools), Memory Systems (Short-term context memory vs Long-term vector/graph memory), Multi-Agent Systems (Specialized Agent Collaboration: CrewAI, AutoGen, LangGraph), Planning & Reasoning (Task decomposition, Self-Correction, Reflexion), Autonomous Workflows, and Agent Frameworks (LangGraph, CrewAI, AutoGen, LlamaIndex Agents).",
    "subTopics": [
      "Introduction to AI Agents",
      "Agent Architecture",
      "Tool Calling",
      "Memory Systems",
      "Multi-Agent Systems",
      "Planning and Reasoning",
      "Autonomous Workflows",
      "Agent Frameworks"
    ],
    "prerequisiteTitles": [
      "Retrieval-Augmented Generation (RAG)"
    ],
    "learningObjectives": [
      "Understand ReAct (Reasoning + Acting) Agent Loop: Thought $\to$ Action (Tool Call) $\to$ Observation $\to$ Thought $\to$ Final Answer.",
      "Implement OpenAI Tool Calling / Function Calling in Python.",
      "Build a Multi-Agent System using CrewAI / LangGraph where specialized agents (Researcher, Writer, Reviewer) collaborate to complete a complex project."
    ],
    "notes": [
      {
        "title": "ReAct Agent Loop Architecture & OpenAI Tool Calling Python Code",
        "content": "AI AGENT ARCHITECTURE & REACT FRAMEWORK\n\n1. ReAct (Reasoning + Acting) Agent Cycle:\n   - Thought: Agent analyzes user goal and determines missing information.\n   - Action: Agent selects a Tool (e.g. `web_search`, `calculator`, `database_query`) and passes arguments.\n   - Observation: Environment executes tool and returns output result to Agent.\n   - Loop: Agent repeats Thought-Action-Observation cycle until goal is achieved, then returns Final Answer!\n\n2. OpenAI Tool Calling Python Code:\n```python\nimport json\nfrom openai import OpenAI\n\nclient = OpenAI()\n\n# Define Tool Function Schema\ntools = [{\n    \"type\": \"function\",\n    \"function\": {\n        \"name\": \"get_stock_price\",\n        \"description\": \"Get real-time stock price for a ticker\",\n        \"parameters\": {\n            \"type\": \"object\",\n            \"properties\": {\"ticker\": {\"type\": \"str\"}},\n            \"required\": [\"ticker\"]\n        }\n    }\n}]\n\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"What is Apple's current stock price?\"}],\n    tools=tools\n)\ntool_call = response.choices[0].message.tool_calls[0]\nprint(\"Selected Tool:\", tool_call.function.name)\nprint(\"Arguments:\", tool_call.function.arguments)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "AI Engineering: Building Applications with Foundation Models",
        "author": "Chip Huyen"
      }
    ],
    "practiceLinks": [
      {
        "title": "LangGraph Official Documentation",
        "url": "https://langchain-ai.github.io/langgraph/"
      },
      {
        "title": "CrewAI Multi-Agent Framework",
        "url": "https://www.crewai.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the 4 steps of the ReAct (Reasoning + Acting) Agent loop. (2 Marks)",
        "What is Tool Calling / Function Calling in LLM Agents? (2 Marks)",
        "Differentiate between Short-Term Memory and Long-Term Memory in AI Agents. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Multi-Agent System architecture using CrewAI or LangGraph detailing Agent roles, Delegated Tasks, Shared Memory, and Sequential vs Hierarchical workflow execution. (6 Marks)",
        "Write Python code using OpenAI API Function Calling to define a custom weather tool and execute the tool-calling loop. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Autonomous Agentic Workflows. Detail Planning algorithms (Tree-of-Thoughts, Plan-and-Solve), Self-Reflection & Error Recovery (Reflexion framework), State Graph persistence in LangGraph (Checkpointing & Human-in-the-Loop approval nodes), and Agent Safety Guardrails. (10 Marks)"
      ]
    }
  },
  {
    "title": "Fine-Tuning and Model Customization",
    "slug": "generative-ai-fine-tuning-and-model-customization",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master LLM adaptation & optimization: Fine-Tuning Basics (Full Fine-Tuning vs Parameter-Efficient Fine-Tuning PEFT), LoRA (Low-Rank Adaptation $Delta W = B cdot A$ where $r ll d$), QLoRA (Quantized 4-bit NormalFloat NF4 + LoRA), Instruction Tuning (SFT Supervised Fine-Tuning dataset formatting), Alignment techniques: Reinforcement Learning from Human Feedback (RLHF with PPO / DPO Direct Preference Optimization), Model Evaluation, and Benchmarking.",
    "subTopics": [
      "Fine-Tuning Basics",
      "Parameter-Efficient Fine-Tuning (PEFT)",
      "LoRA",
      "Instruction Tuning",
      "Reinforcement Learning from Human Feedback (RLHF)",
      "Model Evaluation",
      "Benchmarking"
    ],
    "prerequisiteTitles": [
      "Large Language Models (LLMs)"
    ],
    "learningObjectives": [
      "Understand LoRA Math: Decomposing weight update $Delta W^{d \times k} = B^{d \times r} cdot A^{r \times k}$ (reducing trainable parameters by $> 99%$!).",
      "Differentiate RLHF with PPO (Reward Model + Proximal Policy Optimization) vs DPO (Direct Preference Optimization eliminating separate reward model).",
      "Fine-tune an open-weights LLM (Llama 3 / Mistral) using Unsloth / Hugging Face `TRL` (Transformer Reinforcement Learning) library."
    ],
    "notes": [
      {
        "title": "LoRA Low-Rank Decomposition Math & DPO Loss Formula",
        "content": "FINE-TUNING: LORA, QLORA & DPO ALIGNMENT\n\n1. LoRA (Low-Rank Adaptation) Mathematical Principle:\n   Instead of updating full pre-trained weight matrix $W_0 in mathbb{R}^{d \times k}$ during fine-tuning, LoRA freezes $W_0$ and adds a low-rank decomposition $Delta W = B cdot A$:\n   $W = W_0 + Delta W = W_0 + \frac{alpha}{r} (B cdot A)$\n   - $A in mathbb{R}^{r \times k}$ initialized with Gaussian random noise.\n   - $B in mathbb{R}^{d \times r}$ initialized with zeros ($Delta W = 0$ at start!).\n   - Rank $r ll min(d,k)$ (e.g. $r=8$ vs $d=4096$). Reduces trainable parameters from 7 Billion down to 5 Million (99.9% parameter reduction!)!\n\n2. DPO (Direct Preference Optimization) Loss:\n   Replaces complex RLHF (Reward Model + PPO) with a simple classification loss on preferred ($y_w$) vs dispreferred ($y_l$) responses:\n   $mathcal{L}_{DPO}(pi_\theta; pi_{ref}) = -mathbb{E}_{(x, y_w, y_l)} left[ log sigma left( \beta log \frac{pi_\theta(y_w|x)}{pi_{ref}(y_w|x)} - \beta log \frac{pi_\theta(y_l|x)}{pi_{ref}(y_l|x)} \right) \right]$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Build a Large Language Model (From Scratch)",
        "author": "Sebastian Raschka"
      }
    ],
    "practiceLinks": [
      {
        "title": "Hugging Face PEFT Library Documentation",
        "url": "https://huggingface.co/docs/peft/index"
      },
      {
        "title": "Unsloth AI Fast Fine-Tuning Library",
        "url": "https://github.com/unslothai/unsloth"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the mathematical principle of LoRA (Low-Rank Adaptation). (2 Marks)",
        "What is QLoRA and how does NF4 (NormalFloat 4-bit) quantization reduce GPU VRAM? (2 Marks)",
        "Compare RLHF (PPO) and DPO (Direct Preference Optimization) for LLM alignment. (2 Marks)"
      ],
      "sixMarks": [
        "Describe the complete LLM Fine-Tuning Pipeline: Raw Data Collection $\to$ Instruction Formatting (ChatML / Llama-3 format) $\to$ Supervised Fine-Tuning (SFT) with LoRA $\to$ DPO Preference Alignment $\to$ Evaluation. (6 Marks)",
        "Write Python code using Hugging Face `peft` and `trl` `SFTTrainer` to configure LORA parameters (`r=16, lora_alpha=32, target_modules=['q_proj', 'v_proj']`) and fine-tune a model. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Model Customization & Optimization. Detail 4-bit and 8-bit Quantization (bitsandbytes, AWQ, GPTQ, GGUF), Catastrophic Forgetting mitigation, ChatML instruction formatting templates, LLM Benchmarking (MMLU, HumanEval, MT-Bench), and serving quantized models with vLLM. (10 Marks)"
      ]
    }
  },
  {
    "title": "Generative AI Development",
    "slug": "generative-ai-development",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master full-stack AI application development: Building AI Applications, AI APIs (OpenAI, Anthropic, Google Gemini, Groq), AI SDKs, LangChain framework (Chains, Expression Language LCEL, Memory), LlamaIndex framework (Data Connectors, Indexing, Query Engines), Hugging Face Transformers (`pipeline()`, AutoModelForCausalLM), Open-Source Models, and Deployment Strategies (vLLM, Ollama, TensorRT-LLM, Serverless Endpoints).",
    "subTopics": [
      "Building AI Applications",
      "AI APIs",
      "AI SDKs",
      "LangChain",
      "LlamaIndex",
      "Hugging Face Transformers",
      "Open-Source Models",
      "Deployment Strategies"
    ],
    "prerequisiteTitles": [
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "learningObjectives": [
      "Build AI pipelines using LangChain Expression Language (LCEL): `chain = prompt | model | output_parser`.",
      "Ingest enterprise data sources using LlamaIndex `SimpleDirectoryReader` and construct query engines.",
      "Deploy open-weights models locally using Ollama and high-throughput production serving using vLLM."
    ],
    "notes": [
      {
        "title": "LangChain LCEL Pipeline Code & vLLM Production Serving",
        "content": "GENERATIVE AI DEVELOPMENT & FRAMEWORKS\n\n1. LangChain Expression Language (LCEL) Pipeline Code:\n```python\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_core.output_parsers import StrOutputParser\nfrom langchain_openai import ChatOpenAI\n\n# Define LCEL Chain: Prompt | LLM | OutputParser\nprompt = ChatPromptTemplate.from_template(\"Explain {topic} in simple terms for a 10-year old.\")\nmodel = ChatOpenAI(model=\"gpt-4o-mini\", temperature=0.5)\noutput_parser = StrOutputParser()\n\nchain = prompt | model | output_parser\nresponse = chain.invoke({\"topic\": \"Quantum Entanglement\"})\nprint(\"LCEL Response:\", response)\n```\n\n2. vLLM High-Throughput Serving Engine:\n   Uses PagedAttention (virtual memory management for KV-Cache) enabling up to 24x higher throughput than standard Hugging Face serving!\n   - Command: `python -m vllm.entrypoints.openai.api_server --model meta-llama/Llama-3.1-8B-Instruct`"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "LangChain in Action",
        "author": "Jacob Lee"
      },
      {
        "title": "Generative AI with LangChain",
        "author": "Ben Auffarth"
      }
    ],
    "practiceLinks": [
      {
        "title": "LangChain Python Documentation",
        "url": "https://python.langchain.com/"
      },
      {
        "title": "LlamaIndex Documentation",
        "url": "https://docs.llamaindex.ai/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is LangChain Expression Language (LCEL) and why is it preferred over legacy chains? (2 Marks)",
        "Compare LangChain and LlamaIndex frameworks based on core design focus. (2 Marks)",
        "What is PagedAttention in vLLM and how does it improve inference throughput? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using LlamaIndex to load a directory of PDF documents, build a VectorStoreIndex, and construct a ChatEngine with conversation memory. (6 Marks)",
        "Compare Deployment Strategies for Open-Source Models: Local Execution (Ollama / LM Studio) vs Self-Hosted Production Server (vLLM / TGI) vs Cloud Serverless Endpoints (Groq / Together AI / Anyscale). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Full-Stack AI Application Architecture. Detail Frontend (Next.js / Streamlit), Backend API (FastAPI async streaming endpoints), Orchestration (LangChain / LlamaIndex), Vector DB (Pinecone / Qdrant), Observability & Tracing (LangSmith / Phoenix / Arize), and Cost/Latency optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Responsible AI and Ethics",
    "slug": "generative-ai-responsible-ai-and-ethics",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master AI safety & governance: AI Ethics principles, Algorithmic Bias & Toxicity, Fairness, Hallucinations & Factuality, Privacy & Data Protection (GDPR, PII leakage), Copyright & Intellectual Property considerations (Training data copyright lawsuits, AI-generated content ownership), Security Risks (Prompt Injection, Jailbreaking, Model Inversion, Data Poisoning), AI Governance frameworks (EU AI Act risk tiers), and Responsible AI Practices.",
    "subTopics": [
      "AI Ethics",
      "Bias in AI",
      "Fairness",
      "Hallucinations",
      "Privacy",
      "Copyright Considerations",
      "Security Risks",
      "AI Governance",
      "Responsible AI Practices"
    ],
    "prerequisiteTitles": [
      "Introduction to Generative AI"
    ],
    "learningObjectives": [
      "Understand EU AI Act Risk Tiers: Unacceptable Risk (Banned: social scoring), High Risk (Strict audit: healthcare/recruitment), Limited Risk (Transparency: chatbots), Minimal Risk.",
      "Implement Guardrails (NeMo Guardrails, Llama Guard) to filter toxic, biased, or unsafe user prompts and model outputs.",
      "Mitigate Deepfakes & Copyright issues using Watermarking (C2PA standard) and Synthetic Data provenance."
    ],
    "notes": [
      {
        "title": "EU AI Act Risk Classification & Guardrails Architecture",
        "content": "RESPONSIBLE AI, SAFETY & EU AI ACT\n\n1. EU AI Act Risk Classification Matrix:\n   - Unacceptable Risk (Prohibited): Social scoring by governments, real-time biometric identification in public spaces, cognitive behavioral manipulation.\n   - High Risk (Mandatory Compliance): Critical infrastructure, medical devices, employment/recruitment AI, credit scoring, law enforcement.\n   - Limited / Specific Risk (Transparency Obligations): AI Chatbots, Deepfakes, Synthetic Media (Must disclose that content is AI-generated!).\n   - Minimal Risk: AI-enabled video games, spam filters (No restrictions).\n\n2. Guardrails Architecture (Meta Llama Guard / NeMo Guardrails):\n   Positioned between User and LLM to enforce safety policies:\n   - Input Guardrail: Scans user prompt for Jailbreaks, PII, Malware code requests, Toxic content.\n   - Output Guardrail: Scans LLM response for Hallucinations, Off-topic drift, Confidential data leaks."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Ethics of Artificial Intelligence",
        "author": "S. Matthew Liao"
      }
    ],
    "practiceLinks": [
      {
        "title": "NIST AI Risk Management Framework (AI RMF)",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "title": "Meta Llama Guard Documentation",
        "url": "https://huggingface.co/meta-llama/Llama-Guard-3-8B"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 risk levels defined under the European Union AI Act (EU AI Act). (2 Marks)",
        "What are AI Guardrails (e.g. Llama Guard) and where are they deployed in an AI system? (2 Marks)",
        "Explain the C2PA standard for AI content provenance and watermarking. (2 Marks)"
      ],
      "sixMarks": [
        "Explain 4 major Security Risks in Generative AI: (a) Indirect Prompt Injection, (b) Jailbreaking, (c) Training Data Poisoning, (d) Model Inversion. (6 Marks)",
        "Discuss Copyright and Intellectual Property challenges surrounding Generative AI training data and ownership of AI-generated creative outputs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Responsible AI Implementation Strategy. Detail Fairness and Bias auditing in training datasets, Privacy-Preserving Machine Learning (Differential Privacy, Federated Learning), Preventing PII leakage, Hallucination benchmarking (TruthfulQA), and establishing an Enterprise AI Governance Board. (10 Marks)"
      ]
    }
  },
  {
    "title": "Real-World Applications",
    "slug": "generative-ai-real-world-applications",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore industry-specific GenAI deployments: AI Chatbots & Customer Support Automation, Coding Assistants (GitHub Copilot, Cursor AI), Healthcare Applications (Clinical documentation, Drug discovery, Medical imaging analysis), Education Platforms (Personalized AI tutors, Automated grading), Financial Services (Fraud detection, Automated financial analysis, Contract review), Marketing Automation (Copywriting, Ad creative generation), and AI Research Assistants.",
    "subTopics": [
      "AI Chatbots",
      "Coding Assistants",
      "Customer Support Automation",
      "Healthcare Applications",
      "Education Platforms",
      "Financial Services",
      "Marketing Automation",
      "Research Assistants"
    ],
    "prerequisiteTitles": [
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI Development"
    ],
    "learningObjectives": [
      "Analyze Coding Assistants (GitHub Copilot / Cursor AI): In-editor fill-in-the-middle (FIM) completion & repository-wide RAG context.",
      "Understand AI in Healthcare: HIPAA-compliant ambient clinical intelligence (e.g. Nuance DAX transcribing doctor-patient visits into EHR notes).",
      "Understand Customer Support Automation: Agentic escalation workflows with human-in-the-loop fallback."
    ],
    "notes": [
      {
        "title": "Fill-in-the-Middle (FIM) Code Completion & Industry Case Studies",
        "content": "REAL-WORLD GENAI APPLICATIONS & ARCHITECTURES\n\n1. Fill-In-the-Middle (FIM) Code Completion Paradigm:\n   Coding Assistants (GitHub Copilot, Cursor) use FIM training:\n   - Prompt format: `<PRE> Prefix Code <SUF> Suffix Code <MID>`\n   - Model generates the missing middle code block connecting Prefix and Suffix seamlessly within the IDE!\n\n2. Financial Contract Review AI Pipeline:\n   - Document Ingestion: PDF OCR parsing using Unstructured.io.\n   - Hybrid RAG: Dense vector search + Sparse BM25 keyword search over SEC 10-K filings.\n   - Structured Risk Audit: LLM extracts risk factors into JSON Pydantic schema with citation page numbers."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Generative AI in Action",
        "author": "Amit Bahree"
      }
    ],
    "practiceLinks": [
      {
        "title": "GitHub Copilot Features Guide",
        "url": "https://github.com/features/copilot"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Fill-in-the-Middle (FIM) training paradigm in AI Coding Assistants. (2 Marks)",
        "How does Ambient Clinical Intelligence assist doctors in healthcare? (2 Marks)",
        "What is Hybrid Search (Vector + BM25) in financial document analysis? (2 Marks)"
      ],
      "sixMarks": [
        "Describe system architecture for an Enterprise Customer Support AI Chatbot detailing RAG knowledge lookup, intent classification, sentiment analysis, tool execution, and human agent handoff. (6 Marks)",
        "Analyze Generative AI in Drug Discovery detailing 3D protein structure prediction (AlphaFold) and de novo molecular generator models. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industry GenAI Case Studies. Detail Marketing Campaign Automation (Personalized copy generation at scale + DALL-E 3 ad creative variations), Legal Contract Review AI (Clause comparison & anomaly detection), Education AI Tutors (Socratic method tutoring without giving direct answers), and ROI evaluation metrics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Hands-on Projects",
    "slug": "generative-ai-hands-on-projects",
    "order": 15,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Build portfolio-grade GenAI projects: Project 1: Conversational AI Chatbot with Memory; Project 2: AI Resume Analyzer & Job Matcher; Project 3: Multi-Format AI Document Summarizer; Project 4: AI Code Assistant & Unit Test Generator; Project 5: AI Image Generator with ControlNet; Project 6: AI Academic Research Assistant with RAG; Project 7: AI Customer Support Bot with Tool Calling; Project 8: AI Learning Platform with Interactive Quizzes.",
    "subTopics": [
      "AI Chatbot",
      "AI Resume Analyzer",
      "AI Document Summarizer",
      "AI Code Assistant",
      "AI Image Generator",
      "AI Research Assistant",
      "AI Customer Support Bot",
      "AI Learning Platform"
    ],
    "prerequisiteTitles": [
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "Generative AI Development"
    ],
    "learningObjectives": [
      "Build Project 2 (AI Resume Analyzer): Parse PDF resumes, compare against Job Descriptions using embeddings, and output match score with missing keywords.",
      "Build Project 6 (AI Research Assistant): Ingest arXiv research PDFs into ChromaDB RAG pipeline and generate synthesis reports with inline citations.",
      "Deploy Streamlit / Next.js web application connected to OpenAI / Groq API endpoints."
    ],
    "notes": [
      {
        "title": "AI Resume Analyzer & PDF RAG Project Implementation Code",
        "content": "HANDS-ON PROJECT: AI RESUME ANALYZER & JOB MATCHER\n\n1. Complete Streamlit AI Resume Analyzer Code:\n```python\nimport streamlit as st\nimport pypdf\nfrom openai import OpenAI\n\nst.title(\"📄 AI Resume Analyzer & Job Matcher\")\n\nuploaded_resume = st.file_uploader(\"Upload Resume (PDF)\", type=[\"pdf\"])\njob_description = st.text_area(\"Paste Job Description\")\n\nif uploaded_resume and job_description and st.button(\"Analyze Match\"):\n    # Extract PDF Text\n    reader = pypdf.PdfReader(uploaded_resume)\n    resume_text = \"\".join([page.extract_text() for page in reader.pages])\n    \n    # Prompt LLM for Analysis\n    client = OpenAI()\n    prompt = f\"\"\"Compare the Candidate Resume against the Job Description.\nReturn analysis in Markdown:\n1. Match Percentage (0-100%)\n2. Key Matching Skills\n3. Missing Critical Skills / Keywords\n4. 3 Actionable Suggestions to Improve Resume\n\nResume:\n{resume_text}\n\nJob Description:\n{job_description}\n\"\"\"\n    response = client.chat.completions.create(\n        model=\"gpt-4o\",\n        messages=[{\"role\": \"user\", \"content\": prompt}]\n    )\n    st.markdown(response.choices[0].message.content)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Building LLM Apps",
        "author": "Valentina Alto"
      }
    ],
    "practiceLinks": [
      {
        "title": "Streamlit Official App Gallery",
        "url": "https://streamlit.io/gallery"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 key components of an AI Resume Analyzer pipeline. (2 Marks)",
        "How is PDF text extraction performed in Python (`pypdf` / `pdfplumber`) for GenAI processing? (2 Marks)",
        "List 3 Streamlit UI widgets useful for GenAI interactive apps. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python Streamlit code to build an AI Document Summarizer that allows users to upload a text file, choose summary length (Short/Medium/Long), and display summary. (6 Marks)",
        "Describe full architecture for an AI Code Assistant project detailing code parsing, docstring generation, unit test creation (`pytest`), and syntax error fixing. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Project Specification: Multi-User AI Academic Research Assistant. Detail PDF ingestion, Recursive Character Splitting, Vector Database storage (ChromaDB), Semantic Similarity Search, Re-ranking with Cohere, Streamlit chat interface with message history memory, citation links, and hosting on Streamlit Community Cloud. (10 Marks)"
      ]
    }
  },
  {
    "title": "Emerging Trends in Generative AI",
    "slug": "generative-ai-emerging-trends",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore frontier innovations: Native Multimodal Models (Omni architectures GPT-4o, Gemini 1.5), Small Language Models (SLMs - Phi-3, Llama-3.2-1B/3B, Gemma 2 for on-device execution), AI Copilots, Edge AI (running LLMs on smartphones & NPU hardware), AI Robotics (VLA Vision-Language-Action models e.g. RT-2, Figure 01), Agentic AI, Open-Weight Models ecosystem (DeepSeek V3 / R1 reasoning models), and the Future of AGI (Artificial General Intelligence).",
    "subTopics": [
      "Multimodal Models",
      "Small Language Models (SLMs)",
      "AI Copilots",
      "Edge AI",
      "AI Robotics",
      "Agentic AI",
      "Open-Weight Models",
      "Future of Generative AI"
    ],
    "prerequisiteTitles": [
      "Generative AI Models",
      "AI Agents",
      "Generative AI Development"
    ],
    "learningObjectives": [
      "Understand Vision-Language-Action (VLA) Models in Robotics: Translating visual inputs and natural language commands directly into low-level robot arm motor actions.",
      "Understand Small Language Models (SLMs - Phi-3, Gemma): Achieving near-GPT-3.5 performance at $< 3\text{B}$ parameters for private on-device NPU execution.",
      "Understand Reasoning-First Models (DeepSeek R1 / OpenAI o1/o3): Utilizing Test-Time Compute & Reinforcement Learning for long chain-of-thought verification."
    ],
    "notes": [
      {
        "title": "Test-Time Compute Scaling & VLA Robotics Architecture",
        "content": "FRONTIER GENAI TRENDS: REASONING MODELS & VLA ROBOTICS\n\n1. Test-Time Compute Scaling (OpenAI o1 / DeepSeek R1):\n   Traditional LLMs spend compute during Pre-training ($N \times D$ scaling laws). Reasoning Models spend additional compute DURING INFERENCE (Test-Time Compute):\n   - Generates thousands of internal Chain-of-Thought reasoning steps.\n   - Evaluates alternative solution branches, self-corrects errors, and verifies mathematical proofs BEFORE returning final response!\n\n2. Vision-Language-Action (VLA) Robotics (RT-2 / Figure 01):\n   Combines Vision-Language Models (VLMs) with Robot Control:\n   - Input: Camera image of kitchen counter + User command \"Pick up the red apple and hand it to me\".\n   - Model Processing: Jointly processes visual pixels and text instruction.\n   - Output: 6-DOF Robot Gripper action tokens $(x, y, z, \text{roll}, \text{pitch}, \text{yaw}, \text{gripper_state})$ executed directly by robot actuators in real-time!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell, Peter Norvig"
      }
    ],
    "practiceLinks": [
      {
        "title": "DeepSeek AI Open Models",
        "url": "https://www.deepseek.com/"
      },
      {
        "title": "Ollama On-Device LLM Runner",
        "url": "https://ollama.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Test-Time Compute scaling in reasoning models like DeepSeek R1 and OpenAI o1? (2 Marks)",
        "What are Small Language Models (SLMs) and state 2 advantages of running SLMs on Edge NPU hardware. (2 Marks)",
        "What is a Vision-Language-Action (VLA) model in AI Robotics? (2 Marks)"
      ],
      "sixMarks": [
        "Compare Agentic AI (Autonomous multi-step planning, tool use, self-correction) vs Standard LLM Chat (Single-turn prompt-response). (6 Marks)",
        "Describe how Neural Processing Units (NPUs) in smartphones enable private local execution of SLMs (Llama 3.2 1B) without internet connectivity. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on the Future of Generative AI & AGI Pathways. Detail Multimodal Omni architectures, Reasoning Models (DeepSeek R1 RL without SFT), Embodied AI (Humanoid Robotics Figure 01 / Tesla Optimus), Energy-efficient neuromorphic hardware, and societal readiness frameworks for AGI. (10 Marks)"
      ]
    }
  }
];

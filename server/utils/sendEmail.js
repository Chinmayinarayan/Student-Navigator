const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  let transporter;

  // Check if SMTP is configured in env
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Generate a test SMTP service from Ethereal Email if no credentials are provided in env
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } catch (err) {
      console.warn("Failed to create test email account, falling back to mock logger:", err.message);
      // Fallback fallback: mock send
      console.log("---------------- MOCK EMAIL LOGGER ----------------");
      console.log(`To: ${options.email}`);
      console.log(`Subject: ${options.subject}`);
      console.log(`Body: ${options.message}`);
      console.log("-------------------------------------------------");
      return;
    }
  }

  const message = {
    from: `${process.env.FROM_NAME || "Student Navigator Team"} <${process.env.FROM_EMAIL || "no-reply@studentnavigator.org"}>`,
    to: options.email,
    subject: options.subject,
    html: options.html || `<p>${options.message}</p>`,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("Email sent successfully: %s", info.messageId);

    // If sent using test Ethereal Email, log preview URL
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log("Test Preview URL: %s", previewUrl);
    }
  } catch (error) {
    console.warn("Primary SMTP failed (%s). Falling back to Ethereal Test Mail...", error.message);

    try {
      const testAccount = await nodemailer.createTestAccount();
      const fallbackTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const fallbackInfo = await fallbackTransporter.sendMail(message);
      console.log("Email sent successfully via Ethereal fallback: %s", fallbackInfo.messageId);
      const previewUrl = nodemailer.getTestMessageUrl(fallbackInfo);
      if (previewUrl) {
        console.log("Test Preview URL: %s", previewUrl);
      }
    } catch (fallbackError) {
      console.warn("Fallback Ethereal SMTP also failed, writing to mock log:", fallbackError.message);
      console.log("---------------- MOCK EMAIL LOGGER ----------------");
      console.log(`To: ${options.email}`);
      console.log(`Subject: ${options.subject}`);
      console.log(`Body: ${options.html || options.message}`);
      console.log("-------------------------------------------------");
    }
  }
};

module.exports = sendEmail;

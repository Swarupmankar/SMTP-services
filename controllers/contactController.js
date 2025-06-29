const transporter = require("../config/mailer");
const { validationResult } = require("express-validator");

exports.sendSuggestion = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: `"${name}" <MS_yQbyR1@test-xkjn41m7jj04z781.mlsender.net>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: subject || "New Message from Contact Form",
      html: `
       <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #ffffff; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);">
        
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(to right, #f97316, #ea580c); padding: 24px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0; font-size: 22px;">📩 New Contact / Suggestion</h2>
              <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">A new message has been submitted from your website</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px; color: #1f2937;">
              <p style="margin-bottom: 12px;"><strong style="color: #ea580c;">Name:</strong> ${name}</p>
              <p style="margin-bottom: 12px;"><strong style="color: #ea580c;">Email:</strong> ${email}</p>
              <p style="margin-bottom: 12px;"><strong style="color: #ea580c;">Message:</strong> ${message}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; text-align: center; font-size: 13px; color: #6b7280; padding: 18px; border-top: 1px solid #e5e7eb;">
              &copy; 2025 Amit Kajale. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      status: true,
      message: "Message sent successfully! We'll get back to you shortly.",
    });
  } catch (err) {
    console.error("❌ Mail send failed:", err.message);
    return res.status(500).json({
      status: false,
      message: "Failed to send your message. Please try again later.",
      error: err.message,
    });
  }
};

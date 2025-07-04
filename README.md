# 📬 Mailer Service – Contact/Suggestion API with MailerSend + Node.js

This project is a simple, fast, and secure backend service built with **Node.js** and **Express.js**, allowing users to send **contact/suggestion messages** via email using **MailerSend SMTP**.

It includes:

- 📧 SMTP email delivery using MailerSend
- ✅ Express validator for input validation
- ⚙️ Nodemailer for sending styled HTML emails
- 🔄 `nodemon` for live reload during development
- 🩺 `/ping` route to check server status
- ✉️ Pre-built email UI (branded & responsive)

---

## 🚀 Features

- **POST /api/contact** — Send contact/suggestion to admin via email
- **GET /ping** — Check if server is alive (status/health route)
- ✅ Fully styled, professional HTML email layout
- 🔐 Secure `.env`-based SMTP configuration

---

## 📦 Tech Stack

- Node.js
- Express.js
- Nodemailer
- MailerSend SMTP
- dotenv
- express-validator

---

## 📁 Folder Structure

mailer-service/
├── config/ # Mailer configuration
│ └── mailer.js
├── controllers/ # Email logic
│ └── contactController.js
├── middlewares/ # Error handling
│ └── errorHandler.js
├── routes/ # API routes
│ ├── contactRoutes.js
│ └── pingRoutes.js
├── .env # Environment variables
├── app.js # Main entry file
├── package.json

## 🛠️ Setup Instructions

1. **Clone the repo**

## bash

git clone https://github.com/your-username/mailer-service.git
cd mailer-service
Install dependencies

## bash

npm install
Configure .env

Create a .env file in the root:

.env
PORT=5000
ADMIN_EMAIL=your@email.com

SMTP_HOST=smtp.mailersend.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-mailersend-username
SMTP_PASS=your-mailersend-password
Run in development

## bash

npm run dev
Or run in production

## bash

npm start
📬 Example API Usage
Send Suggestion
POST /api/contact

Body (JSON):

json
{
"name": "John Doe",
"email": "john@example.com",
"subject": "Feature Request",
"message": "Please add support for custom animations!"
}
Response:

json
{
"status": true,
"message": "Suggestion sent successfully! We'll get back to you shortly."
}
💡 Customization
🔧 Customize HTML email design in contactController.js

🌐 Change recipient via ADMIN_EMAIL in .env

🖼 Add branding, logo, or signature in email template

🧪 Health Check
GET /ping → { status: "success", message: "...", timestamp: ... }

🛡️ Security Notes
DO NOT commit your .env file

Make sure your MailerSend domain and sender email are verified

Validate all form inputs before sending

🙌 Credits
Made with ❤️ by $warup

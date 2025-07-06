# Backend - Contact Form Email

This backend handles sending emails from your portfolio's contact form using Node.js, Express, and Nodemailer.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in this folder with the following content:
   ```env
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_TO=your_gmail_address@gmail.com
   ```
   - Use a Gmail App Password for EMAIL_PASS (recommended for security).
   - [How to create a Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en)

3. Start the server:
   ```bash
   npm start
   ```

## API
- POST `/api/contact`
  - Body: `{ name, email, subject, message }`
  - Sends an email to your inbox with the form data. 
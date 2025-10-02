// EmailJS Configuration
// Get these values from https://www.emailjs.com/
// 1. Create an account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Copy the service ID, template ID, and public key here

export const emailjsConfig = {
  serviceId: 'service_s0dquht', // Replace with your EmailJS service ID
  templateId: 'template_8s4avle', // Replace with your EmailJS template ID
  publicKey: 'zh3Gt9Yg5sVEnyg4a', // Replace with your EmailJS public key
  recipientEmail: 'onatunde.samuel@gmail.com' // Your email address
};

// EmailJS Template Variables (these should match your template):
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_email}} - Your email address

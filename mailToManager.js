/* eslint-disable no-undef */
require("dotenv").config();
const nodemailer = require("nodemailer");

const mailToManager = async ({ firstName, lastName, email, purpose }) => {
  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.port,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  await transporter.sendMail({
    from: `"Al-Khalifah" <${process.env.user}>`,
    to: `${email}`,
    subject: `Message Sent`,
    text: `Your message has been received`,
    html: `
    <section style="font-family: Arial, Helvetica, sans-serif">
        <p>Hi, <b>${firstName + " " + lastName}!</p>
        <p>Your message has been sent.</p>
        
        <p>
            This is an automatic message to notify you that your message about ${purpose} has been sent to Al-Khalifah, and you'll get feedback, shortly.
        </p>
        
        <p>
           <small>Kindly, ignore, this mail if you didn't send any message.</small>
        </p>
  </section>
    `,
  });

  console.log("message sent");
};

module.exports = mailToManager;

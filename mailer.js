/* eslint-disable no-undef */
require("dotenv").config();
const nodemailer = require("nodemailer");

const mailer = async ({ firstName, lastName, email, message, purpose }) => {
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
    from: `"PortFolio" <${process.env.user}>`,
    to: "oyedejimonsur@gmail.com",
    subject: `${purpose}`,
    text: `${message}`,
    html: `
    <section style="font-family: Arial, Helvetica, sans-serif">
        <p>Hi, <b>Al-Khalifah</b>!</p>
        <p>New Message from Potential Hiring Manager</p>
        <p>
            From: ${firstName + " " + lastName}
        </p>
        <p>
            Email: ${email}
        </p>
        <p>
            Purpose: ${purpose}
        </p>
        <p>
            Message: ${message}
        </p>
  </section>
    `,
  });

  console.log("message sent");
};

module.exports = mailer;

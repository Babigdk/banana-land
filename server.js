const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Configure nodemailer to use your email service provider
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail", "Outlook", etc.
  auth: {
    user: "abdulbabi9@gmail.com",
    pass: "07080877504",
  },
});

// Define an endpoint to send emails
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, remarks } = req.body;

    // Create an email message
    const mailOptions = {
      from: "abdulbabi9@gmail.com",
      to: email,
      subject: "Inquiry",
      text: `Hello ${name},\n\nThank you for your inquiry.\n\nRemarks: ${remarks}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully.");
    res.sendStatus(200); // Respond with success status
  } catch (error) {
    console.error("Error sending email:", error);
    res.sendStatus(500); // Respond with error status
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

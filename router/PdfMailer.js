const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const fs = require("fs").promises;
const pdf = require("html-pdf");
const PdfTemplate = require("../helper/PdfTemplate");
const FormPdfmodel = require("../models/FormPdfmodel");

// Load environment variables if you use dotenv
// require("dotenv").config();

// Middleware for input validation
function validateInput(req, res, next) {
  const { name, phone, citizen, srcCountry, dstCountry, email, Type } = req.body;
  if (!name || !phone || !citizen || !srcCountry || !dstCountry || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
}

// Promisified version of pdf.create
// function createPdf(htmlContent, pdfOptions) {
//   return new Promise((resolve, reject) => {
//     pdf.create(htmlContent, pdfOptions).toFile("generated.pdf", (err, pdfRes) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(pdfRes.filename);
//       }
//     });
//   });
// }

// Promisified version of fs.readFileSync
function readPdfFile(filename) {
  return fs.readFile(filename);
}

// Send email using Nodemailer
async function sendEmail(email, pdfBytes, name) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "eclecticatmsl23@gmail.com", // Use environment variables
      pass: "okotejdvjinfjwff", // Use environment variables
    },
  });

  const mailOptions = {
    from: "eclecticatmsl23@gmail.com", // Use environment variables
    to: email,
    subject: "Generated PDF",
    text: `<b>${name}</b>, Here is your generated PDF.`,
    attachments: [
      {
        filename: "generated.pdf",
        content: pdfBytes,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

router.post("/pdf-mailer", async (req, res) => {
  try {
    const { name, phone, citizen, srcCountry, dstCountry, email, Type } = req.body;

    // Generate HTML content for PDF
    const htmlContent = PdfTemplate(citizen, dstCountry, Type);

    // PDF options
    const pdfOptions = {
      format: "Letter",
      margin: {
        top: "10mm",
        right: "10mm",
        bottom: "10mm",
        left: "10mm",
      },
    };

    // Create the PDF and read its content
    const pdfFilename = await createPdf(htmlContent, pdfOptions);
    const pdfBytes = await readPdfFile(pdfFilename);

    // Send the email with the PDF attachment
    await sendEmail(email, pdfBytes, name);

    // Save user data to the database
    const newUser = await FormPdfmodel.create({
      name,
      email,
      phone,
      citizen,
      srcCountry,
      dstCountry,
    });

    console.log("Email sent and user data saved.");
    res.status(200).json({ message: "Email sent successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

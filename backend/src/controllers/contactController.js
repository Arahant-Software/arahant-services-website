const pool = require("../db");
const { sendContactEmail } = require("../mailer");

async function createContactRequest(req, res) {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    await pool.query(
      "INSERT INTO contact_requests (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone || null, company || null, service || null, message || null]
    );

    await sendContactEmail({ name, email, phone, company, service, message });

    res.json({ success: true });
  } catch (error) {
    console.error("Contact request failed:", error);
    res.status(500).json({ error: "Failed to send your enquiry. Please try again or contact us directly." });
  }
}

module.exports = { createContactRequest };

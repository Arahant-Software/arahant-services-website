const pool = require("../db");
const { sendCallbackEmail } = require("../mailer");

const TIME_LABELS = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
};

async function createCallbackRequest(req, res) {
  try {
    const { name, email, phone, time } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone number are required." });
    }

    await pool.query(
      "INSERT INTO callback_requests (name, email, phone, preferred_time) VALUES (?, ?, ?, ?)",
      [name, email || null, phone, time || null]
    );

    await sendCallbackEmail({
      name,
      email,
      phone,
      timeLabel: TIME_LABELS[time] || "Not specified",
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Callback request failed:", error);
    res.status(500).json({ error: "Failed to send request. Please try again or call us directly." });
  }
}

module.exports = { createCallbackRequest };

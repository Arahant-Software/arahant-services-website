import nodemailer from "nodemailer";

const TO_EMAIL = "rahulhulikoppe38@gmail.com";

const TIME_LABELS = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml({ name, email, phone, timeLabel, receivedAt }) {
  const row = (label, value, link) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ECEAE3;color:#8A8A8E;font-size:12px;font-weight:700;letter-spacing:0.06em;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid #ECEAE3;color:#121435;font-size:15px;font-weight:600;">${
        link ? `<a href="${link}" style="color:#121435;text-decoration:none;">${value}</a>` : value
      }</td>
    </tr>`;

  return `
  <div style="background-color:#F3F2EC;padding:40px 16px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(18,20,53,0.10);">
      <!-- Header -->
      <tr>
        <td style="background-color:#121435;padding:32px 40px;text-align:center;">
          <p style="margin:0;color:#FFFFFF;font-size:18px;font-weight:800;letter-spacing:0.04em;">ARAHANT SERVICES</p>
          <p style="margin:8px 0 0;display:inline-block;background-color:rgba(255,87,34,0.15);color:#FF8A5C;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:5px 14px;border-radius:999px;">New Call Back Request</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:36px 40px 8px;">
          <p style="margin:0 0 24px;color:#3B3D4D;font-size:15px;line-height:1.6;">
            A visitor on the Arahant Services website has requested a call back. Their details are below:
          </p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${row("FULL NAME", escapeHtml(name))}
            ${row("EMAIL", escapeHtml(email) || "Not provided", email ? `mailto:${encodeURIComponent(email)}` : null)}
            ${row("PHONE", escapeHtml(phone), `tel:${encodeURIComponent(phone)}`)}
            ${row("PREFERRED CALL TIME", timeLabel)}
          </table>

          <div style="margin-top:32px;text-align:center;">
            <a href="tel:${encodeURIComponent(phone)}" style="display:inline-block;background-color:#FF5722;color:#FFFFFF;padding:14px 36px;border-radius:999px;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.02em;">
              Call ${escapeHtml(name).split(" ")[0]} Now
            </a>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color:#F3F2EC;padding:20px 40px;text-align:center;border-top:1px solid #ECEAE3;">
          <p style="margin:0;color:#9A9A9E;font-size:12px;">Submitted via the call back form on the Arahant Services website</p>
          <p style="margin:4px 0 0;color:#9A9A9E;font-size:12px;">Received ${receivedAt} (NZT)</p>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(request) {
  try {
    const { name, email, phone, time } = await request.json();

    if (!name || !phone) {
      return Response.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const timeLabel = TIME_LABELS[time] || "Not specified";
    const receivedAt = new Date().toLocaleString("en-NZ", {
      timeZone: "Pacific/Auckland",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Arahant Services Website" <${process.env.GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `New Call Back Request — ${name}`,
      text: [
        "New Call Back Request",
        "",
        `Name: ${name}`,
        `Email: ${email || "Not provided"}`,
        `Phone: ${phone}`,
        `Preferred Call Time: ${timeLabel}`,
        "",
        `Received ${receivedAt} (NZT)`,
        "Submitted via the call back form on the Arahant Services website",
      ].join("\n"),
      html: buildHtml({ name, email, phone, timeLabel, receivedAt }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Callback request email failed:", error);
    return Response.json(
      { error: "Failed to send request. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

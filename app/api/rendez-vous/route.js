import { Resend } from "resend";

const TO_EMAIL = "acarneado.shift@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = "Merci d'indiquer votre nom.";
  if (!email || !EMAIL_RE.test(email.trim())) errors.email = "Adresse email invalide.";
  if (!message || message.trim().length < 10) {
    errors.message = "Merci de préciser votre message (10 caractères minimum).";
  }
  return errors;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, message, profile, interest, website } = body || {};

  // Honeypot field: real visitors never see or fill it (hidden from layout and
  // screen readers). A filled value means a bot — pretend success, send nothing.
  if (website) {
    return Response.json({ ok: true });
  }

  const errors = validate({ name, email, message });
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  try {
    const { error } = await resend.emails.send({
      from: "SHIFT — Site web <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: trimmedEmail,
      subject: `Nouvelle demande de rendez-vous — ${trimmedName}`,
      text: [
        `Nom : ${trimmedName}`,
        `Email : ${trimmedEmail}`,
        profile ? `Profil : ${profile}` : null,
        interest ? `Concerne : ${interest}` : null,
        "",
        "Message :",
        trimmedMessage,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "L'envoi a échoué. Réessayez plus tard." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return Response.json({ error: "L'envoi a échoué. Réessayez plus tard." }, { status: 502 });
  }
}

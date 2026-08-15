import { NextResponse } from "next/server";

/**
 * PRD §10 contact form endpoint. No Resend API key exists yet — this
 * validates and logs the payload so the form's real behavior (loading state,
 * redirect to /gracias, honeypot rejection) is testable today. Wire the
 * actual send once RESEND_API_KEY is set:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Aura Beauty Studio <hola@aurabeautystudio.com>",
 *     to: "crdiris2428@gmail.com",
 *     subject: `Nuevo contacto — ${data.servicio}`,
 *     html: renderContactEmail(data),
 *   });
 */
export async function POST(request) {
  const data = await request.json();

  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const required = ["nombre", "telefono", "correo", "servicio", "consent"];
  const missing = required.filter((key) => !data[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Campos faltantes: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  if (!/^\d{10}$/.test(data.telefono.replace(/\D/g, ""))) {
    return NextResponse.json(
      { ok: false, error: "Ingresa un número de 10 dígitos" },
      { status: 400 }
    );
  }

  console.log("[contact] nuevo mensaje (sin envío real — falta RESEND_API_KEY):", data);

  return NextResponse.json({ ok: true });
}

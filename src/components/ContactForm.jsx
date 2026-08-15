"use client";

import { useState } from "react";

const SERVICES = [
  "Uñas",
  "Pestañas",
  "Cejas",
  "Maquillaje",
  "Depilación",
  "Masajes corporales",
];

const initialState = {
  nombre: "",
  telefono: "",
  correo: "",
  servicio: "",
  fecha: "",
  hora: "",
  cumpleanos: "",
  mensaje: "",
  consent: false,
  honeypot: "",
};

/**
 * PRD §10 — separate from the booking module, for someone who wants to ask
 * before committing. Real-time validation with specific error copy, disabled
 * submit state during send, honeypot anti-spam, redirect to /gracias.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const next = {};
    if (form.nombre.trim().length < 2) next.nombre = "Ingresa tu nombre completo";
    if (!/^\d{10}$/.test(form.telefono.replace(/\D/g, "")))
      next.telefono = "Ingresa un número de 10 dígitos";
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) next.correo = "Ingresa un correo válido";
    if (!form.servicio) next.servicio = "Elige un servicio";
    if (!form.consent) next.consent = "Acepta el tratamiento de datos para continuar";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      window.location.href = "/gracias";
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        name="empresa"
        value={form.honeypot}
        onChange={(e) => update("honeypot", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <TextField
        label="Nombre"
        value={form.nombre}
        onChange={(v) => update("nombre", v)}
        error={errors.nombre}
      />
      <TextField
        label="Teléfono / WhatsApp"
        type="tel"
        value={form.telefono}
        onChange={(v) => update("telefono", v)}
        error={errors.telefono}
      />
      <TextField
        label="Correo"
        type="email"
        value={form.correo}
        onChange={(v) => update("correo", v)}
        error={errors.correo}
      />

      <div>
        <label className="eyebrow-label mb-2 block text-ink-600">
          Servicio de interés
        </label>
        <select
          value={form.servicio}
          onChange={(e) => update("servicio", e.target.value)}
          className="w-full rounded-[var(--radius-aura)] border border-nude-200 bg-white px-4 py-3 text-ink-900 outline-none focus-visible:border-gold-700"
        >
          <option value="">Selecciona un servicio</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.servicio && <ErrorText>{errors.servicio}</ErrorText>}
      </div>

      <textarea
        placeholder="Mensaje (opcional)"
        maxLength={500}
        value={form.mensaje}
        onChange={(e) => update("mensaje", e.target.value)}
        rows={3}
        className="w-full rounded-[var(--radius-aura)] border border-nude-200 bg-white px-4 py-3 text-ink-900 outline-none placeholder:text-ink-600/60 focus-visible:border-gold-700"
      />

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[var(--color-gold-700)]"
        />
        Acepto el tratamiento de mis datos según la{" "}
        <a href="/privacidad" className="text-gold-700 underline underline-offset-2">
          Política de Privacidad
        </a>
        .
      </label>
      {errors.consent && <ErrorText>{errors.consent}</ErrorText>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="eyebrow-label w-fit rounded-[var(--radius-aura)] bg-ink-900 px-7 py-4 text-nude-000 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <ErrorText>
          No pudimos enviar tu mensaje. Escríbenos directo por WhatsApp.
        </ErrorText>
      )}
    </form>
  );
}

function TextField({ label, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label className="eyebrow-label mb-2 block text-ink-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[var(--radius-aura)] border border-nude-200 bg-white px-4 py-3 text-ink-900 outline-none focus-visible:border-gold-700"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }) {
  return <p className="mt-1.5 text-xs text-rose-600">{children}</p>;
}

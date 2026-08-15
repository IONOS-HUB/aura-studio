"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aura-cookie-consent";

/**
 * PRD §14.4: no pre-checked boxes, rejecting is as easy as accepting, and
 * analytics/marketing stay unloaded (Consent Mode v2 stub) until a choice is
 * made. `window.__auraConsent` is where the real GA4 loader should read from —
 * wire the actual gtag Consent Mode call in when the GA4 property exists.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function applyConsent(value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    window.__auraConsent = value;
    // TODO: call gtag('consent', 'update', { analytics_storage: value.analytics ? 'granted' : 'denied', ... })
    // once the real GA4 measurement ID is wired in per PRD §11.1 / §14.4.
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-[2px] border border-nude-200 bg-nude-000 p-5 shadow-[0_16px_40px_-16px_rgba(20,16,14,0.35)] sm:inset-x-auto sm:left-5"
    >
      <p className="measure text-sm text-ink-600">
        Usamos cookies para el funcionamiento del sitio y, con tu permiso, para
        analítica. Puedes cambiar tu preferencia cuando quieras desde el pie de
        página.{" "}
        <a href="/cookies" className="text-gold-700 underline underline-offset-2">
          Política de cookies
        </a>
      </p>

      {customizing && (
        <label className="mt-4 flex items-center gap-3 text-sm text-ink-900">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="h-4 w-4 accent-[var(--color-gold-700)]"
          />
          Analítica (Google Analytics) — nos ayuda a entender qué páginas visitas
        </label>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        {!customizing ? (
          <>
            <button
              type="button"
              onClick={() => applyConsent({ necessary: true, analytics: true })}
              className="eyebrow-label rounded-[2px] bg-ink-900 px-4 py-2.5 text-nude-000"
            >
              Aceptar todo
            </button>
            <button
              type="button"
              onClick={() => applyConsent({ necessary: true, analytics: false })}
              className="eyebrow-label rounded-[2px] border border-ink-900 px-4 py-2.5 text-ink-900"
            >
              Solo necesarias
            </button>
            <button
              type="button"
              onClick={() => setCustomizing(true)}
              className="eyebrow-label px-2 py-2.5 text-ink-600 underline underline-offset-2"
            >
              Personalizar
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => applyConsent({ necessary: true, analytics })}
            className="eyebrow-label rounded-[2px] bg-ink-900 px-4 py-2.5 text-nude-000"
          >
            Guardar preferencia
          </button>
        )}
      </div>
    </div>
  );
}

"use client";

export default function CookiePreferenceButton() {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem("aura-cookie-consent");
        location.reload();
      }}
      className="w-fit text-left text-sm text-ink-600 underline decoration-nude-200 underline-offset-4 transition-colors hover:text-gold-700"
    >
      Cambiar preferencia de cookies
    </button>
  );
}

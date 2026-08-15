# Aura Beauty Studio

Sitio Next.js 15 (App Router) listo para Vercel. Aún no se ha publicado.

## Local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start
```

## Vercel (cuando toque publicar)

1. Sube el repo a GitHub / GitLab / Bitbucket.
2. En [vercel.com](https://vercel.com) → Add New Project → importa el repo.
3. Framework: **Next.js** (se detecta solo). Node **20**.
4. Variables (opcional, ver `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — URL canónica, p. ej. `https://aurabeautystudio.com` o la `.vercel.app` temporal.
5. Deploy. Dominio custom después, en Project → Settings → Domains.

No hace falta `vercel.json` especial: el framework se infiere del `package.json`.

## Qué no está cableado aún

- Envío real del formulario de contacto (`RESEND_API_KEY`).
- Google Analytics (`NEXT_PUBLIC_GA_ID`).
- Dominio propio (hoy el canónico en código es `https://aurabeautystudio.com`).

import Footer from "./Footer";
import Seal from "./Seal";

export default function LegalPage({ title, updated, children }) {
  return (
    <main>
      <header className="border-b border-nude-200 px-6 py-6 lg:px-16">
        <a href="/" className="flex w-fit items-center gap-3">
          <Seal size={36} tone="ink">
            <span className="text-sm">A</span>
          </Seal>
          <span className="eyebrow-label">Aura Beauty Studio</span>
        </a>
      </header>

      <article className="mx-auto max-w-[720px] px-6 py-16 lg:py-24">
        <p className="eyebrow-label mb-4 text-ink-600">
          Última actualización: {updated}
        </p>
        <h1 className="mb-12 font-display text-h1 text-ink-900">{title}</h1>
        <div className="flex flex-col gap-8 text-ink-600 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink-900 [&_p]:measure [&_p]:leading-relaxed [&_ul]:measure [&_ul]:list-disc [&_ul]:pl-5 [&_li]:leading-relaxed">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}

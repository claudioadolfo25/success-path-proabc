import type { ReactNode } from "react";

export function LegalDoc({
  title,
  meta,
  children,
}: {
  title: string;
  meta: [string, string][];
  children: ReactNode;
}) {
  return (
    <article className="bg-parchment">
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-sm border border-border bg-card p-10 shadow-card md:p-16">
          <h1 className="font-display text-4xl leading-tight text-ink">{title}</h1>
          <dl className="mt-8 grid gap-3 border-y border-border py-6 text-sm sm:grid-cols-2">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="prose-doc mt-10 space-y-8 text-[15px] leading-relaxed text-foreground">
            {children}
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
            <div className="h-px flex-1 rule-gold" />
            <span>Documento vinculante</span>
            <div className="h-px flex-1 rule-gold" />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="border-l-2 border-gold pl-6">
      <h2 className="font-display text-xl text-ink">
        <span className="mr-2 font-mono text-xs text-gold">{n}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

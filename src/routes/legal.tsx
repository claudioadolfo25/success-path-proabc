import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

const docs = [
  { to: "/legal/terminos", label: "Términos y Condiciones" },
  { to: "/legal/mandato", label: "Mandato Irrevocable" },
  { to: "/legal/pagare", label: "Pagaré en Blanco" },
] as const;

function LegalLayout() {
  return (
    <div className="bg-parchment">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Sección legal</div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h1 className="font-display text-4xl text-ink">Documentos vinculantes</h1>
          <nav className="flex flex-wrap gap-2">
            {docs.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="rounded-sm border border-border bg-card px-3 py-2 text-xs text-ink transition hover:border-gold"
                activeProps={{ className: "border-gold bg-ink text-parchment" }}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

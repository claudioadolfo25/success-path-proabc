import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/modelo", label: "Modelo" },
  { to: "/flujo", label: "Flujo de adhesión" },
  { to: "/legal/terminos", label: "Legal" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-ink text-parchment">
            <span className="font-display text-xl font-semibold leading-none">心</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-ink">Centro Satori</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Clean Lif SpA · Co-Kizuna</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-ink"
              activeProps={{ className: "text-ink font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/flujo"
            className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-parchment transition-all hover:bg-ink/90"
          >
            Adherir mi empresa
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-sm border border-border p-2 md:hidden"
          aria-label="Menú"
        >
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-parchment md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2 text-sm text-foreground/80"
                activeProps={{ className: "bg-secondary text-ink font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

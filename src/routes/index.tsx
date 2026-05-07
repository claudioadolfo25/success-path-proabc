import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-parchment grain">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Modelo pago por éxito · solo empresas
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
              Cobramos <em className="text-gold not-italic">solo</em> cuando tu empresa adjudica.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Centro Satori es la plataforma de inteligencia artificial para compras
              públicas de Mercado Público. Sin matrícula, sin mensualidad. Comisión variable
              entre 0,30% y 0,90% del monto adjudicado, respaldada por mandato especial
              irrevocable y pagaré en blanco conforme a la legislación chilena.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/flujo"
                className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-parchment shadow-elegant transition hover:bg-ink/90"
              >
                Adherir mi empresa
              </Link>
              <Link
                to="/modelo"
                className="rounded-sm border border-ink/20 bg-transparent px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink/5"
              >
                Cómo funciona el cobro →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div>✓ Ley 19.799 — Firma electrónica avanzada</div>
              <div>✓ Ley 18.092 — Pagaré ejecutivo</div>
              <div>✓ Verificación contra Mercado Público</div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -rotate-2 rounded-sm bg-gold/20" />
              <div className="relative rounded-sm border border-border bg-card p-8 shadow-card">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Folio</div>
                  <div className="font-mono text-xs text-ink">CS-2026-04871</div>
                </div>
                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Licitación adjudicada</div>
                  <div className="mt-1 font-display text-xl text-ink">ID 1057-87-LP25</div>
                  <div className="text-sm text-muted-foreground">Servicio de mantención · MINSAL</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Monto adjudicado</div>
                    <div className="mt-1 font-display text-2xl text-ink">$182.450.000</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Comisión 0,60%</div>
                    <div className="mt-1 font-display text-2xl text-gold">$1.094.700</div>
                  </div>
                </div>
                <div className="mt-6 rounded-sm bg-secondary p-4 text-xs text-muted-foreground">
                  <div className="font-semibold text-ink">Huella de uso verificada</div>
                  <div className="mt-1">17 consultas · 4 análisis · 2 exportaciones — dentro de 90 días previos al cierre</div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Devengo confirmado · Cláusula 6 + 6 bis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Propuesta de valor</div>
              <h2 className="mt-3 font-display text-4xl text-ink">
                Riesgo cero hoy.<br />Comisión solo si ganas.
              </h2>
            </div>
            <div className="grid gap-px bg-border md:col-span-8 md:grid-cols-2">
              {[
                { t: "Sin matrícula ni mensualidad", d: "Tu empresa accede a todos los agentes de IA sin pagar un peso por adelantado." },
                { t: "Comisión 0,30% – 0,90%", d: "Escalado por monto adjudicado. Solo se devenga con adjudicación verificada." },
                { t: "Mandato irrevocable", d: "Otorgado por firma electrónica avanzada conforme a la Ley 19.799." },
                { t: "Pagaré en blanco", d: "Suscrito al registro, completado solo en mora. Cobro ejecutivo bajo Ley 18.092." },
              ].map((b) => (
                <div key={b.t} className="bg-card p-8">
                  <div className="font-display text-xl text-ink">{b.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMISIONES */}
      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Tabla de comisiones</div>
              <h2 className="mt-3 font-display text-4xl text-ink">Tarifa por adjudicación</h2>
            </div>
            <Link to="/modelo" className="text-sm text-ink underline-offset-4 hover:underline">Ver detalle →</Link>
          </div>
          <div className="mt-10 overflow-hidden rounded-sm border border-border bg-card shadow-card">
            <table className="w-full">
              <thead className="bg-ink text-parchment">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Tramo de adjudicación (CLP)</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Comisión</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Ejemplo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Hasta $50.000.000", "0,90%", "$50M → $450.000"],
                  ["$50.000.001 – $200.000.000", "0,60%", "$150M → $900.000"],
                  ["$200.000.001 – $1.000.000.000", "0,45%", "$500M → $2.250.000"],
                  ["Sobre $1.000.000.000", "0,30%", "$2.000M → $6.000.000"],
                ].map((r) => (
                  <tr key={r[0]} className="hover:bg-secondary/40">
                    <td className="px-6 py-5 font-mono text-sm text-ink">{r[0]}</td>
                    <td className="px-6 py-5 font-display text-2xl text-gold">{r[1]}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FLUJO RESUMEN */}
      <section className="border-b border-border bg-ink text-parchment">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Cinco pasos</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl">
            Adhesión digital con certeza jurídica de cobranza.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {[
              { n: "01", t: "Verificación SII", d: "Validamos RUT, vigencia y representación." },
              { n: "02", t: "Aceptación TyC", d: "Checklist no premarcado, IP y timestamp." },
              { n: "03", t: "Firma avanzada", d: "Mandato irrevocable + pagaré en blanco." },
              { n: "04", t: "Huella de IA", d: "Cada consulta queda registrada con hash." },
              { n: "05", t: "Cobro al adjudicar", d: "Detección automática vs Mercado Público." },
            ].map((s) => (
              <div key={s.n} className="border-t border-parchment/20 pt-6">
                <div className="font-mono text-xs text-gold">{s.n}</div>
                <div className="mt-2 font-display text-xl">{s.t}</div>
                <div className="mt-1 text-sm text-parchment/70">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/flujo"
              className="inline-flex rounded-sm bg-gold px-6 py-3 text-sm font-medium text-ink transition hover:bg-gold/90"
            >
              Ver flujo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl text-ink md:text-6xl">
            Si no adjudicas, no pagas.<br />
            <span className="text-gold">Así de simple.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Únete a las empresas que ya operan bajo el modelo de comisión por éxito de Centro Satori.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/flujo" className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-parchment hover:bg-ink/90">
              Comenzar adhesión
            </Link>
            <Link to="/contacto" className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink hover:bg-ink/5">
              Hablar con el equipo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

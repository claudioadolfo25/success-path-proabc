import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/modelo")({
  head: () => ({
    meta: [
      { title: "Modelo de cobro por adjudicación — Centro Satori" },
      { name: "description", content: "Comisión variable 0,30%–0,90%, devengo, mandato irrevocable y pagaré en blanco. Cobro ejecutivo bajo Ley 18.092." },
      { property: "og:title", content: "Modelo de cobro por adjudicación — Centro Satori" },
      { property: "og:description", content: "Comisión variable 0,30%–0,90%, devengo, mandato irrevocable y pagaré en blanco." },
    ],
  }),
  component: Modelo,
});

function Modelo() {
  return (
    <>
      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Modelo comercial</div>
          <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">Pago por éxito, garantía ejecutiva.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            El modelo de Centro Satori combina tres instrumentos jurídicos para sostener el
            "sin pago anticipado, comisión solo si adjudicas": Términos y Condiciones,
            Mandato Especial Irrevocable y Pagaré en Blanco.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-3">
          {[
            { n: "I", t: "Términos y Condiciones", d: "Definen el devengo, la presunción de uso (cláusula 6 bis) y la condición resolutoria del modelo sin pago anticipado.", to: "/legal/terminos" },
            { n: "II", t: "Mandato Irrevocable", d: "Otorgado al registro. Faculta a Clean Lif SpA a completar el pagaré ante mora o detección de fraude.", to: "/legal/mandato" },
            { n: "III", t: "Pagaré en Blanco", d: "Suscrito hoy con firma electrónica avanzada. Completado conforme al mandato y la Ley 18.092.", to: "/legal/pagare" },
          ].map((c) => (
            <Link key={c.n} to={c.to} className="group block border-t-2 border-gold pt-6">
              <div className="font-display text-6xl text-ink/10 transition group-hover:text-gold">{c.n}</div>
              <div className="mt-4 font-display text-2xl text-ink">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-4 text-sm text-ink underline-offset-4 group-hover:underline">Leer documento →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-4xl text-ink">Tabla detallada</h2>
          <div className="mt-10 overflow-hidden rounded-sm border border-border bg-card shadow-card">
            <table className="w-full">
              <thead className="bg-ink text-parchment">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Tramo</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">% Comisión</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">IVA</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Plazo de pago</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Hasta $50.000.000", "0,90%", "Adicional", "5 días hábiles"],
                  ["$50.000.001 – $200.000.000", "0,60%", "Adicional", "5 días hábiles"],
                  ["$200.000.001 – $1.000.000.000", "0,45%", "Adicional", "10 días hábiles"],
                  ["Sobre $1.000.000.000", "0,30%", "Adicional", "10 días hábiles"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="px-6 py-5 font-mono text-sm text-ink">{r[0]}</td>
                    <td className="px-6 py-5 font-display text-2xl text-gold">{r[1]}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{r[2]}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink text-parchment">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Devengo</div>
          <h2 className="mt-3 font-display text-4xl">Cuándo nace la comisión</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              { t: "Adjudicación verificable", d: "Resolución, acta o decisión publicada en Mercado Público a nombre de la empresa, una relacionada, consorcio o UTP." },
              { t: "Orden de compra emitida", d: "Cuando la entidad pública genera la orden a favor de la empresa usuaria." },
              { t: "Firma de contrato", d: "Suscripción del contrato derivado del proceso." },
              { t: "Vehículos relacionados", d: "Adjudicación obtenida vía empresa relacionada que haya usado la plataforma." },
            ].map((c) => (
              <div key={c.t} className="rounded-sm border border-parchment/15 p-6">
                <div className="font-display text-xl text-gold">{c.t}</div>
                <p className="mt-2 text-sm text-parchment/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-4xl text-ink">Cobranza ejecutiva en 9 días</h2>
          <ol className="mt-10 space-y-6">
            {[
              ["Día 0", "Detección de adjudicación vía scraping a Mercado Público o declaración."],
              ["Día 1", "Emisión de factura/boleta + link de pago Flow.cl."],
              ["Día 7", "Si no se paga en 5 días hábiles, el cliente entra en mora."],
              ["Día 8", "Clean Lif SpA usa el mandato y completa el pagaré con monto + intereses."],
              ["Día 9", "Pagaré protestado o presentado al Juzgado de Letras (juicio ejecutivo)."],
              ["Semanas", "Embargo de cuentas, vehículos u otros bienes del deudor."],
            ].map(([d, t]) => (
              <li key={d} className="flex gap-6 border-b border-border pb-6">
                <div className="w-24 shrink-0 font-mono text-sm text-gold">{d}</div>
                <div className="text-ink">{t}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

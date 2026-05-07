import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/flujo")({
  head: () => ({
    meta: [
      { title: "Flujo de adhesión — Centro Satori" },
      { name: "description", content: "Cinco pasos para adherir tu empresa: verificación SII, aceptación TyC, firma electrónica avanzada, huella de uso y cobro al adjudicar." },
      { property: "og:title", content: "Flujo de adhesión — Centro Satori" },
      { property: "og:description", content: "Adhesión digital con certeza jurídica de cobranza." },
    ],
  }),
  component: Flujo,
});

const steps = [
  {
    n: "01",
    t: "Registro y verificación SII",
    d: "Capturamos RUT de la empresa y del representante legal. Validamos vigencia y facultades vía API SII. Almacenamos IP, User-Agent y timestamp UTC.",
    items: ["RUT empresa + representante", "API SII / Cámara de Comercio", "IP + Timestamp + Hash de sesión"],
  },
  {
    n: "02",
    t: "Aceptación TyC + Mandato",
    d: "Dos checkboxes obligatorios, sin marcar por defecto. El botón se habilita solo cuando ambos están activos. Cada link abre el documento completo.",
    items: ["Acepto Términos y Condiciones", "Otorgo Mandato Especial Irrevocable", "Sin checkbox premarcado (Ley del Consumidor)"],
  },
  {
    n: "03",
    t: "Firma Electrónica Avanzada",
    d: "Para Mandato y Pagaré en Blanco usamos firma electrónica avanzada vía proveedor local certificado, presunción de autoría casi absoluta.",
    items: ["FirmaSimple / Cláusula / eSign Transbank", "Ley 19.799 art. 3", "PDF firmado + sello de tiempo"],
  },
  {
    n: "04",
    t: "Confirmación con evidencia",
    d: "Se envía al usuario y a auditoría: TyC aceptado, Mandato firmado, Pagaré en Blanco, IP, timestamp, ID de sesión y folio único.",
    items: ["PDF TyC + Mandato + Pagaré", "Datos técnicos capturados", "Folio / hash único"],
  },
  {
    n: "05",
    t: "Huella digital de uso",
    d: "Cada consulta, análisis o exportación queda registrada con user_id, licitacion_id, agent_id y hash. Al ganar, correlacionamos automáticamente.",
    items: ["Logs por licitación y agente", "Hash de informes exportados", "Scraping a mercadopublico.cl"],
  },
];

function Flujo() {
  return (
    <>
      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Flujo de adhesión</div>
          <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">Cinco pasos para activar tu cuenta.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Diseñado para maximizar la certeza jurídica del modelo de comisión por adjudicación.
          </p>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-8 border-l-2 border-gold pl-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-sm text-gold">PASO {s.n}</div>
                  <div className="mt-2 font-display text-2xl text-ink">{s.t}</div>
                </div>
                <div className="md:col-span-9">
                  <p className="text-muted-foreground">{s.d}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {s.items.map((i) => (
                      <li key={i} className="rounded-sm border border-border bg-parchment px-3 py-2 text-xs text-ink">
                        ✓ {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-parchment">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-4xl">Ejemplo del checklist no premarcado</h2>
          <div className="mt-8 rounded-sm border border-parchment/20 bg-ink/40 p-8">
            <label className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--gold)]" />
              <span className="text-sm">
                Declaro que he leído y acepto los{" "}
                <span className="text-gold underline">Términos y Condiciones de Uso y Cobro por Adjudicación</span>,
                especialmente el modelo de comisión por éxito.
              </span>
            </label>
            <label className="mt-6 flex items-start gap-4">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--gold)]" />
              <span className="text-sm">
                Otorgo un{" "}
                <span className="text-gold underline">Mandato Especial e Irrevocable</span>{" "}
                a Clean Lif SpA para que, en caso de mora, suscriba y complete un pagaré a mi nombre por las sumas adeudadas.
              </span>
            </label>
            <button
              disabled
              className="mt-8 w-full rounded-sm bg-gold py-3 text-sm font-medium text-ink opacity-40"
            >
              Continuar (deshabilitado hasta marcar ambos)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

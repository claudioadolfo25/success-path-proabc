import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Centro Satori" },
      { name: "description", content: "Habla con el equipo de Clean Lif SpA sobre el modelo de comisión por adjudicación de Centro Satori." },
      { property: "og:title", content: "Contacto — Centro Satori" },
      { property: "og:description", content: "Habla con el equipo de Clean Lif SpA." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Conversemos</div>
          <h1 className="mt-3 font-display text-5xl text-ink">Hablemos de tu próxima adjudicación.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Si tu empresa participa en compras públicas y quieres operar bajo el modelo de comisión por
            éxito de Centro Satori, agenda una llamada con el equipo de Clean Lif SpA.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Razón social</dt>
              <dd className="mt-1 font-display text-lg text-ink">Clean Lif SpA</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">RUT</dt>
              <dd className="mt-1 font-mono text-ink">77.547.366-5</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sitio</dt>
              <dd className="mt-1 text-ink">cleantransparency.online</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Casilla auditoría</dt>
              <dd className="mt-1 font-mono text-ink">auditoria@cleantransparency.online</dd>
            </div>
          </dl>
        </div>

        <form
          className="rounded-sm border border-border bg-card p-8 shadow-card"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias. Nos pondremos en contacto.");
          }}
        >
          <div className="grid gap-4">
            <Field label="Razón social" name="empresa" />
            <Field label="RUT empresa" name="rut" placeholder="76.123.456-7" />
            <Field label="Representante legal" name="rep" />
            <Field label="Email corporativo" name="email" type="email" />
            <Field label="Teléfono" name="tel" type="tel" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea
                name="msg"
                rows={4}
                className="mt-1 w-full rounded-sm border border-input bg-parchment p-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-parchment transition hover:bg-ink/90"
            >
              Solicitar adhesión
            </button>
            <p className="text-xs text-muted-foreground">
              Al enviar aceptas nuestra política de tratamiento de datos personales conforme a la
              Ley N° 19.628.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-sm border border-input bg-parchment p-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}

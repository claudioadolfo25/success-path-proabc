import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc, Section } from "@/components/LegalDoc";

export const Route = createFileRoute("/legal/pagare")({
  head: () => ({
    meta: [
      { title: "Modelo de Pagaré en Blanco — Centro Satori" },
      { name: "description", content: "Modelo de Pagaré en Blanco a la orden de Clean Lif SpA, completado conforme al Mandato y la Ley N° 18.092." },
      { property: "og:title", content: "Modelo de Pagaré en Blanco — Centro Satori" },
      { property: "og:description", content: "Documento ejecutivo bajo Ley 18.092." },
    ],
  }),
  component: Pagare,
});

function Pagare() {
  return (
    <LegalDoc
      title="Modelo de Pagaré en Blanco"
      meta={[
        ["Suscriptor", "[Razón social de la Empresa usuaria]"],
        ["Beneficiario", "Clean Lif SpA — RUT 77.547.366-5"],
        ["Versión", "v1.0 · 7 de mayo de 2026"],
      ]}
    >
      <div className="mb-10 rounded-sm border-2 border-ink bg-card p-8 font-mono text-sm shadow-card">
        <div className="text-center text-lg font-bold uppercase tracking-widest text-ink">PAGARÉ EN BLANCO</div>
        <div className="mt-1 text-center text-xs text-muted-foreground">Centro Satori · Clean Lif SpA</div>
        <div className="mt-6 leading-relaxed text-ink">
          En [ciudad], República de Chile, a [fecha de expedición], <b>[Razón social]</b>, RUT [●],
          representada por [nombre del representante], cédula de identidad N° [●], en adelante el
          Suscriptor, viene en declarar y convenir lo siguiente:
        </div>
      </div>

      <Section n="1" title="Promesa de pago">
        El Suscriptor promete pagar incondicionalmente a la orden de Clean Lif SpA, RUT 77.547.366-5,
        o a quien sus derechos represente, una suma de dinero en pesos chilenos que será determinada
        de conformidad con el Mandato Especial e Irrevocable otorgado en esta misma fecha.
      </Section>

      <Section n="2" title="Pagaré en Blanco">
        Se suscribe en blanco en cuanto al monto, fecha de vencimiento y, en su caso, número de cuotas,
        que serán completados exclusivamente por Clean Lif SpA conforme al referido Mandato.
      </Section>

      <Section n="3" title="Origen de la obligación">
        Pago de comisiones por adjudicación devengadas en virtud del uso de la plataforma Centro Satori,
        más impuestos, intereses y gastos de cobranza que procedan.
      </Section>

      <Section n="4" title="Facultades de la Beneficiaria">
        Clean Lif SpA queda facultada para completar: (a) monto total adeudado; (b) fecha de vencimiento
        "a la vista" o "el día 10 siguiente a la mora"; (c) lugar de pago en Santiago u otro pertinente;
        (d) cuotas y aceleración conforme al artículo 105 de la Ley N° 18.092.
      </Section>

      <Section n="5" title="Menciones mínimas">
        El documento contendrá las menciones del artículo 102 de la Ley N° 18.092: indicación de ser
        pagaré, promesa incondicional, suma determinable, lugar y época de pago, beneficiario, lugar
        y fecha de expedición y firma del Suscriptor.
      </Section>

      <Section n="6" title="Domicilio y competencia">
        Para todos los efectos legales, el Suscriptor fija domicilio en la comuna de [●] y se somete
        a la competencia de sus tribunales ordinarios, sin perjuicio de las reglas especiales de
        cobro ejecutivo.
      </Section>

      <div className="mt-12 grid gap-6 border-t-2 border-ink pt-8 sm:grid-cols-2">
        <div>
          <div className="border-b border-ink pb-1 text-xs uppercase tracking-wider text-muted-foreground">Firma del Suscriptor</div>
          <div className="mt-8 space-y-2 font-mono text-sm">
            <div>Razón social: __________________</div>
            <div>RUT: __________________</div>
            <div>Representante legal: __________________</div>
            <div>RUT representante: __________________</div>
          </div>
        </div>
        <div className="rounded-sm bg-secondary p-4 text-xs italic text-muted-foreground">
          Leyenda interna: "Este pagaré se rige por la Ley N° 18.092 y será completado conforme al
          Mandato Especial e Irrevocable de fecha [●]".
        </div>
      </div>
    </LegalDoc>
  );
}

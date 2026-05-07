import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc, Section } from "@/components/LegalDoc";

export const Route = createFileRoute("/legal/mandato")({
  head: () => ({
    meta: [
      { title: "Mandato Especial Irrevocable — Centro Satori" },
      { name: "description", content: "Mandato especial e irrevocable para suscribir y completar pagaré en blanco a favor de Clean Lif SpA." },
      { property: "og:title", content: "Mandato Especial Irrevocable — Centro Satori" },
      { property: "og:description", content: "Garantía de cobranza del modelo comisión por adjudicación." },
    ],
  }),
  component: Mandato,
});

function Mandato() {
  return (
    <LegalDoc
      title="Mandato Especial e Irrevocable para Suscribir y Completar Pagaré en Blanco"
      meta={[
        ["Mandante", "[Razón social de la Empresa usuaria]"],
        ["Mandataria", "Clean Lif SpA — RUT 77.547.366-5"],
        ["Versión", "v1.0 · 7 de mayo de 2026"],
      ]}
    >
      <Section n="1" title="Antecedentes">
        El Mandante ha aceptado los Términos y Condiciones de Centro Satori y ha convenido pagar una
        comisión variable solo en caso de obtener una adjudicación verificable utilizando la plataforma.
        Para garantizar el pago íntegro y oportuno, otorga el siguiente mandato especial e irrevocable.
      </Section>

      <Section n="2" title="Mandato especial e irrevocable">
        El Mandante otorga a Clean Lif SpA mandato para: (a) completar, llenar, fechar y poner en
        circulación uno o más Pagarés en Blanco; y/o (b) emitir nuevos pagarés si fuere necesario,
        con el solo objeto de documentar y cobrar las sumas adeudadas por concepto de comisión.
      </Section>

      <Section n="3" title="Supuestos habilitantes">
        La Mandataria podrá ejercer el mandato cuando: (i) la Empresa o relacionada resulte adjudicada
        en proceso donde se haya usado la plataforma; (ii) emitido el cobro y vencido el plazo, el
        Mandante incurra en mora; (iii) el Mandante omita declarar una adjudicación verificable.
      </Section>

      <Section n="4" title="Pagaré en Blanco e instrucciones de llenado">
        La Mandataria podrá completar el pagaré con: (a) <b>Beneficiario:</b> Clean Lif SpA;
        (b) <b>Monto:</b> suma adeudada + IVA + intereses + gastos; (c) <b>Origen:</b> uso de Centro Satori;
        (d) <b>Fecha de vencimiento:</b> "a la vista" o "el día 10 siguiente a aquél en que el Mandante
        haya incurrido en mora"; (e) <b>Lugar de pago:</b> Santiago de Chile.
        Cláusula de aceleración conforme al artículo 105 de la Ley N° 18.092.
      </Section>

      <Section n="5" title="Vencimiento automático y detección de fraude">
        En caso de detectar uso fraudulento, ocultamiento de adjudicaciones o simulación, se entenderá
        vencida de pleno derecho toda obligación pendiente, quedando facultada la Mandataria para
        completar el pagaré por el total adeudado.
      </Section>

      <Section n="6" title="Irrevocabilidad">
        El mandato es irrevocable mientras subsistan obligaciones pendientes o potencialmente devengables
        a favor de Clean Lif SpA.
      </Section>

      <Section n="7" title="Rendición de cuenta">
        Al ejercer el mandato, la Mandataria enviará copia del pagaré y estado de cobro al correo
        registrado del Mandante.
      </Section>

      <Section n="8" title="Firma electrónica">
        Conforme al artículo 3 de la Ley N° 19.799, este mandato puede suscribirse mediante firma
        electrónica avanzada con plenos efectos jurídicos.
      </Section>

      <Section n="9" title="Personería">
        El compareciente declara actuar con facultades suficientes para obligar al Mandante.
      </Section>

      <Section n="10" title="Ley aplicable y competencia">
        Leyes de la República de Chile. Domicilio en la comuna de Santiago, prorrogando competencia a
        sus tribunales ordinarios, sin perjuicio del derecho de la Mandataria de accionar en el
        domicilio del deudor.
      </Section>
    </LegalDoc>
  );
}

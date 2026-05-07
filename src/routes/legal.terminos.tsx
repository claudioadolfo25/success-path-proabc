import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc, Section } from "@/components/LegalDoc";

export const Route = createFileRoute("/legal/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — Centro Satori" },
      { name: "description", content: "Términos y Condiciones de uso y cobro por adjudicación de la plataforma Centro Satori (Clean Lif SpA)." },
      { property: "og:title", content: "Términos y Condiciones — Centro Satori" },
      { property: "og:description", content: "Modelo de comisión por adjudicación, devengo y condición resolutoria." },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <LegalDoc
      title="Términos y Condiciones de Uso y Cobro por Adjudicación"
      meta={[
        ["Plataforma", "Centro Satori / Co-Kizuna"],
        ["Titular", "Clean Lif SpA — RUT 77.547.366-5"],
        ["Sitio", "cleantransparency.online"],
        ["Versión", "v1.0 · 7 de mayo de 2026"],
      ]}
    >
      <Section n="1" title="Objeto">
        Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma Centro Satori,
        operada por Clean Lif SpA, así como el modelo comercial de cobro por adjudicación aplicable a
        las empresas usuarias que utilicen la plataforma para preparar, analizar, decidir o participar
        en procedimientos de compra pública u otros procesos de contratación vinculados a su giro.
        El uso del sitio constituye aceptación expresa, informada e inequívoca de estos Términos.
        Conforme a la Ley N° 19.799, los actos celebrados mediante firma electrónica son válidos y
        producen los mismos efectos que los celebrados por escrito en soporte papel.
      </Section>

      <Section n="2" title="Identificación del proveedor">
        La plataforma es operada por Clean Lif SpA, RUT 77.547.366-5, en adelante también
        "Centro Satori", "Co-Kizuna", la "Plataforma" o la "Empresa".
      </Section>

      <Section n="3" title="Definiciones">
        <ul>
          <li><b>Empresa usuaria:</b> persona jurídica o empresario individual con RUT propio, inscrito o inscribible como proveedor en Mercado Público.</li>
          <li><b>Usuario representante:</b> persona natural que crea la cuenta y acepta estos Términos en representación de la Empresa.</li>
          <li><b>Adjudicación verificable:</b> resolución, acta u orden de compra publicada en Mercado Público a favor de la Empresa.</li>
          <li><b>Comisión por adjudicación:</b> remuneración variable según tabla vigente.</li>
        </ul>
      </Section>

      <Section n="4" title="Naturaleza del servicio">
        Plataforma de apoyo basada en inteligencia artificial. No garantiza resultados ni reemplaza
        asesoría profesional, legal o técnica.
      </Section>

      <Section n="5" title="Modelo comercial y condición resolutoria">
        La Empresa acepta que el modelo consiste en: (a) no cobrar matrícula ni mensualidad obligatoria;
        (b) permitir el acceso "sin pago anticipado"; (c) cobrar comisión por éxito únicamente cuando
        la Empresa obtenga adjudicación verificable.
        <p className="mt-4">
          <b>Condición resolutoria:</b> El acceso continuo queda sujeto a que la Empresa
          (i) otorgue y mantenga vigente un Mandato Especial e Irrevocable; y
          (ii) suscriba un Pagaré en Blanco a la orden de Clean Lif SpA.
        </p>
      </Section>

      <Section n="6" title="Devengo de la comisión">
        Se devenga al verificarse adjudicación, orden de compra, contrato o adjudicación obtenida vía
        empresa relacionada o consorcio.
      </Section>

      <Section n="6 bis" title="Presunción de uso de la plataforma">
        Se entenderá que la Empresa "utilizó la plataforma" respecto de una adjudicación específica
        cuando, dentro de los 90 días anteriores al cierre de la licitación, se registre en los sistemas
        de Centro Satori: (i) consulta o análisis de la licitación; (ii) descarga o exportación de
        informes vinculados; o (iii) uso de agentes de IA asociados. Los logs hacen fe salvo prueba
        en contrario.
      </Section>

      <Section n="7" title="Tabla de comisiones">
        Comisión variable entre 0,30% y 0,90% del monto adjudicado, según tabla publicada en la
        sección "Modelo" del sitio, parte integrante del contrato.
      </Section>

      <Section n="8–11" title="Declaración, verificación, cobro, mora">
        La Empresa se obliga a declarar las adjudicaciones obtenidas. Plazo de pago: 5 días hábiles
        desde la emisión del cobro. Vencido el plazo, opera mora automática.
      </Section>

      <Section n="12" title="Mandato y pagaré en blanco">
        La Empresa se obliga a otorgar Mandato Especial Irrevocable y suscribir un Pagaré en Blanco
        que será completado solo en caso de incumplimiento, conforme a la Ley N° 18.092.
      </Section>

      <Section n="13" title="Firma electrónica">
        Validez de la firma electrónica simple y avanzada para TyC, Mandato y Pagaré (Ley 19.799).
      </Section>

      <Section n="14–22" title="Otras cláusulas">
        Representación, prohibiciones, suspensión, propiedad intelectual, protección de datos,
        limitación de responsabilidad, modificaciones, ley aplicable y competencia.
      </Section>

      <Section n="23" title="Integridad del acuerdo">
        Estos Términos, junto con el Mandato Especial Irrevocable y el Pagaré en Blanco, constituyen
        el acuerdo completo entre las partes respecto del modelo de comisión por adjudicación.
        Cualquier comunicación previa incompatible será sustituida por el presente acuerdo.
      </Section>
    </LegalDoc>
  );
}

import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">Centro Satori</div>
          <p className="mt-3 max-w-md text-sm text-parchment/70">
            Plataforma de inteligencia para compras públicas chilenas. Cobramos solo cuando adjudicas.
          </p>
          <p className="mt-6 text-xs text-parchment/50">
            Clean Lif SpA · RUT 77.547.366-5<br />
            cleantransparency.online
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Producto</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/modelo" className="hover:text-gold">Modelo de cobro</Link></li>
            <li><Link to="/flujo" className="hover:text-gold">Flujo de adhesión</Link></li>
            <li><Link to="/contacto" className="hover:text-gold">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Legal</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/legal/terminos" className="hover:text-gold">Términos y Condiciones</Link></li>
            <li><Link to="/legal/mandato" className="hover:text-gold">Mandato Irrevocable</Link></li>
            <li><Link to="/legal/pagare" className="hover:text-gold">Pagaré en Blanco</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-parchment/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-parchment/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Clean Lif SpA. Todos los derechos reservados.</div>
          <div>Ley N° 19.799 · Ley N° 18.092 · Santiago de Chile</div>
        </div>
      </div>
    </footer>
  );
}

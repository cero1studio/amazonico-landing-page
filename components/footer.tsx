import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <Image
              src="/amazoniico-logo.png"
              alt="Amazoniico"
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto brightness-0 invert mb-3 md:mb-4"
            />
            <p className="text-xs md:text-sm leading-relaxed opacity-90">
              Colágeno marino certificado INVIMA para tu salud y belleza.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Navegación</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="#benefits"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100"
                >
                  Política de Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Contacto</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>+57 3245020012</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>servicio_cliente@amazoniico.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
            <div className="flex gap-3 md:gap-4 mt-3 md:mt-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors opacity-90 hover:opacity-100">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 text-center text-xs md:text-sm opacity-80">
          <p>© 2025 Amazoniico. Todos los derechos reservados. Registro INVIMA RSA-0123456-2024</p>
          <p className="mt-2 text-xs opacity-70">
            Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          </p>
        </div>
      </div>
    </footer>
  )
}

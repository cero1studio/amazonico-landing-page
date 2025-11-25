import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <Button
          asChild
          variant="ghost"
          className="mb-6 -ml-4"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Política de Privacidad</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <p className="leading-relaxed mb-4">
            Amazoniico ("nosotros", "nuestro", "la empresa") se compromete a proteger la privacidad de los visitantes y clientes de https://amazoniico.com/ ("Sitio", "Tú"). Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos, divulgamos y protegemos tu información personal. Al utilizar nuestro Sitio o realizar una compra, aceptas las prácticas descritas aquí.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que recopilamos</h2>
          <p className="leading-relaxed mb-3">Podemos recopilar distintos tipos de información personal:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Datos de identificación:</strong> nombre completo, dirección, correo electrónico, número telefónico.</li>
            <li><strong>Datos de compra:</strong> productos adquiridos, cantidad, fecha, método de pago, historial de pedidos.</li>
            <li><strong>Datos de envío:</strong> dirección de envío, datos de contacto relacionados con la entrega.</li>
            <li><strong>Datos de uso del sitio:</strong> direcciones IP, tipo de dispositivo, navegador, páginas visitadas en el Sitio, duración de sesiones, cookies.</li>
            <li><strong>Datos del boletín y marketing:</strong> si te suscribes, podemos guardar tu correo electrónico y preferencias.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Cómo usamos tu información</h2>
          <p className="leading-relaxed mb-3">Utilizamos tu información personal para:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Procesar tus pedidos y entregas.</li>
            <li>Gestionar pagos, facturación y cualquier trámite financiero.</li>
            <li>Comunicarnos contigo: confirmaciones de pedido, actualizaciones de envío, soporte al cliente.</li>
            <li>Enviarte boletines informativos, promociones, novedades (cuando hayas dado tu consentimiento).</li>
            <li>Mejorar nuestro Sitio, productos y experiencias de usuario mediante análisis de uso.</li>
            <li>Cumplir con obligaciones legales, fiscales y reglamentarias en Colombia.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Transferencia y divulgación de datos</h2>
          <p className="leading-relaxed mb-3">Tu información puede ser compartida con:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Proveedores logísticos para procesar entregas.</li>
            <li>Plataformas de pago (bancos, pasarelas) para procesar transacciones.</li>
            <li>Servicios de mail marketing o plataformas de boletines si optas por recibir comunicaciones.</li>
            <li>Autoridades competentes si la ley lo exige o en cumplimiento de obligaciones legales.</li>
          </ul>
          <p className="leading-relaxed mt-3 font-semibold">
            No vendemos ni alquilamos tu información personal a terceros para fines de marketing sin tu consentimiento explícito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Almacenamiento y seguridad</h2>
          <p className="leading-relaxed mb-3">Mantenemos tu información en servidores seguros, con medidas técnicas y administrativas para protegerla contra acceso no autorizado, alteración, divulgación o destrucción:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Uso de cifrado (SSL/TLS) para transmisión de datos sensibles.</li>
            <li>Restricción de acceso interno únicamente al personal que lo necesita.</li>
            <li>Copias de seguridad regulares.</li>
            <li>Políticas de retención de datos conforme a normativa colombiana.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies y tecnologías similares</h2>
          <p className="leading-relaxed mb-3">Usamos cookies, balizas web y tecnologías similares para:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Hacer que el Sitio funcione correctamente (cookies esenciales).</li>
            <li>Analizar el uso del Sitio para mejoras (cookies analíticas).</li>
            <li>Mostrar contenido personalizado y publicidad (cuando corresponda y con tu consentimiento).</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Puedes configurar tu navegador para rechazar cookies no esenciales; sin embargo, esto puede afectar la funcionalidad del Sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Tus derechos</h2>
          <p className="leading-relaxed mb-3">Como usuario ubicado en Colombia, tienes derechos en relación con tus datos personales, tales como:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Acceder a tus datos personales que tenemos registrados.</li>
            <li>Solicitar la corrección de datos incorrectos o incompletos.</li>
            <li>Pedir la eliminación de tus datos cuando ya no sean necesarios para los fines para los cuales los recopilamos.</li>
            <li>Oponerte al procesamiento de tus datos en determinados casos.</li>
            <li>Retirar tu consentimiento (por ejemplo, para marketing) en cualquier momento.</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Para ejercer estos derechos, puedes contactarnos en la sección Contacto que aparece en el Sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Menores de edad</h2>
          <p className="leading-relaxed">
            El Sitio no está dirigido a menores de edad. No recopilamos conscientemente datos personales de personas menores de edad legal. Si nos llegamos a enterar de que hemos recopilado datos de un menor sin consentimiento parental, tomaremos medidas para eliminar dicha información.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios a esta Política</h2>
          <p className="leading-relaxed">
            Podemos actualizar esta Política de Privacidad en cualquier momento. Publicaremos la versión revisada aquí con la "Fecha de entrada en vigor" actualizada. Si los cambios son significativos, podremos notificarlos mediante correo electrónico o anuncio destacado en el Sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Información de contacto</h2>
          <p className="leading-relaxed mb-3">
            Si tienes dudas, quejas o requieres ejercer algunos de tus derechos, puedes contactarnos:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <li><strong>Correo electrónico:</strong> limiglow@gmail.com</li>
            <li><strong>Teléfono:</strong> +57 3245020012</li>
            <li><strong>Dirección:</strong> Bogotá, Colombia</li>
          </ul>
        </section>

        <section className="bg-muted/30 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Declaración final</h2>
          <p className="leading-relaxed text-foreground">
            Tu confianza nos importa. En Amazoniico nos comprometemos a proteger tu privacidad con transparencia y responsabilidad, cumpliendo con las leyes colombianas vigentes (Ley 1581 de 2012 sobre Protección de Datos Personales, Decreto 1377 de 2013).
          </p>
        </section>

        <p className="text-sm mt-8 pt-8 border-t border-border">Última actualización: Enero 2025</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

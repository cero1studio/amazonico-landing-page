import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TerminosPage() {
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Términos y Condiciones</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
          <p className="leading-relaxed">
            Al realizar una compra en Amazoniico, usted acepta estos términos y condiciones en su totalidad. Si no está
            de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web ni realizar compras.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Productos y Precios</h2>
          <p className="leading-relaxed mb-3">
            Todos los productos están sujetos a disponibilidad. Los precios mostrados están en pesos colombianos (COP) e
            incluyen el envío a todo el territorio nacional.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>1 Frasco de 500g: $55,000 COP (precio regular $60,000)</li>
            <li>2 Frascos de 500g: $90,000 COP (precio regular $110,000)</li>
            <li>Los precios pueden cambiar sin previo aviso</li>
            <li>Las promociones son válidas hasta agotar existencias</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Envíos</h2>
          <p className="leading-relaxed mb-3">Los envíos se realizan a través de Coordinadora a todo Colombia:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Envío gratis incluido en todos los pedidos</li>
            <li>Ciudades principales: 2-4 días hábiles</li>
            <li>Otras ciudades: 4-7 días hábiles</li>
            <li>Recibirá número de guía para rastrear su pedido</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Métodos de Pago</h2>
          <p className="leading-relaxed">
            Aceptamos los siguientes métodos de pago seguros: PSE (Pagos Seguros en Línea), Tarjetas de Crédito y Débito
            (Visa, Mastercard, American Express), y Botón Bancolombia. Todos los pagos son procesados de forma segura y
            encriptada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Uso del Producto</h2>
          <p className="leading-relaxed">
            Amazoniico es un suplemento alimenticio que debe consumirse según las indicaciones del empaque. No reemplaza
            una dieta equilibrada. Consulte con su médico antes de consumir si está embarazada, lactando o tiene
            condiciones médicas preexistentes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Garantía</h2>
          <p className="leading-relaxed">
            Garantizamos la calidad de nuestro producto. Si el producto llega dañado o con defectos de fabricación,
            contáctenos dentro de las 24 horas posteriores a la recepción para gestionar un reemplazo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitación de Responsabilidad</h2>
          <p className="leading-relaxed">
            Amazoniico no se hace responsable por reacciones alérgicas individuales o uso inadecuado del producto. Los
            resultados pueden variar según cada persona. Las imágenes de antes/después son testimonios reales pero no
            garantizan resultados idénticos para todos los usuarios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Contacto</h2>
          <p className="leading-relaxed">Para consultas sobre estos términos, contáctenos a: info@amazoniico.com</p>
        </section>

        <p className="text-sm mt-8 pt-8 border-t border-border">Última actualización: Enero 2025</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

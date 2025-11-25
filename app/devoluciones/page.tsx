import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DevolucionesPage() {
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Política de Cambios y Garantías</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <p className="leading-relaxed mb-4">
            En Amazoniico, nos enorgullece ofrecer productos que ayudan a nuestros clientes a alcanzar sus objetivos de salud y bienestar. Queremos que te sientas seguro al probar nuestros productos y estamos comprometidos con tu satisfacción.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Pasos para la devolución de producto y de dinero</h2>
          
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Paso 1</h3>
              <p className="leading-relaxed">
                Descarga y completa el formulario «Autorización para Devolución de Producto.» Puedes encontrarlo en la página de Amazoniico en (devolución del dinero). No olvides tener los datos con los que hiciste la compra para agilizar el proceso.
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Paso 2</h3>
              <p className="leading-relaxed">
                Envía el formulario completo junto con Factura de compra, en forma de archivos adjuntos, exclusivamente por correo electrónico a la siguiente dirección: <strong className="text-foreground">servicio_cliente@amazoniico.com</strong>
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Paso 3</h3>
              <p className="leading-relaxed">
                Una vez recibida tu documentación, nuestro equipo de Atención al Cliente te contactará en un plazo de hasta 72 horas para actualizarte sobre el estado de tu solicitud y guiarte en los próximos pasos para completar la devolución. Ten en cuenta que todas las devoluciones pasan por una revisión detallada.
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Paso 4</h3>
              <p className="leading-relaxed">
                Si tu devolución es aprobada o si es necesario, deberás: Enviar los productos (cuando se requiera) junto con el formulario completo a la dirección: <strong className="text-foreground">La Carrera 98b #139-75 LOCAL: chavarros Barrio suba, Bogotá D.C.</strong>, especificando que el destinatario es Amazoniico Colombia. Recuerda empacar todo en un solo paquete para que llegue en perfecto orden.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Garantía de Satisfacción Total te cubre en casos como:</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Alergia comprobada médicamente a alguno de los componentes del producto.</li>
            <li>Detección de anomalías o irregularidades en el producto.</li>
            <li>No presentar mejoras o beneficios frente a los indicados por cada producto (Aplican términos y condiciones)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Cancelaciones de Pedido</h2>
          <p className="leading-relaxed">
            Si deseas cancelar tu pedido antes de que sea enviado, debes contactar con nosotros inmediatamente. Sin embargo, una vez que el pedido haya sido procesado y enviado, no será posible cancelar o modificar la compra.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Responsabilidad del Cliente</h2>
          <p className="leading-relaxed">
            Es responsabilidad del cliente asegurarse de que los productos adquiridos sean adecuados para su situación y necesidades. Amazoniico no se hace responsable de cualquier consecuencia derivada de un uso incorrecto o de no seguir las instrucciones de consumo y advertencias del producto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Protección de Datos Personales</h2>
          <p className="leading-relaxed">
            Amazoniico respetará la privacidad de sus clientes conforme a la legislación vigente en materia de protección de datos personales. La información que se nos proporcione será utilizada únicamente para procesar su pedido y no será compartida con terceros sin su consentimiento previo, salvo en los casos en que lo exija la ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Improcedencia de la Garantía</h2>
          <p className="leading-relaxed mb-3">Los productos comercializados en Amazoniico Colombia no serán susceptibles de garantía y perderá su vigencia en los siguientes casos:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Uso inadecuado:</strong> Si el producto se consume de manera incorrecta o se utiliza en combinación con ingredientes o sustancias no recomendadas por el fabricante.</li>
            <li><strong>Condiciones de almacenamiento inadecuadas:</strong> Si el producto ha sido almacenado fuera de las condiciones recomendadas (temperatura, humedad, etc.), lo que podría comprometer su calidad y seguridad.</li>
            <li><strong>Fluctuaciones de temperatura o exposición inadecuada:</strong> El producto perderá su garantía si se expone a temperaturas extremas o a condiciones ambientales que alteren su integridad (como la exposición al sol o a fuentes de calor).</li>
            <li><strong>Uso después de la fecha de vencimiento:</strong> Si el producto se consume después de la fecha de vencimiento indicada en el empaque o no se conserva de acuerdo con las instrucciones del producto.</li>
            <li><strong>Consumo por personas no recomendadas:</strong> Si el producto es consumido por personas con contraindicaciones de salud o alergias no indicadas, o si no se siguen las advertencias sobre posibles efectos adversos.</li>
            <li><strong>Deterioro por mal manejo o transporte:</strong> Si el producto ha sufrido daños por mal manejo durante el transporte o almacenamiento antes de llegar al consumidor, la garantía no aplicará si no se notifica en los (3) días siguientes a la entrega.</li>
            <li><strong>Alteración de la información del producto:</strong> Si el empaque o el número de lote del producto han sido alterados o manipulados de manera que se comprometa la trazabilidad del producto.</li>
            <li><strong>Falta de seguimiento a las recomendaciones:</strong> Si el cliente no sigue las recomendaciones de consumo, preparación o almacenamiento indicadas en el etiquetado o en el manual del producto.</li>
            <li><strong>Presencia de daños por factores externos:</strong> Daños causados por el uso del producto después de haber sido abierto (contaminación por contacto con otros alimentos, exposición a objetos o sustancias ajenas, etc.).</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Escenarios para Devolución del Dinero en Políticas de Garantía de Amazoniico</h2>
          
          <div className="space-y-4">
            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Reacción Adversa o Alergia Comprobada:</h3>
              <p className="leading-relaxed">
                Si el cliente presenta evidencia de una reacción alérgica (como una recomendación médica o receta para evitar el producto), Amazoniico podría hacer una devolución completa del dinero. Es importante presentar la documentación pertinente.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Producto en Mal Estado o con Fallo de Calidad:</h3>
              <p className="leading-relaxed">
                Si el cliente recibe un producto defectuoso, mal envasado o que presenta una anomalía que compromete la calidad (por ejemplo, sabor alterado, cambio de color inesperado o mal sellado), Amazoniico podría ofrecer una devolución del dinero, especialmente si esto se reporta en los primeros 7 días tras la compra.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Producto No Cumple con lo Prometido (Garantía de Satisfacción 50% del dinero):</h3>
              <p className="leading-relaxed">
                En caso de insatisfacción comprobada con el producto tras un periodo de uso recomendado mínimo de 3 meses en el caso del Colágeno, periodo en el cual el cliente debe tener una buena alimentación, hidratación y actividad física, debidamente comprobada, (esto es con pruebas soportables como tomas de medidas y peso previo al inicio del consumo del producto, fotos en la medida posible de la evolución semanal luego de consumo del producto) el cliente podría calificar para una devolución del dinero.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-3">Nota Importante:</h2>
          <p className="leading-relaxed mb-3">
            Si eres un cliente Amazoniico y estás solicitando un reembolso, el monto se acreditará en tu cuenta bancaria en un plazo de <strong className="text-foreground">10 a 15 días hábiles</strong> después de aprobado. Si el producto llegó averiado para realizar la devolución deben regresar el producto <strong className="text-foreground">sin haberlo destapado</strong>, la devolución del dinero o cambio de producto se realizará en un plazo de <strong className="text-foreground">10 días hábiles</strong> a partir de que el producto sea recibido en la dirección La Carrera 98b #139-75 LOCAL: chavarros Barrio suba, Bogotá D.C.
          </p>
          <p className="leading-relaxed font-bold text-foreground">
            IMPORTANTE: el producto debe estar en perfectas condiciones, no debe estar destapado ni manipulado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Información de Contacto</h2>
          <p className="leading-relaxed mb-3">
            Para iniciar una devolución o hacer consultas:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <li><strong>Correo electrónico:</strong> servicio_cliente@amazoniico.com</li>
            <li><strong>Teléfono:</strong> +57 3245020012</li>
            <li><strong>Dirección:</strong> La Carrera 98b #139-75 LOCAL: chavarros Barrio suba, Bogotá D.C.</li>
          </ul>
        </section>

        <p className="text-sm mt-8 pt-8 border-t border-border">Última actualización: Enero 2025</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

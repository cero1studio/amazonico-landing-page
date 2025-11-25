import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en hacer efecto?",
    answer:
      "La mayoría de nuestros clientes comienzan a notar los primeros resultados entre 2-4 semanas de uso continuo. Los resultados más significativos se observan después de 8-12 semanas, ya que el colágeno necesita tiempo para integrarse en tu organismo y estimular la producción natural de colágeno.",
  },
  {
    question: "¿Cómo debo tomar Amazoniico?",
    answer:
      "Es muy simple: mezcla una porción (1 medida) con agua, jugo, café o tu bebida favorita una vez al día. Gracias a su delicioso sabor natural a coco, convertirá tu rutina diaria en un momento agradable. Recomendamos tomarlo en ayunas para mejor absorción, pero puedes hacerlo en cualquier momento del día.",
  },
  {
    question: "¿A qué sabe? ¿Tiene mal sabor como otros colágenos?",
    answer:
      "¡Para nada! Amazoniico tiene un delicioso sabor natural a coco que lo hace muy agradable de tomar. A diferencia de otros colágenos marinos que pueden tener regusto desagradable, nuestra fórmula está especialmente diseñada para ser sabrosa. Muchos clientes nos dicen que es como tomarse un batido tropical cada día.",
  },
  {
    question: "¿Es seguro? ¿Tiene efectos secundarios?",
    answer:
      "Amazoniico es 100% natural y seguro. Está certificado por INVIMA y no contiene químicos, azúcares ni aditivos artificiales. Es apto para la mayoría de personas, incluidas mujeres embarazadas y lactantes. Si tienes alguna condición médica específica o alergias, consulta con tu médico antes de usarlo.",
  },
  {
    question: "¿Cuál es la diferencia con otros colágenos?",
    answer:
      "Amazoniico utiliza colágeno marino hidrolizado de bajo peso molecular (menos de 3000 Daltons), lo que garantiza una absorción superior al 95%. Además, proviene de fuentes sostenibles del Amazonas y pasa por rigurosos controles de calidad. Muchos colágenos del mercado son de origen bovino o porcino con menor absorción.",
  },
  {
    question: "¿Cuánto cuesta el envío?",
    answer:
      "El envío es GRATIS a toda Colombia en ambos paquetes. Realizamos envíos a través de Coordinadora y tu pedido llega en 3-5 días hábiles a cualquier ciudad del país. Recibirás un código de rastreo para seguir tu pedido en tiempo real.",
  },
  {
    question: "¿Qué incluye la garantía de satisfacción?",
    answer:
      "Si no estás satisfecho con Amazoniico por cualquier razón, tienes 30 días desde la compra para solicitar un reembolso completo. No hacemos preguntas. Simplemente contáctanos y procesaremos tu devolución. Confiamos en la calidad de nuestro producto.",
  },
  {
    question: "¿Puedo tomarlo si tengo restricciones alimentarias?",
    answer:
      "Amazoniico es de origen marino, por lo que es perfecto si no consumes carne roja. Es libre de gluten, lactosa y no contiene azúcares añadidos. Si tienes alergias específicas a productos del mar, consulta con tu médico antes de usarlo.",
  },
  {
    question: "¿Por qué está en oferta?",
    answer:
      "Esta es una promoción especial de lanzamiento para nuevos clientes. Queremos que más colombianos descubran los beneficios del colágeno marino de alta calidad. La oferta es limitada y puede terminar en cualquier momento cuando alcancemos nuestro objetivo de ventas.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas saber sobre Amazoniico
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

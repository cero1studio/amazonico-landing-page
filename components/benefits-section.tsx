import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Shield, Heart, Clock, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Piel Radiante y Firme",
    description:
      "Reduce visiblemente arrugas y líneas de expresión. Piel más hidratada, suave y con brillo natural desde la primera semana.",
  },
  {
    icon: Heart,
    title: "Articulaciones Sin Dolor",
    description:
      "Reduce dolor articular y mejora flexibilidad. Ideal para deportistas y personas con artritis. Recupera tu libertad de movimiento.",
  },
  {
    icon: Shield,
    title: "Cabello Grueso, Uñas Fuertes",
    description:
      "Fortalece desde la raíz. Detiene la caída del cabello, promueve crecimiento y uñas resistentes que no se quiebran.",
  },
  {
    icon: Zap,
    title: "Absorción Rápida y Efectiva",
    description:
      "Colágeno hidrolizado de bajo peso molecular que tu cuerpo absorbe rápidamente para resultados visibles en menos tiempo.",
  },
  {
    icon: Clock,
    title: "Resultados en 3 Semanas",
    description:
      "Notarás cambios visibles rápidamente: piel más tersa, cabello con más volumen y menos molestias articulares.",
  },
  {
    icon: TrendingUp,
    title: "+15,000 Clientes Satisfechos",
    description:
      "Miles de colombianos confían en Amazoniico. Testimonios reales de personas que mejoraron su calidad de vida.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            ¿Qué Lograrás con nuestro <span className="text-primary">Colágeno</span>?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beneficios comprobados científicamente para tu salud y bienestar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-2xl"
            >
              <CardContent className="p-5 md:p-6">
                <div className="bg-primary/10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

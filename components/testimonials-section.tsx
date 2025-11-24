import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Bogotá",
    rating: 5,
    text: "En solo 3 semanas noté una diferencia en mi piel. Las arrugas alrededor de mis ojos se redujeron y mi piel se ve más firme.",
    before: "Piel con arrugas visibles",
    after: "Piel más tersa y firme",
  },
  {
    name: "Carlos Ramírez",
    location: "Medellín",
    rating: 5,
    text: "Sufría de dolor en las articulaciones por el ejercicio. Después de 2 meses con Amazoniico, me siento como nuevo. Puedo entrenar sin molestias.",
    before: "Dolor articular constante",
    after: "Entreno sin dolor",
  },
  {
    name: "Ana Martínez",
    location: "Cali",
    rating: 5,
    text: "Mi cabello se caía mucho y mis uñas se quebraban. Con Amazoniico, mi cabello creció más fuerte y mis uñas están increíbles.",
    before: "Cabello débil y quebradizo",
    after: "Cabello fuerte y uñas duras",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Resultados <span className="text-primary">Comprobados</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Más de 15,000 colombianos ya mejoraron su salud con Amazoniico
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-5 md:p-6">
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/20 mb-3 md:mb-4" />

                <div className="mb-3 md:mb-4">
                  <h4 className="font-bold text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>

                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex flex-col sm:flex-row gap-2 text-xs">
                  <div className="bg-destructive/20 text-destructive-foreground px-3 py-1.5 rounded-full font-medium">
                    Antes: {testimonial.before}
                  </div>
                  <div className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-medium">
                    Después: {testimonial.after}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted px-4 md:px-6 py-3 rounded-full border border-border">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <span className="font-bold text-base md:text-lg">4.9/5</span>
            <span className="text-sm md:text-base text-muted-foreground">• +15,000 clientes satisfechos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Image from "next/image"

export function ProductSection() {
  const features = [
    "4,500mg de colágeno marino por porción",
    "Hidrolizado para absorción óptima (95%+)",
    "Delicioso sabor natural a coco - ¡Sin regusto desagradable!",
    "Rico en vitaminas A, E, B1, B6, B12, Biotina",
    "Ácido fólico 200µg + Biotina 150µg",
    "Origen marino puro y sostenible",
    "Fácil de mezclar en cualquier bebida",
    "Sin gluten, azúcar añadido ni OGM",
    "Certificado INVIMA - 500g / 17 porciones",
  ]

  return (
    <section id="product" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <Badge className="bg-accent text-accent-foreground border-0">Fórmula Premium</Badge>
              <Badge className="bg-primary/10 text-primary border-0">
                <Image src="/invima.gif" alt="INVIMA" width={16} height={16} className="mr-1" />
                Registro INVIMA
              </Badge>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Colágeno Marino con Vitaminas Esenciales
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed text-pretty">
              Amazoniico Boost combina colágeno marino hidrolizado de alta pureza con un complejo de vitaminas
              esenciales. Esta fórmula avanzada garantiza máxima absorción y resultados visibles en pocas semanas.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Card className="bg-accent/10 border-accent/30">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-bold text-base md:text-lg mb-2">Respaldo Científico</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Estudios clínicos confirman que el colágeno marino hidrolizado mejora la elasticidad de la piel en 65%
                  y reduce arrugas profundas en 40% tras 8 semanas de uso continuo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="/product-marble.jpeg"
                  alt="Amazoniico Colágeno Marino"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-xl border border-border object-cover"
                />
              </div>
              <Image
                src="/product-studio.jpeg"
                alt="Amazoniico vista frontal"
                width={300}
                height={300}
                className="w-full h-auto rounded-2xl shadow-lg border border-border object-cover"
              />
              <Image
                src="/product-beach-shell.jpeg"
                alt="Amazoniico en playa"
                width={300}
                height={300}
                className="w-full h-auto rounded-2xl shadow-lg border border-border object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Package, Clock, MapPin, Truck } from "lucide-react"
import Image from "next/image"

export function ShippingInfo() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Envío <span className="text-primary">Gratis</span> a Todo Colombia
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Aliados con Coordinadora para llevarte tu Amazoniico de forma rápida y segura
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Image
                    src="/coordinadora-logo.jpg"
                    alt="Coordinadora"
                    width={120}
                    height={60}
                    className="w-24 md:w-32 h-auto"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Envíos por Coordinadora</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    La empresa de logística más confiable de Colombia
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1">Tiempo de Entrega</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      <strong className="text-foreground">Ciudades principales:</strong> 2-4 días hábiles
                      <br />
                      <strong className="text-foreground">Otras ciudades:</strong> 4-7 días hábiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1">Cobertura Nacional</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Bogotá, Medellín, Cali, Barranquilla, Cartagena y todas las ciudades de Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Package className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1">Empaque Seguro</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Tu producto llega protegido y en perfectas condiciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1">Seguimiento</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Rastrea tu pedido en tiempo real con número de guía
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-accent/10 p-6 md:p-8 rounded-2xl max-w-2xl mx-auto border border-accent/20">
          <p className="text-base md:text-lg font-semibold text-foreground mb-2">
            Envío 100% Gratis en Todas las Compras
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Sin costos ocultos. El precio que ves incluye el envío a cualquier parte de Colombia.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Star, Heart, Award } from "lucide-react"
import Image from "next/image"

export function TrustSection() {
  return (
    <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
            </div>
            <div className="font-bold text-xl md:text-2xl text-foreground">4.9/5</div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">+15,000 Reseñas</div>
          </div>

          <div className="text-center">
            <div className="bg-accent/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2">
              <Image src="/invima-logo.jpg" alt="INVIMA" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="font-bold text-sm md:text-lg text-foreground">Certificado</div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">INVIMA</div>
          </div>

          <div className="text-center">
            <div className="bg-accent/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-accent" />
            </div>
            <div className="font-bold text-sm md:text-lg text-foreground">+15,000</div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">Clientes Felices</div>
          </div>

          <div className="text-center">
            <div className="bg-accent/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="h-6 w-6 md:h-8 md:w-8 text-accent" />
            </div>
            <div className="font-bold text-sm md:text-lg text-foreground">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">Garantizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}

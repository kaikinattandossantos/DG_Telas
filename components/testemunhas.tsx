import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "Manaíra",
    text: "Excelente qualidade! As telas são muito resistentes e a instalação foi perfeita. Não tenho mais problemas com mosquitos.",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "Tambaú",
    text: "Recomendo muito! Material de primeira qualidade e atendimento excepcional. Valeu cada centavo investido.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Cabo Branco",
    text: "Instalei as telas de encaixe e adorei a praticidade. Fácil de limpar e muito eficiente contra os insetos.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">O que nossos clientes dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Depoimentos reais de quem já protegeu sua casa conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground text-pretty">"{testimonial.text}"</p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}, João Pessoa</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

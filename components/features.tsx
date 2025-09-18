import { Card, CardContent } from "@/components/ui/card"
import { Shield, Droplets, Wind, Wrench } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Proteção Total",
    description: "Barreira eficaz contra insetos, mosquitos, baratas e outros invasores indesejados.",
  },
  {
    icon: Droplets,
    title: "Fácil Limpeza",
    description: "Material que permite limpeza simples com água e sabão, mantendo sempre limpo.",
  },
  {
    icon: Wind,
    title: "Ventilação Natural",
    description: "Permite a circulação do ar mantendo o ambiente fresco e arejado.",
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Equipe especializada garante instalação perfeita e duradoura.",
  },
]

export function Features() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Por que escolher nossas telas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos a melhor solução em proteção para sua casa com qualidade garantida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

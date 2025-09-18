import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Layers, Shield, Sparkles } from "lucide-react"

export function ProductCatalog() {
  const aluminumColors = [
    { name: "Bronze", color: "bg-amber-600", description: "Elegante e sofisticado" },
    { name: "Preto", color: "bg-gray-900", description: "Moderno e discreto" },
    { name: "Cinza", color: "bg-gray-500", description: "Neutro e versátil" },
    { name: "Branco", color: "bg-white border-2 border-gray-200", description: "Clássico e clean" },
  ]

  const screenColors = [
    { name: "Cinza", color: "bg-gray-600", description: "Discreta e funcional" },
    { name: "Preto", color: "bg-gray-900", description: "Máxima discrição" },
  ]

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-balance mb-4">Nossos Produtos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça os materiais de alta qualidade que utilizamos em nossas telas mosquiteiras
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Fibra de Vidro */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Tela de Fibra de Vidro</CardTitle>
              <CardDescription>Material principal das nossas telas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Resistente a rasgos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Fácil limpeza</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Não deforma</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Proteção UV</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary text-center">✨ Material Premium de Fibra de Vidro</p>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de Tela */}
          <Card>
            <CardHeader className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Tipos Disponíveis</CardTitle>
              <CardDescription>Escolha o modelo ideal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">Tela de Encaixe</h4>
                <p className="text-sm text-muted-foreground">Removível, ideal para limpeza frequente</p>
                <Badge variant="secondary" className="mt-2">
                  Mais Popular
                </Badge>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">Tela Fixa</h4>
                <p className="text-sm text-muted-foreground">Instalação permanente, máxima segurança</p>
                <Badge variant="outline" className="mt-2">
                  Mais Segura
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Perfil de Alumínio */}
          <Card>
            <CardHeader className="text-center">
              <Palette className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Perfil de Alumínio</CardTitle>
              <CardDescription>Estrutura resistente e durável</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Não enferruja</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Leve e resistente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Acabamento premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Fácil manutenção</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cores Disponíveis */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cores do Alumínio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Cores do Perfil de Alumínio
              </CardTitle>
              <CardDescription>Escolha a cor que melhor combina com sua decoração</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {aluminumColors.map((color) => (
                  <div key={color.name} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className={`h-8 w-8 rounded-full ${color.color} flex-shrink-0`}></div>
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-xs text-muted-foreground">{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cores da Tela */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Cores da Tela de Fibra de Vidro
              </CardTitle>
              <CardDescription>Opções de cor para a tela mosquiteira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {screenColors.map((color) => (
                  <div key={color.name} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className={`h-8 w-8 rounded-full ${color.color} flex-shrink-0`}></div>
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-muted-foreground">{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Fibra de Vidro Premium</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Todas as nossas telas são feitas com fibra de vidro de alta qualidade, garantindo durabilidade e
                      resistência superior.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

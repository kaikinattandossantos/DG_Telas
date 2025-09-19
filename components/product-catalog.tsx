import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Não está sendo usado, pode remover se quiser
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

        {/* Seção principal dos produtos: Tela e Perfil */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"> {/* Ajustado para 2 colunas e centralizado */}
          {/* Fibra de Vidro Card */}
          <Card className="flex flex-col"> {/* Adicionado flex para organizar conteúdo */}
            <CardHeader className="text-center flex-grow"> {/* flex-grow para ocupar espaço */}
              <div className="relative h-100 w-full mb-4">
                {/* Imagem da tela */}
                <img
                  src="/telamosquiteira.png" // URL da Image 1
                  alt="Tela de Fibra de Vidro"
                  className="object-cover w-full h-full rounded-t-lg" // Usar rounded-t-lg para bordas superiores
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> {/* Overlay sutil */}
              </div>
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Tela de Fibra de Vidro</CardTitle>
              <CardDescription>Material principal das nossas telas</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between"> {/* flex-grow e justify-between */}
              <div className="space-y-3 mb-4"> {/* Adicionado mb-4 para espaçamento */}
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Antimofo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Não propaga o fogo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Atóxica e Antialérgica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Imperceptível</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Resistente a rasgos e fácil limpeza</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Não deforma e proteção UV</span>
                </div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary text-center">✨ Malha Premium de Fibra de Vidro</p>
              </div>
            </CardContent>
          </Card>

          {/* Perfil de Alumínio Card */}
          <Card className="flex flex-col"> {/* Adicionado flex para organizar conteúdo */}
            <CardHeader className="text-center flex-grow"> {/* flex-grow para ocupar espaço */}
              <div className="relative h-100 w-full mb-4">
                {/* Imagem do perfil de alumínio */}
                <img
                  src="/perfildealuminio.png" // URL da Image 2 - Substitua por <img> da Image 2
                  alt="Perfil de Alumínio"
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> {/* Overlay sutil */}
              </div>
              <Palette className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Perfil de Alumínio</CardTitle>
              <CardDescription>Estrutura resistente e durável</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between"> {/* flex-grow e justify-between */}
              <div className="space-y-3 mb-4">
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
              <div className="p-3 bg-muted rounded-lg"> {/* Alterado para bg-muted para distinção */}
                <p className="text-sm text-center text-muted-foreground">
                  Alumínio de alta qualidade para maior vida útil.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cores Disponíveis */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> {/* Centralizado */}
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
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /> {/* Ícone alterado para Sparkles */}
                  <div>
                    <p className="font-medium text-sm">Qualidade Superior</p> {/* Título ajustado */}
                    <p className="text-xs text-muted-foreground mt-1">
                      Nossas telas são desenvolvidas para oferecer máxima proteção e durabilidade.
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
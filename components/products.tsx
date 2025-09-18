import Image from "next/image"; // 1. Importe o Image
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "Telas de Encaixe",
    description: "Ideais para quem busca praticidade. Fáceis de instalar e remover para limpeza.",
    image: "/removable-mosquito-screen-window-frame--modern-des.jpg",
    features: ["Fácil instalação", "Removível para limpeza", "Não danifica a janela", "Ideal para apartamentos"],
    popular: false,
  },
  {
    name: "Telas Fixas",
    description: "Solução permanente e resistente. Maior durabilidade e proteção contínua.",
    image: "/fixed-mosquito-screen-window-installation--permane.jpg",
    features: ["Instalação permanente", "Máxima resistência", "Proteção 24h", "Ideal para casas"],
    popular: true,
  },
];

export function Products() {
  const numeroWhatsapp = "558388109483"; // Seu número base

  return (
    <section id="produtos" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escolha a solução ideal para sua necessidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => {
            // 2. Criamos uma mensagem e link específicos para cada produto
            const mensagemProduto = `Olá! Gostaria de um orçamento para o produto: ${product.name}.`;
            const linkProdutoWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemProduto)}`;

            return (
              <Card key={index} className={`relative flex flex-col ${product.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                )}

                <CardHeader className="p-0">
                  {/* 3. Otimizamos a imagem do produto */}
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                  <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-pretty flex-grow">{product.description}</p>

                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 4. O botão agora tem o link dinâmico do produto */}
                  <Button asChild className={`w-full mt-auto ${product.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}>
                    <a href={linkProdutoWhatsapp} target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
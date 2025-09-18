"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Shield, CheckCircle } from "lucide-react"

export function Budget() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [screenType, setScreenType] = useState("")
  const [total, setTotal] = useState(0)

  const pricePerM2 = 85 // Preço por m²

  const calculateBudget = () => {
    if (width && height) {
      const area = (Number.parseFloat(width) * Number.parseFloat(height)) / 10000 // Converter cm² para m²
      const calculatedTotal = area * pricePerM2
      setTotal(calculatedTotal)
    }
  }

  return (
    <section id="orcamento" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-balance mb-4">Calcule seu Orçamento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Faça uma estimativa rápida do valor da sua tela mosquiteira. Cobramos apenas{" "}
            <span className="font-bold text-primary">R$ {pricePerM2} por m²</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calculadora de Orçamento
              </CardTitle>
              <CardDescription>Informe as medidas da sua janela ou porta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="width">Largura (cm)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="Ex: 120"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Ex: 150"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="screen-type">Tipo de Tela</Label>
                <Select value={screenType} onValueChange={setScreenType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="encaixe">Tela de Encaixe</SelectItem>
                    <SelectItem value="fixa">Tela Fixa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateBudget} className="w-full" size="lg">
                Calcular Orçamento
              </Button>

              {total > 0 && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Valor estimado:</p>
                    <p className="text-3xl font-bold text-primary">R$ {total.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Área: {((Number.parseFloat(width) * Number.parseFloat(height)) / 10000).toFixed(2)} m²
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />O que está incluído
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Material de qualidade</p>
                    <p className="text-sm text-muted-foreground">Perfil de alumínio resistente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tela de fibra de vidro</p>
                    <p className="text-sm text-muted-foreground">Resistente e lavável</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Instalação profissional</p>
                    <p className="text-sm text-muted-foreground">Equipe especializada</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Garantia de qualidade</p>
                    <p className="text-sm text-muted-foreground">Produto e instalação</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Atenção:</strong> Este é um orçamento estimado. Entre em contato para um orçamento detalhado e
                  personalizado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

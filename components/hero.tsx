import Image from "next/image"; // 1. Importe o Image
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

export function Hero() {
  // Lógica do WhatsApp que já usamos antes
  const numeroWhatsapp = "558388109483";
  const mensagemPadrao = "Olá! Vi o site e gostaria de fazer um orçamento.";
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <section id="inicio" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Proteção Completa para sua Casa em <span className="text-primary">João Pessoa</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Telas mosquiteiras de alta qualidade que protegem contra insetos, mosquitos, baratas e poeira. Material
                resistente e fácil limpeza para o conforto da sua família.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Material forte e resistente</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Fácil limpeza e manutenção</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Telas de encaixe ou fixas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Instalação profissional</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* 2. Botão de orçamento agora usa asChild para funcionar como link */}
              <Button size="lg" asChild>
                <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                  <Shield className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              {/* 3. Botão de produtos agora rola para a seção #produtos */}
              <Button size="lg" variant="outline" asChild>
                <a href="#produtos">
                  Ver Produtos
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* 4. Substituímos <img> por <Image> para otimização */}
            <div className="aspect-square bg-card rounded-2xl p-8 relative flex items-center justify-center">
              <Image
                src="/modern-house-window-with-mosquito-screen-protectio.jpg"
                alt="Casa com telas mosquiteiras instaladas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Proteção</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
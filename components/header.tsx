import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Header() {
  const numeroWhatsapp = "558388109483"; 
  const mensagemPadrao = "Olá! Vi o site e gostaria de fazer um orçamento.";
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded opacity-80"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TelaSegura JP</h1>
              <p className="text-sm text-muted-foreground">Proteção para sua casa</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Ver Produtos</a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">Galeria</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>João Pessoa - PB</span>
              </div>
              {/* Telefone agora é um link clicável */}
              <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(81) 99763-1971</span>
              </a>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {/* Botão principal agora leva pro WhatsApp */}
              <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                Orçamento Grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
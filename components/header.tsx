import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Header() {
  const numeroWhatsapp = "558388109483"
  const mensagemPadrao = "Olá! Vi o site e gostaria de fazer um orçamento."
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadrao)}`

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">

            <img
              src="/logo.png" 
              alt="Logo da DG Telas"
              className="w-10 h-10 object-contain" 
            />

            <div>
              <h1 className="text-xl font-bold text-foreground">DG Telas - João Pessoa</h1>
              <p className="text-sm text-muted-foreground">Proteção para sua casa</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
              Ver Produtos
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>João Pessoa - PB</span>
              </div>
              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(83) 8810-9483</span>
              </a>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
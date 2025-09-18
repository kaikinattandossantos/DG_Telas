import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-background rounded opacity-80"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">TelaSegura JP</h3>
                <p className="text-sm opacity-80">Proteção para sua casa</p>
              </div>
            </div>
            <p className="text-sm opacity-80 text-pretty">
              Especialistas em telas mosquiteiras em João Pessoa. Qualidade, resistência e proteção para sua família.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(83) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@telasegurajp.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>João Pessoa - PB</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <div className="space-y-2 text-sm">
              <p>• Telas de Encaixe</p>
              <p>• Telas Fixas</p>
              <p>• Instalação Profissional</p>
              <p>• Manutenção</p>
              <p>• Orçamento Gratuito</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">© 2024 TelaSegura JP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

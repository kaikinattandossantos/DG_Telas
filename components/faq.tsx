import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  return (
    <section id="faq" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Dúvidas Frequentes</h2>
          <p className="text-xl text-muted-foreground">Respostas para as perguntas mais comuns dos nossos clientes.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">De qual material as telas são feitas?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Nossas telas utilizam esquadria de alumínio (que nunca enferruja) nas cores branca, preta, bronze ou natural. A malha é de fibra de vidro, um material antimofo, atóxico, antialérgico e que não propaga fogo, garantindo ventilação total.
            </AccordionContent>
          </AccordionItem>

          {/* NOVA PERGUNTA ADICIONADA AQUI */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">Vocês instalam apenas em casas e apartamentos?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Não, atendemos a todos os tipos de necessidades! Além de residências, somos especialistas em instalações comerciais e industriais. Instalamos em cozinhas de restaurantes, fábricas e outros ambientes que precisam de barreiras contra insetos para garantir a higiene e atender a normas da vigilância sanitária.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Como o orçamento é calculado?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Nosso orçamento não é por metro quadrado. Fazemos um levantamento completo que inclui a quantidade de telas, o tipo de instalação, a localização (distância) e qualquer material extra necessário para garantir um serviço perfeito.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Qual o prazo de instalação?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              O prazo médio para instalação é de 10 dias úteis após a confirmação do pedido (entrada de 50%). Este prazo pode variar conforme a demanda e agendamentos já confirmados.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">Como devo cuidar e limpar minhas telas?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A durabilidade é alta! A moldura de alumínio pode ser conservada com um óleo lubrificante (tipo WD-40) nas partes móveis. Para a malha, a limpeza é simples: use um pano de microfibra úmido ou um jato de água fraco, sem usar produtos químicos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
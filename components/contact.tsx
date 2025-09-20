"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Check, ArrowRight } from "lucide-react";

export function Contact() {
  const numeroWhatsapp = "558388109483"; // Seu número

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [necessidades, setNecessidades] = useState("");

  const handleOrcamentoWhatsapp = () => {
    let mensagem = `Olá! Gostaria de solicitar um orçamento.\n\n`;
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    if (email) mensagem += `*Email:* ${email}\n`;
    if (endereco) mensagem += `*Endereço (bairro):* ${endereco}\n\n`;
    mensagem += `*Minhas Necessidades:*\n${necessidades}`;

    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  };

  const linkSimplesWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Olá! Vi o site e gostaria de mais informações.")}`;

  return (
    <section id="contato" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solicite seu orçamento gratuito e proteja sua casa hoje mesmo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={linkSimplesWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">(83) 88109483</p>
                      <p className="text-primary font-medium">Chamar no WhatsApp</p>
                    </div>
                  </div>
                </a>

                <div className="flex items-center p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    </div>

                  </div>
                </div>

                <div className="flex items-center p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">João Pessoa - PB</p>
                      <p className="text-muted-foreground">Atendemos toda a região metropolitana</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Aberto todos os dias</p>
                      <p className="text-muted-foreground">24 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Solicite seu Orçamento via WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Para agilizar seu orçamento, por favor, nos informe:</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><span className="font-medium text-foreground">Medidas e Quantidade:</span> Largura e altura aproximada das janelas/portas.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><span className="font-medium text-foreground">Fotos do Local:</span> Se possível, nos envie fotos para entendermos a instalação.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><span className="font-medium text-foreground">Localização:</span> O bairro ou cidade onde será a instalação.</span>
                  </div>
                </div>
                <p className="pt-2">
                  Ou, se preferir, nos envie a localização, data e horário para agendarmos uma visita presencial!
                </p>

                <Button onClick={handleOrcamentoWhatsapp} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Solicitação via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
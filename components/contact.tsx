"use client";

// 1. Importe o 'useState' do React
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const numeroWhatsapp = "558388109483"; // Seu número

  // 2. Crie estados para cada campo do formulário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [necessidades, setNecessidades] = useState("");

  // Função para montar e abrir o link do WhatsApp com os dados do formulário
  const handleOrcamentoWhatsapp = () => {
    let mensagem = `Olá! Gostaria de solicitar um orçamento.\n\n`;
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    if (email) mensagem += `*Email:* ${email}\n`;
    if (endereco) mensagem += `*Endereço (bairro):* ${endereco}\n\n`;
    mensagem += `*Necessidades:*\n${necessidades}`;

    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  };

  // Link simples para o card de informações
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
            <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <a href={linkSimplesWhatsapp} target="_blank" rel="noopener noreferrer" className="block">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      {/* Número atualizado */}
                      <p className="font-semibold text-foreground">(81) 99763-1971</p>
                      <p className="text-muted-foreground">Clique para chamar no WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
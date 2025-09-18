// Importações necessárias no topo do arquivo
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Definição do componente Gallery
export function Gallery() {
  // Array de projetos com dados e caminhos de imagem corretos
  const projects = [
    {
      id: 1,
      title: "Janela com Perfil de Madeira",
      description: "Integração perfeita com esquadrias de madeira, mantendo a estética.",
      image: "/imagens/telas_demonstracao/Janela_madeira.png",
    },
    {
      id: 2,
      title: "Varanda com Perfil Preto",
      description: "Proteção discreta e elegante para sua varanda ou área externa.",
      image: "/imagens/telas_demonstracao/varanda_preto.png",
    },
    {
      id: 3,
      title: "Porta de Correr Preta",
      description: "Solução prática e segura para portas de correr e grandes vãos.",
      image: "/imagens/telas_demonstracao/Porta_de_correr_Preto.png",
    },
    {
      id: 4,
      title: "Detalhe do Perfil de Madeira",
      description: "Acabamento de alta qualidade que valoriza o ambiente.",
      image: "/imagens/telas_demonstracao/Perfil_Madeira_Janela.png",
    },
    {
      id: 5,
      title: "Janela com Perfil Preto",
      description: "Design minimalista que se adapta a projetos modernos.",
      image: "/imagens/telas_demonstracao/janela_preta.png",
    },
    {
      id: 6,
      title: "Detalhe do Perfil em Varanda",
      description: "Estrutura resistente e com acabamento impecável para áreas gourmet.",
      image: "/imagens/telas_demonstracao/Perfil_preto_varanda.png",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Trabalhos Realizados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos projetos que já realizamos em João Pessoa. Cada instalação é feita com cuidado e atenção aos
            detalhes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-primary">
            <span className="text-sm font-medium">Especialistas em Telas Mosquiteiras em João Pessoa e Região</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <section id="quem-somos" className="section-padding bg-sage-light">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Saiba quem são{" "}
            <span className="text-primary">Rafa e Alice</span>
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Rafaela */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-elevated mb-6 ring-4 ring-accent">
              <img
                src="https://curso.gravidezemmovimento.com.br/assets/rafa.jpg"
                alt="Rafaela Garcia Bragança"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
              Rafaela Garcia Bragança
            </h3>
            <p className="text-primary font-medium mb-4">
              Fisioterapeuta | UFMG | Instrutora do Curso
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Graduada em Fisioterapia pela UFMG, pós-graduada em Movimento Humano. 
              Possui formação em terapias integrativas como Aromaterapia, Reiki e 
              Cromoterapia. Trabalha com mulheres há 15 anos proporcionando movimento, 
              consciência corporal e reconexão através da dança do ventre, yoga, 
              pilates e sensualidade.
            </p>
          </div>

          {/* Alice */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-elevated mb-6 ring-4 ring-accent">
              <img
                src="https://curso.gravidezemmovimento.com.br/assets/alice.jpg"
                alt="Alice de Paula"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
              Alice de Paula
            </h3>
            <p className="text-primary font-medium mb-4">
              Empresária | Mãe da Lisa | Modelo do Curso
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Graduada em Ciência da Computação (UNIBH), trabalha com Marketing 
              Digital e Tráfego Pago para sua empresa e é criadora de conteúdo. 
              Alice vivenciou todas as aulas na prática durante sua gestação, 
              servindo como modelo do curso junto com sua filha Lisa. Acompanhe 
              a evolução real de uma gestante em movimento!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
              Comprar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;

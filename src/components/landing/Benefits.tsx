import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Reduz o risco de pré-eclampsia",
  "Ajuda no controle do ganho de peso",
  "Reduz inchaço e risco de trombose",
  "Facilita o posicionamento durante trabalho de parto",
  "Previne e trata dores comuns na gestação",
  "Libera endorfina e aumenta da autoestima",
  "Aumento da disposição até o final da gestação",
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-sage-light">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5">
            <div className="space-y-4">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                Aulas Práticas
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
                Seu corpo está <span className="text-primary italic">pedindo movimento</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Você sabia que gestantes ativas têm <strong>partos mais rápidos e recuperação mais tranquila</strong>? 
              Nada de ficar parada esperando — seu corpo foi feito para se mover, mesmo na gravidez.
            </p>

            <div className="p-4 rounded-lg bg-card shadow-soft">
              <p className="text-center text-3xl md:text-4xl font-serif text-foreground mb-1">
                São mais de <span className="text-primary font-bold">30 aulas</span>
              </p>
              <p className="text-center text-sm text-muted-foreground">
                para você treinar junto com a Rafa e a Alice, <strong>onde e quando quiser</strong>, 
                com pouco ou nenhum material
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-foreground text-lg">
                Por que se exercitar agora vai mudar tudo:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-xl font-serif text-foreground mb-4">
                <strong>Você</strong> é a primeira casa do seu bebê. <strong>Cuide dela.</strong>
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
                  Quero Começar a Me Mover
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://curso.gravidezemmovimento.com.br/assets/Camada-7.png"
                alt="Gestante praticando exercícios"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

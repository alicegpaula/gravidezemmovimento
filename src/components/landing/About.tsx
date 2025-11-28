import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const topics = [
  "O que é Parto Humanizado? Parto em casa? Na banheira?",
  "Tipos de parto: Natural, Normal, Cesariana",
  "Fases do trabalho de parto: quando ir para maternidade?",
  "Técnicas naturais para alívio de dor, anestesia, analgesia",
  "Descanso inteligente: posicionamentos estratégicos",
  "Importância da Equipe: preciso contratar?",
  "Massagem Perineal: aprenda a fazer em casa!",
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://curso.gravidezemmovimento.com.br/assets/IMG_1050.jpg"
                alt="Gestante fazendo exercícios com acompanhamento profissional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-light rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                Sobre o Curso
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
                O que é o{" "}
                <span className="text-primary">Gravidez em Movimento</span>?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Curso 100% online para <strong>mulheres grávidas</strong>, ou que{" "}
              <strong>desejam engravidar</strong>, que querem estar{" "}
              <strong>bem informadas e saudáveis</strong>, garantindo o melhor para 
              elas e seus bebês.
            </p>

            <p className="text-muted-foreground">
              São <strong>9 módulos</strong> divididos entre conhecimento e prática 
              que irão mudar sua forma de ver e viver a gestação.
            </p>

            <div className="space-y-4">
              <p className="font-medium text-foreground">
                Você vai entender tudo sobre:
              </p>
              <ul className="space-y-3">
                {topics.map((topic, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
                Eu Quero Mais Saúde
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

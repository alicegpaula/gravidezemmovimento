import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const topics = [
  "Tipos de parto: Natural, Normal, Cesariana",
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
                Você está <span className="text-primary">preparada</span>?
              </h2>
            </div>

            {/* Perguntas provocativas */}
            <div className="space-y-3 text-lg text-foreground/90 italic border-l-4 border-primary/40 pl-4">
              <p>Você sabe a diferença entre parto humanizado, parto em casa, no hospital e parto na banheira?</p>
              <p>É tudo a mesma coisa?</p>
              <p>Você sabe a hora certa de ir para a maternidade?</p>
            </div>

            <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-accent">
              <p className="text-foreground font-medium">
                Se você hesitou em alguma resposta, <strong>não se preocupe</strong> — a maioria das gestantes também não sabe. 
                Mas imagine chegar no dia do parto <strong>segura, informada e sem medo</strong>.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong>Gravidez em Movimento</strong> é o curso 100% online que vai 
              transformar sua gestação em uma jornada de <strong>autoconhecimento e bem-estar</strong>. 
              Porque você merece mais do que apenas "passar" pela gravidez — você merece <strong>viver intensamente</strong> cada momento.
            </p>

            <p className="text-muted-foreground">
              São <strong>9 módulos</strong> completos que vão te dar clareza, confiança 
              e as ferramentas para cuidar de você enquanto cuida do seu bebê.
            </p>

            <div className="space-y-4">
              <p className="font-medium text-foreground">
                Com o curso, você vai dominar:
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
                Quero Me Preparar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

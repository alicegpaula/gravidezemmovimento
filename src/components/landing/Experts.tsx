import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const experts = [
  {
    name: "Ana Raquel Alfenas",
    role: "Ginecologista e Obstetra",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto1.png",
    description: "Saiba os principais sintomas de cada trimestre da gestação e fique tranquila com tantas novidades no seu corpo.",
    instagram: "@dra.anaraquelalfenas",
  },
  {
    name: "Nayhara Castro Coury",
    role: "Nutricionista Infantil",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto2.png",
    description: "Como um corpo bem nutrido irá impactar positivamente na saúde e hábitos do bebê e criança.",
    instagram: "@naycnutri",
  },
  {
    name: "Alessandra Soares",
    role: "Psicóloga Clínica",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto3.png",
    description: "Puerpério, Baby Blues e Depressão Pós-Parto. Saiba identificar essas emoções e procure ajuda.",
    instagram: "@psico.alessandrasoares",
  },
  {
    name: "Flávia Braga",
    role: "Consultora de Imagem",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto4.png",
    description: "Aprenda como valorizar seu corpo e usar a meia de compressão sem perder o estilo.",
    instagram: "@flaviabraga_consultoria",
  },
  {
    name: "Iriane Martins",
    role: "Linguagem Corporal",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto5.png",
    description: "Saiba como voltar a ser uma mulher, além de ser mãe e como isso pode ajudar no casamento.",
    instagram: "@irianemartinss",
  },
  {
    name: "Luiza Pádua",
    role: "Terapeuta Capilar",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto6.png",
    description: "Entenda a queda capilar no pós-parto e produtos para ajudar a cuidar dos fios em casa.",
    instagram: "@luizapaduaterapeutacapilar",
  },
  {
    name: "Ana Cláudia Gualberto",
    role: "Biomédica",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto7.png",
    description: "Conheça os benefícios da aromaterapia durante a gestação, parto, pós-parto e para o seu bebê.",
    instagram: "@nativaterra.cosmeticos",
  },
  {
    name: "Dora Carvalho",
    role: "Fisioterapeuta Dermatofuncional",
    image: "https://curso.gravidezemmovimento.com.br/assets/foto8.png",
    description: "Entenda a importância da drenagem linfática durante a gestação e pós-parto.",
    instagram: "@dra.doracarvalhobh",
  },
];

const Experts = () => {
  return (
    <TooltipProvider>
      <section id="bonus" className="section-padding bg-card">
        <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Aulas Bônus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-4 mb-6">
            Profissionais{" "}
            <span className="text-primary">Especialistas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Você merece cuidar de <strong>VOCÊ por inteiro</strong>. Conteúdos exclusivos 
            sobre saúde mental, beleza, nutrição e muito mais para você se sentir bem 
            em todas as áreas da sua vida.
          </p>
        </div>

        {/* Experts Carousel */}
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {experts.map((expert, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group bg-background rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-accent">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center flex flex-col flex-grow">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {expert.role}
                      </p>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-3 cursor-help flex-grow">
                            {expert.description}
                          </p>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{expert.description}</p>
                        </TooltipContent>
                      </Tooltip>
                      <p className="text-xs text-muted-foreground/70">
                        {expert.instagram}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
              Quero Cuidar de Mim
            </a>
          </Button>
        </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Experts;

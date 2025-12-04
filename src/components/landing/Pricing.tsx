import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, BookOpen } from "lucide-react";

const savings = [
  { item: "Consulta Massagem Perineal", value: "R$ 270" },
  { item: "Oficina do Parto", value: "R$ 270" },
  { item: "Atividade física (média mensal)", value: "R$ 300" },
  { item: "Consultoria de imagem", value: "R$ 500" },
  { item: "Curso Educação Perinatal", value: "R$ 250" },
  { item: "Consulta Psicóloga", value: "R$ 200" },
  { item: "Consulta Nutricionista", value: "R$ 200" },
  { item: "Consultoria em Sensualidade", value: "R$ 300" },
];

const Pricing = () => {
  return (
    <section id="preco" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">
            Pare de juntar informações soltas (e duvidosas) da internet
          </h2>
          <p className="text-lg opacity-90">
            Sua gestação é única demais para depender de dicas aleatórias. 
            Tenha <strong>tudo que você precisa</strong>, organizado por especialistas, 
            para acessar quando e onde quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Savings */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif mb-4">
              Olha só o que você teria que pagar <span className="text-accent">se contratasse cada coisa separado:</span>
            </h3>
            <div className="space-y-3">
              {savings.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-2 border-b border-primary-foreground/20"
                >
                  <span className="opacity-90">{item.item}</span>
                  <span className="font-semibold line-through opacity-60">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 text-lg font-bold">
                <span>Total se contratado separadamente</span>
                <span className="text-accent line-through">R$ 2.290,00</span>
              </div>
            </div>
            <p className="text-center text-base font-medium">
              Tudo isso por apenas <span className="text-accent text-xl font-bold">R$ 197,00</span>
            </p>
            <div className="text-center mt-4 p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
              <p className="text-base font-medium">
                + ganho de tempo de deslocamento <span className="text-accent font-bold">(você faz tudo de onde quiser)</span>, que não tem preço.
              </p>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-10 shadow-elevated">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-xl md:text-2xl font-bold">
                🔥 Oferta Especial
              </div>

              <div>
                <p className="text-muted-foreground">
                  De <span className="line-through">R$ 529,90</span> por
                </p>
                <div className="mt-2">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">
                    R$ 197
                  </span>
                  <span className="text-2xl text-muted-foreground">,00</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  ou em até <strong>12x</strong> de R$ 19,66
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  Menos de <strong>R$ 0,37 por dia</strong> para transformar sua gestação
                </p>
              </div>

              <Button variant="cta" size="xl" className="w-full" asChild>
                <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
                  Sim, Eu Mereço Isso!
                </a>
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span><strong>Garantia de 7 dias</strong> — Se não gostar, devolvemos 100% do seu dinheiro</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Acesso por 545 dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>9 módulos completos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits summary */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-primary-foreground/20">
          <div className="text-center">
            <Check className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="opacity-90"><strong>Sem sair de casa</strong> — acesse todo o conteúdo do seu sofá, da sua cama, de onde quiser</p>
          </div>
          <div className="text-center">
            <Check className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="opacity-90"><strong>No seu tempo</strong> — exercite-se quando seu corpo pedir, sem hora marcada</p>
          </div>
          <div className="text-center">
            <Check className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="opacity-90"><strong>Com especialistas</strong> — 8 profissionais de diversas áreas cuidando de você</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

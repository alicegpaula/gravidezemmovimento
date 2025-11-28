import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Não é perigoso fazer os exercícios em casa sem acompanhamento?",
    answer: "Somente deverá fazer os módulos de exercícios a gestante que tiver liberação médica. Se o seu médico liberou atividade física, você pode fazer. Todos foram pensados e adaptados para gestantes e toda grávida pode, deve e consegue fazer. Manter a atenção aos seus limites e seguir as orientações da Rafa nos vídeos é primordial.",
  },
  {
    question: "Sou sedentária, vou conseguir fazer os exercícios? São difíceis?",
    answer: "Sim. Os exercícios foram pensados para que toda gestante consiga fazer. Lembrando de sempre respeitar os seus limites e seguir as orientações passadas nos vídeos. Eles têm grau de dificuldade de acordo com cada fase da gestação e, sim, vão te tirar da zona de conforto. Mas não se preocupe, você irá conseguir fazer.",
  },
  {
    question: "O curso é válido para Tentantes?",
    answer: "Sim. O quanto antes você começar a buscar informações, melhor. Você já vai começar a gestação com o pé direito.",
  },
  {
    question: "Quanto tempo de acesso ao curso?",
    answer: "O acesso é de 545 dias (1 ano e 6 meses).",
  },
  {
    question: "O curso é válido para gravidez mais avançada?",
    answer: "Sim. Nunca é tarde para buscar conhecimento. Inclusive, alguns módulos são para ser estudados no final da gravidez, como por exemplo, a massagem perineal com 34 semanas e a Oficina do Parto. Além disso, os exercícios são divididos em Primeiro, Segundo e Terceiro trimestre.",
  },
  {
    question: "O curso é válido para segunda, terceira, quarta... gravidez?",
    answer: "Sim, pode ser muito válido. Apesar de já ter experiência de parto, nem sempre a mulher teve informações de qualidade durante as outras gestações. Além disso, a gestante deve se exercitar em todas as gestações e temos também os módulos de sensualidade comportamental e as aulas Bônus.",
  },
  {
    question: "Como funciona o 'Prazo de Garantia'?",
    answer: "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório. Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Perguntas{" "}
            <span className="text-primary">Frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg border border-border px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 space-y-4">
          <Button variant="cta" size="lg" asChild>
            <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
              Comprar Agora
            </a>
          </Button>
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a 
              href="mailto:contato@gravidezemmovimento.com.br" 
              className="text-primary hover:underline"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Viviane Moreira",
    text: "Com os conhecimentos passados eu fiquei mais leve e tranquila. O módulo da Oficina do Parto foi tão construtivo e proveitoso! Aprendemos na prática muitas coisas que podemos fazer no dia do trabalho de parto.",
  },
  {
    name: "Rafaela Cota",
    text: "Fiz os vários exercícios e me ensinou muito sobre o parto normal. A oficina de parto me preparou muito. Eu fiz junto com meu namorado, que foi meu acompanhante no dia, e fez toda a diferença.",
  },
  {
    name: "Fernanda Linhares",
    text: "Tive uma gestação tão tranquila e tão ativa que tenho certeza que foi graças aos cuidados e exercícios. E olha que eu era bem sedentária. Aprender a massagem perineal foi muito importante.",
  },
  {
    name: "Julia Meira",
    text: "Foram meses de muito aprendizado e que ajudaram muito, me deram muito apoio. A Rafa é uma excelente profissional, super esforçada, tem tanto conhecimento e sabe muito bem repassar isso à diante.",
  },
  {
    name: "Carolina de Paula",
    text: "Fazer exercícios durante toda a gestação me deixou mais disposta, inchei muito pouco no final, consegui aguentar a maratona do trabalho de parto e agora no pós-parto o retorno está sendo bem mais rápido.",
  },
  {
    name: "Amanda Santos",
    text: "O curso foi maravilhoso! Eu e o meu marido gostamos muito e foi super útil durante o meu trabalho de parto! Todo casal/gestante deveria fazer antes de ganhar o bebê.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-4 mb-6">
            O que nossas alunas{" "}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de mamães que transformaram sua gestação
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Aluna do curso</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

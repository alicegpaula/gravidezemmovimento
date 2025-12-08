import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-gestante.jpg";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay com gradiente suave que combina com a paleta */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
      <div className="absolute inset-0 bg-primary/5" />
      
      {/* Content */}
      <div className="relative z-10 container-narrow px-4 sm:px-6 text-center">
        <div className="space-y-5 sm:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Curso 100% Online
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight">
            Sua gestação <span className="text-primary">merece</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              mais do que só{" "}
              <span className="text-secondary-foreground italic">esperar o bebê</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            <strong>Você não precisa escolher entre cuidar do bebê e cuidar de você.</strong>{" "}
            Descubra como viver uma gravidez ativa, informada e cheia de bem-estar 
            — para vocês duas.
          </p>

          {/* Trust badges - destacados */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30 shadow-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30 shadow-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">Acesso por 1 ano e meio</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30 shadow-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">+30 aulas práticas</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
            <Button 
              variant="cta" 
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base"
              asChild
            >
              <a href="https://pay.hotmart.com/U88619493A" target="_blank" rel="noopener noreferrer">
                Quero Cuidar de Mim e do Meu Bebê
              </a>
            </Button>
            <Button variant="ghost" size="default" className="w-full sm:w-auto" asChild>
              <a href="#sobre">
                Conhecer o Curso
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

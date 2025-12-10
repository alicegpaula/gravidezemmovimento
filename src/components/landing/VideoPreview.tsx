const VideoPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-10">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Conheça o Curso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Veja como é <span className="text-primary">por dentro</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assista a um resumo do conteúdo e descubra como o curso vai transformar sua gestação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.youtube.com/embed/GR7bG0ppjAQ"
              title="Gravidez em Movimento - Prévia do Curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;

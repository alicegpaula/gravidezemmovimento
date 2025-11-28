import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold mb-2">
              Gravidez em Movimento
            </h3>
            <p className="text-sm opacity-70">
              Sua jornada para uma gestação saudável começa aqui
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:contato@gravidezemmovimento.com.br"
              className="hover:opacity-100 transition-opacity"
            >
              contato@gravidezemmovimento.com.br
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} Gravidez em Movimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

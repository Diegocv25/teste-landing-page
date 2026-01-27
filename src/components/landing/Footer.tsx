import { Logo } from "../Logo"
import { WhatsAppIcon } from "../WhatsAppIcon"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-md">
              Sistema completo de gestão com IA no WhatsApp para salões, barbearias, 
              clínicas, spas e consultórios. Sua secretária digital 24/7.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full w-10 h-10 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
              <li><a href="#precos" className="hover:text-foreground transition-colors">Preços</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Nexus Automações. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Mail, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
]

const contact = [
  { icon: Mail, label: "contato@nexusautomacoes.com.br" },
  { icon: Phone, label: "(11) 99999-9999" },
  { icon: Clock, label: "Seg-Sex, 9h-18h" },
]

const social = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Logo className="mb-6" />
            <p className="text-muted-foreground text-sm">
              Sistema completo de gestão com IA no WhatsApp para estabelecimentos
              de todos os nichos. Automatize seu negócio e aumente seu faturamento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              {contact.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-8">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-muted-foreground hover:text-accent" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nexus Automações - Todos os direitos reservados
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

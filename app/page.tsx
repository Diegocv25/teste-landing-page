import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Objectives } from "@/components/landing/objectives"
import { Features } from "@/components/landing/features"
import { HowToStart } from "@/components/landing/how-to-start"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Features />
      <HowToStart />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

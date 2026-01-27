import { Header } from "../components/landing/Header"
import { Hero } from "../components/landing/Hero"
import { About } from "../components/landing/About"
import { Objectives } from "../components/landing/Objectives"
import { Features } from "../components/landing/Features"
import { HowToStart } from "../components/landing/HowToStart"
import { Pricing } from "../components/landing/Pricing"
import { FAQ } from "../components/landing/FAQ"
import { Footer } from "../components/landing/Footer"

const Index = () => {
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

export default Index

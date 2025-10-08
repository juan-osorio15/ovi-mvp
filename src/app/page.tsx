import { Hero } from '@/components/landing/Hero'
import { About } from '@/components/landing/About'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { FreeResources } from '@/components/landing/FreeResources'
import { Benefits } from '@/components/landing/Benefits'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <FreeResources />
      <Benefits />
    </main>
  )
}

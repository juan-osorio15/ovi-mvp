import Link from 'next/link'
import { Filter, Search, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Filter,
    title: 'Elige tu fase',
    description: 'Diagnóstico, Tratamiento, Recuperación o Largo Plazo.',
  },
  {
    icon: Search,
    title: 'Encuentra recursos',
    description: 'Explora profesionales y prácticas adaptadas a tu momento.',
  },
  {
    icon: Calendar,
    title: 'Conecta fácil',
    description: 'Agenda, asiste a un taller o descarga un recurso gratuito.',
  },
  {
    icon: Users,
    title: 'Avanza acompañado',
    description: 'Nunca más estarás solo en el proceso.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 px-6 md:py-24 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          ¿Cómo funciona OVI?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/directory">
              Explorar directorio ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

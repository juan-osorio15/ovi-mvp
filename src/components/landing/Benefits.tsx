import { Shield, Heart, MapPin, Users, HandHeart } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Profesionales verificados',
    description: 'Todos con experiencia en oncología.',
  },
  {
    icon: Heart,
    title: 'Recursos seguros',
    description: 'Complementarios y basados en evidencia.',
  },
  {
    icon: MapPin,
    title: 'Talleres presenciales',
    description: 'Eventos en tu ciudad cerca de ti.',
  },
  {
    icon: Users,
    title: 'Comunidad que comprende',
    description: 'Acceso a una comunidad que entiende tu proceso.',
  },
  {
    icon: HandHeart,
    title: 'Apoyo y voluntariado',
    description: 'Espacios sociales de apoyo mutuo.',
  },
]

export function Benefits() {
  return (
    <section className="py-16 px-6 md:py-24 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Lo que OVI te ofrece
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

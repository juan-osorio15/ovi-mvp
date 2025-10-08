import Link from 'next/link'
import { Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FreeResources() {
  return (
    <section className="py-16 px-6 md:py-20 md:px-12 bg-accent/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
          <Gift className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Empieza hoy, sin costo
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Accede a nuestra biblioteca inicial de recursos gratuitos: meditaciones guiadas, ejercicios de respiración y estiramientos suaves. Un espacio para cuidar tu mente y tu cuerpo todos los días.
        </p>

        <div className="pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/directory?isFree=true">
              Ver recursos gratuitos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className='py-16 px-6 md:py-24 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight'>
              Onco Vida Integrativa – Directorio confiable de recursos
              complementarios para pacientes oncológicos
            </h1>

            <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
              Conecta con profesionales y prácticas complementarias seguras que
              apoyan tu tratamiento médico y mejoran tu calidad de vida.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Button
                asChild
                size='lg'
                className='bg-primary hover:bg-primary/90 text-white'
              >
                <Link href='/directory'>Explorar directorio</Link>
              </Button>

              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-gray-400 text-black hover:bg-gray-100'
              >
                <Link href='#profesional'>Soy profesional, quiero unirme</Link>
              </Button>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-full aspect-square max-w-md bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center'>
              <Heart
                className='w-32 h-32 text-primary opacity-30'
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

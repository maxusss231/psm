import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background video placeholder */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          poster="/placeholder.svg?height=800&width=1920"
        >
          <source src="/production-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Промышленное оборудование
            <span className="block text-yellow-400">российского производства</span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl">
            Мы производим высокоточные станки и оборудование в России, обеспечивая надежное импортозамещение в условиях
            санкций. Более 25 лет опыта и тысячи довольных клиентов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/catalog">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4">
                Каталог оборудования
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Получить консультацию
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-gray-300">лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-300">довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">техподдержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

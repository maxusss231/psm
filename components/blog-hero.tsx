import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/clx-350-product-picture.webp" alt="Industrial machinery" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200">
            Блог и новости
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            НОВОСТИ
            <span className="block text-yellow-400 text-4xl lg:text-5xl mt-2">и экспертные статьи</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Актуальные новости промышленности, экспертные статьи о станках с ЧПУ, автоматизации производства и
            современных технологиях машиностроения
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Подписаться на новости
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Все категории
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

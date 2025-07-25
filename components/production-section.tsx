import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function ProductionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Современное производство</h2>
            <p className="text-lg text-gray-600 mb-6">
              Наше производство оснащено современным высокотехнологичным оборудованием. Мы используем передовые
              технологии и строго контролируем качество на каждом этапе.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Автоматизированные линии производства
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Система контроля качества ISO 9001
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Собственное конструкторское бюро
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Полный цикл от проектирования до внедрения
              </li>
            </ul>
            <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Виртуальная экскурсия
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Производство ПромСтройМаш"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            <Button
              size="lg"
              variant="secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            >
              <Play className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

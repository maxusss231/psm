import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const popularModels = [
  {
    id: 1,
    name: "ПСМ-1500 CNC",
    category: "Токарные станки",
    image: "/placeholder.svg?height=300&width=400",
    price: "от 2 500 000 ₽",
    features: ["ЧПУ Siemens", "Мощность 15 кВт", "Точность 0.01 мм"],
    isPopular: true,
  },
  {
    id: 2,
    name: "ПСМ-2000 VMC",
    category: "Фрезерные станки",
    image: "/placeholder.svg?height=300&width=400",
    price: "от 3 200 000 ₽",
    features: ["3-осевая обработка", "Автосмена инструмента", "Охлаждение СОЖ"],
    isPopular: false,
  },
  {
    id: 3,
    name: "ПСМ-800 Drill",
    category: "Сверлильные станки",
    image: "/placeholder.svg?height=300&width=400",
    price: "от 850 000 ₽",
    features: ["Радиальное сверление", "Автоподача", "Цифровая индикация"],
    isPopular: true,
  },
  {
    id: 4,
    name: "ПСМ-3000 Grind",
    category: "Шлифовальные станки",
    image: "/placeholder.svg?height=300&width=400",
    price: "от 1 800 000 ₽",
    features: ["Плоское шлифование", "Автобаланс", "Система пылеудаления"],
    isPopular: false,
  },
]

export function PopularModelsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Популярные модели</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наиболее востребованное оборудование для различных отраслей промышленности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularModels.map((model) => (
            <Card key={model.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {model.isPopular && <Badge className="absolute top-3 left-3 bg-red-500">Хит продаж</Badge>}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="text-sm text-yellow-600 mb-2">{model.category}</div>
                <CardTitle className="text-lg mb-3">{model.name}</CardTitle>
                <div className="text-2xl font-bold text-gray-900 mb-4">{model.price}</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href={`/catalog/${model.id}`} className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">Подробнее</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/catalog">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 px-8 py-4 bg-transparent"
            >
              Смотреть весь каталог
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

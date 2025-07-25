"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Factory, Users, Award, Truck, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Factory,
    number: 25,
    suffix: "+",
    label: "лет на рынке",
    description: "Опыт и экспертиза",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    label: "довольных клиентов",
    description: "По всей России и СНГ",
    color: "bg-red-500",
  },
  {
    icon: Award,
    number: 15,
    suffix: "",
    label: "видов оборудования",
    description: "Полная линейка станков",
    color: "bg-yellow-500",
  },
  {
    icon: Truck,
    number: 24,
    suffix: "ч",
    label: "доставка",
    description: "Быстрая логистика",
    color: "bg-red-500",
  },
  {
    icon: Clock,
    number: 3,
    suffix: " года",
    label: "гарантия",
    description: "Надежность качества",
    color: "bg-yellow-500",
  },
  {
    icon: Shield,
    number: 99,
    suffix: "%",
    label: "надежность",
    description: "Проверено временем",
    color: "bg-red-500",
  },
]

const features = [
  "Собственное производство в России",
  "Сертификация ГОСТ и ISO",
  "Техподдержка 24/7",
  "Индивидуальные решения",
  "Конкурентные цены",
  "Полный цикл сервиса",
]

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return (
    <span className="text-3xl lg:text-4xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

export function SeoSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">О компании ПромСтройМаш</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ваш надежный партнер
            <span className="block text-yellow-600">в промышленности</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ведущий российский производитель промышленного оборудования. Создаем решения, которые двигают индустрию
            вперед.
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                hoveredCard === index ? "ring-2 ring-yellow-500 shadow-xl" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-3">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Почему нас выбирают</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-yellow-50 transition-colors duration-200 group"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                <span className="text-gray-700 group-hover:text-yellow-700 transition-colors duration-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Готовы обсудить ваш проект?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors duration-200 shadow-lg hover:shadow-xl px-8 py-4"
            >
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 px-8 py-4 bg-transparent"
            >
              Скачать каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

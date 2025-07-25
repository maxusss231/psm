"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const clients = [
  { name: "Газпром", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Роснефть", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Сибур", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Лукойл", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Северсталь", logo: "/placeholder.svg?height=80&width=160" },
  { name: "НЛМК", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Магнитогорский МК", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Уралмаш", logo: "/placeholder.svg?height=80&width=160" },
]

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 4))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Нам доверяют</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Крупнейшие промышленные предприятия России выбирают наше оборудование
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                  {clients.slice(slideIndex * 4, slideIndex * 4 + 4).map((client, index) => (
                    <div
                      key={index}
                      className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={160}
                        height={80}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

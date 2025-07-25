"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    image: string
    price: string
    features: string[]
    isPopular: boolean
    specifications: Record<string, string>
  }
}

// Translation dictionary for specifications
const specTranslations: Record<string, string> = {
  maxDiameter: "Максимальный диаметр",
  maxLength: "Максимальная длина",
  power: "Мощность",
  weight: "Вес",
  workingArea: "Рабочая зона",
  spindleSpeed: "Скорость шпинделя",
  maxDrillDiameter: "Максимальный диаметр сверления",
  spindleTravel: "Ход шпинделя",
  tableSize: "Размер стола",
  wheelDiameter: "Диаметр круга",
}

export function ProductCard({ product }: ProductCardProps) {
  const [showPriceRequest, setShowPriceRequest] = useState(false)

  const handlePriceRequest = () => {
    setShowPriceRequest(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          {product.isPopular && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">Популярный</Badge>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

          <div className="space-y-2 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Характеристики:</h4>
            <div className="space-y-1">
              {Object.entries(product.specifications)
                .slice(0, 2)
                .map(([key, value]) => (
                  <div key={key} className="text-sm text-gray-600 flex justify-between">
                    <span>{specTranslations[key] || key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-xl font-bold text-yellow-600">{product.price}</div>
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={handlePriceRequest} className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Запросить цену
            </Button>
            <Link href={`/catalog/${product.id}`}>
              <Button variant="outline" className="w-full bg-transparent hover:bg-gray-50">
                <ArrowRight className="w-4 h\

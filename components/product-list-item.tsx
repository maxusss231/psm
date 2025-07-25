"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowRight } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

interface ProductListItemProps {
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

export function ProductListItem({ product }: ProductListItemProps) {
  const [showPriceRequest, setShowPriceRequest] = useState(false)

  const handlePriceRequest = () => {
    setShowPriceRequest(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-64 h-48 md:h-auto">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            {product.isPopular && (
              <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">Популярный</Badge>
            )}
          </div>

          <div className="flex-1 p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between h-full">
              <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Особенности:</h4>
                    <div className="space-y-1">
                      {product.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Характеристики:</h4>
                    <div className="space-y-1">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="text-sm text-gray-600 flex justify-between">
                          <span>{specTranslations[key] || key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:text-right">
                <div className="text-2xl font-bold text-blue-600 mb-4">{product.price}</div>
                <div className="flex flex-col gap-2 md:w-48">
                  <Link href={`/catalog/${product.id}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </Link>
                  <Button onClick={handlePriceRequest} className="bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Запросить цену
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showPriceRequest}
        onClose={() => setShowPriceRequest(false)}
        type="price"
        productName={product.name}
      />
    </>
  )
}

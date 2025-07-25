"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"

interface Product {
  id: number
  name: string
  category: string
  image: string
  price: string
  features: string[]
  isPopular: boolean
  specifications: Record<string, string>
}

interface QuickViewModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
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

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Быстрый просмотр</span>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
              {product.isPopular && <Badge className="absolute top-3 left-3 bg-red-500">Хит продаж</Badge>}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{product.category}</Badge>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>

              <div className="text-4xl font-bold text-blue-600 mb-6">{product.price}</div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Основные характеристики:</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600 text-lg">{specTranslations[key] || key}</span>
                      <span className="font-medium text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  <Link href={`/catalog/${product.id}`}>Подробнее</Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent text-lg py-3"
                  onClick={() => setShowContact(true)}
                >
                  Запросить цену
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <ContactModal product={product} isOpen={showContact} onClose={() => setShowContact(false)} type="price" />
    </>
  )
}

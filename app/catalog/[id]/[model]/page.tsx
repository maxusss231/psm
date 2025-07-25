"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, ShoppingCart, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for specific model
const modelData = {
  tv4: {
    name: "ТВ-4",
    series: "Серия ТВ",
    seriesId: 1,
    subtitle: "Универсальный токарно-винторезный станок",
    images: [
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
    ],
    specifications: {
      "Основные характеристики": {
        "Максимальный диаметр обработки над станиной": "200 мм",
        "Максимальный диаметр обработки над суппортом": "120 мм",
        "Максимальная длина обработки": "750 мм",
        "Диаметр шпинделя": "38 мм",
        "Конус шпинделя": "Морзе №3",
      },
      "Приводы и скорости": {
        "Мощность главного привода": "4 кВт",
        "Частота вращения шпинделя": "45-2000 об/мин",
        "Количество скоростей шпинделя": "12",
        "Подача суппорта продольная": "0.05-1.4 мм/об",
        "Подача суппорта поперечная": "0.025-0.7 мм/об",
      },
      Точность: {
        "Точность позиционирования": "±0.01 мм",
        "Повторяемость позиционирования": "±0.005 мм",
        "Шероховатость обработанной поверхности": "Ra 0.8 мкм",
      },
      "Габариты и масса": {
        Длина: "2100 мм",
        Ширина: "1200 мм",
        Высота: "1400 мм",
        Масса: "1200 кг",
      },
    },
    configurations: [
      {
        name: "Базовая комплектация",
        features: [
          "Станок в базовой комплектации",
          "Трехкулачковый патрон 160 мм",
          "Набор резцедержателей",
          "Защитное ограждение",
          "Система смазки",
        ],
      },
      {
        name: "Расширенная комплектация",
        features: [
          "Все из базовой комплектации",
          "Четырехкулачковый патрон 200 мм",
          "Люнет подвижный и неподвижный",
          "Дополнительный набор резцов",
          "Система охлаждения СОЖ",
          "Цифровая индикация",
        ],
      },
      {
        name: "Премиум комплектация",
        features: [
          "Все из расширенной комплектации",
          "Система ЧПУ",
          "Автоматическая револьверная головка",
          "Система автоматической подачи прутка",
          "Расширенная система безопасности",
          "Дополнительная гарантия 2 года",
        ],
      },
    ],
    applications: [
      "Обработка валов диаметром до 200 мм",
      "Изготовление втулок и колец",
      "Нарезание метрической и дюймовой резьбы",
      "Обработка конических поверхностей",
      "Сверление и растачивание отверстий до 25 мм",
    ],
    advantages: [
      "Высокая жесткость конструкции",
      "Простота в эксплуатации и обслуживании",
      "Широкий диапазон скоростей",
      "Возможность обработки различных материалов",
      "Доступная цена при высоком качестве",
    ],
    documentation: [
      { name: "Техническое описание", type: "PDF", size: "1.2 МБ" },
      { name: "Руководство по эксплуатации", type: "PDF", size: "3.4 МБ" },
      { name: "Схема электрическая", type: "PDF", size: "0.8 МБ" },
      { name: "Каталог запчастей", type: "PDF", size: "2.1 МБ" },
    ],
  },
}

export default function ModelPage({ params }: { params: { id: string; model: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedConfiguration, setSelectedConfiguration] = useState(0)

  const model = modelData[params.model as keyof typeof modelData]

  if (!model) {
    return <div>Модель не найдена</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/catalog" className="hover:text-yellow-600">
              Каталог
            </Link>
            <span>/</span>
            <Link href={`/catalog/${model.seriesId}`} className="hover:text-yellow-600">
              {model.series}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{model.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm p-4">
              <Image
                src={model.images[selectedImage] || "/placeholder.svg"}
                alt={model.name}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {model.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 p-2 ${
                    selectedImage === index ? "border-yellow-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${model.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Link
                href={`/catalog/${model.seriesId}`}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-2"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Назад к серии
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{model.name}</h1>
              <p className="text-lg text-gray-600">{model.subtitle}</p>
            </div>

            {/* Configuration Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Выберите комплектацию:</h3>
              <div className="space-y-3">
                {model.configurations.map((config, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedConfiguration === index
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedConfiguration(index)}
                  >
                    <div className="mb-2">
                      <h4 className="font-semibold">{config.name}</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {config.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {config.features.length > 3 && (
                        <li className="text-yellow-600">+{config.features.length - 3} дополнительных опций</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Запросить коммерческое предложение
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="bg-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" className="bg-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Написать
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information - Single Page Layout */}
        <div className="mt-16 space-y-12">
          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Характеристики</h2>
            {Object.entries(model.specifications).map(([category, specs], categoryIndex) => (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-2/3">Параметр</TableHead>
                      <TableHead>Значение</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(specs).map(([spec, value]) => (
                      <TableRow key={spec}>
                        <TableCell className="font-medium">{spec}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {categoryIndex < Object.entries(model.specifications).length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>

          {/* Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Области применения</CardTitle>
              <CardDescription>Станок {model.name} идеально подходит для следующих видов работ:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {model.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Преимущества модели {model.name}</CardTitle>
              <CardDescription>Ключевые преимущества, которые делают этот станок оптимальным выбором:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {model.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Documentation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Техническая документация</CardTitle>
              <CardDescription>Загрузите необходимую документацию для модели {model.name}:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {model.documentation.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-500">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Скачать
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

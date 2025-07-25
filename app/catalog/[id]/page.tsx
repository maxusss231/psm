"use client"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, Settings, Wrench, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

// Mock data for series details
const seriesData = {
  1: {
    name: "Серия ТВ",
    subtitle: "Универсальные токарно-винторезные станки",
    category: "Токарно-винторезные станки",
    description:
      "Высокопроизводительные токарно-винторезные станки для универсальной обработки деталей различной сложности",
    heroImage: "/images/clx-350-product-picture.webp",
    models: [
      {
        id: "tv4",
        name: "ТВ-4",
        image: "/images/clx-350-product-picture.webp",
        specs: {
          "Макс. диаметр обработки": "200 мм",
          "Макс. длина обработки": "750 мм",
          "Мощность главного привода": "4 кВт",
          "Частота вращения шпинделя": "45-2000 об/мин",
          "Точность позиционирования": "±0.01 мм",
        },
      },
      {
        id: "tv6",
        name: "ТВ-6",
        image: "/images/clx-350-product-picture.webp",
        specs: {
          "Макс. диаметр обработки": "320 мм",
          "Макс. длина обработки": "1000 мм",
          "Мощность главного привода": "7.5 кВт",
          "Частота вращения шпинделя": "31.5-1600 об/мин",
          "Точность позиционирования": "±0.008 мм",
        },
      },
      {
        id: "tv7",
        name: "ТВ-7",
        image: "/images/clx-350-product-picture.webp",
        specs: {
          "Макс. диаметр обработки": "400 мм",
          "Макс. длина обработки": "1500 мм",
          "Мощность главного привода": "11 кВт",
          "Частота вращения шпинделя": "25-1250 об/мин",
          "Точность позиционирования": "±0.008 мм",
        },
      },
      {
        id: "tv9",
        name: "ТВ-9",
        image: "/images/clx-350-product-picture.webp",
        specs: {
          "Макс. диаметр обработки": "450 мм",
          "Макс. длина обработки": "2000 мм",
          "Мощность главного привода": "15 кВт",
          "Частота вращения шпинделя": "20-1000 об/мин",
          "Точность позиционирования": "±0.006 мм",
        },
      },
      {
        id: "tv16",
        name: "ТВ-16",
        image: "/images/clx-350-product-picture.webp",
        specs: {
          "Макс. диаметр обработки": "500 мм",
          "Макс. длина обработки": "3000 мм",
          "Мощность главного привода": "22 кВт",
          "Частота вращения шпинделя": "16-800 об/мин",
          "Точность позиционирования": "±0.005 мм",
        },
      },
    ],
    highlights: [
      "Жесткая чугунная станина для высокой точности обработки",
      "12-позиционная револьверная головка для быстрой смены инструмента",
      "Система прямого измерения в стандартной комплектации (X-ось и Z-ось)",
      "Новый IoT коннектор в стандартной комплектации",
    ],
    technicalFeatures: [
      "Высокоточные линейные направляющие",
      "Система автоматической смазки",
      "Защитное ограждение с блокировкой",
      "Система удаления стружки",
    ],
    applications: [
      "Обработка валов и осей",
      "Изготовление втулок и колец",
      "Нарезание резьбы",
      "Обработка конических поверхностей",
      "Сверление и растачивание отверстий",
    ],
    documentation: [
      { name: "Техническая брошюра", type: "PDF", size: "2.4 МБ" },
      { name: "Руководство по эксплуатации", type: "PDF", size: "8.1 МБ" },
      { name: "Каталог запчастей", type: "PDF", size: "12.3 МБ" },
      { name: "Схемы подключения", type: "PDF", size: "1.8 МБ" },
    ],
  },
}

export default function SeriesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const seriesId = Number.parseInt(id)
  const series = seriesData[seriesId as keyof typeof seriesData]

  if (!series) {
    return <div>Серия не найдена</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={series.heroImage || "/placeholder.svg"}
                alt={series.name}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Series Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{series.name}</h1>
                <p className="text-xl text-gray-300">{series.subtitle}</p>
              </div>

              {/* Expandable Sections */}
              <Accordion type="multiple" className="space-y-2">
                <AccordionItem value="highlights" className="border border-gray-600 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-semibold hover:no-underline">
                    Основные преимущества
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      {series.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical" className="border border-gray-600 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-semibold hover:no-underline">
                    Технические особенности
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      {series.technicalFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Models Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Сравнение моделей</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Характеристики</th>
                  {series.models.map((model) => (
                    <th key={model.id} className="text-center p-6">
                      <div className="flex flex-col items-center space-y-3">
                        <Image
                          src={model.image || "/placeholder.svg"}
                          alt={model.name}
                          width={120}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                        <h3 className="font-bold text-gray-900">{model.name}</h3>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(series.models[0].specs).map((specKey) => (
                  <tr key={specKey} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-medium text-gray-900">{specKey}</td>
                    {series.models.map((model) => (
                      <td key={model.id} className="p-6 text-center text-gray-700 font-medium">
                        {model.specs[specKey as keyof typeof model.specs]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6"></td>
                  {series.models.map((model) => (
                    <td key={model.id} className="p-6 text-center">
                      <Link href={`/catalog/${seriesId}/${model.id}`}>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Подробнее
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Высокопроизводительные токарные станки для широкого спектра применений
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Современный токарный станок с ЧПУ должен быть производительным, гибким и простым в эксплуатации. Общая
                производительность обработки и весь спектр ведущих технологических характеристик серии ТВ открывают
                новые возможности для серии ТВ. Это относится к модульности и возможности создания "собственной машины"
                с широким спектром опций и технологических решений.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-yellow-600" />
                    Области применения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {series.applications.map((application, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="w-5 h-5 mr-2 text-yellow-600" />
                    Документация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {series.documentation.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New Technology Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="text-yellow-600">НОВОЕ:</span> IoT коннектор для цифровых и подключенных производственных
              процессов
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Сервис ПромСтройМаш NETservice и MESSENGER предустановлены</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Settings className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Специально настроен для вашего станка перед поставкой</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">
                    Интегрированный брандмауэр с автоматическими обновлениями гарантирует максимальную защиту
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Связаться с нами
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

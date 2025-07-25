"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const series = [
  {
    id: 1,
    name: "Серия ТВ",
    category: "Токарно-винторезные станки",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 1 800 000 - 4 200 000 ₽",
    description: "Универсальные токарно-винторезные станки для обработки валов, втулок и резьбовых соединений",
    isPopular: true,
    versionsCount: 5,
    versions: ["ТВ-4", "ТВ-6", "ТВ-7", "ТВ-9", "ТВ-16"],
    baseSpecs: {
      maxDiameter: "200-500 мм",
      maxLength: "750-3000 мм",
      power: "4-22 кВт",
    },
  },
  {
    id: 2,
    name: "Серия КП",
    category: "Кузнечно-прессовое оборудование",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 2 500 000 - 8 500 000 ₽",
    description: "Гидравлические прессы для штамповки, вытяжки и формовки металлических изделий",
    isPopular: true,
    versionsCount: 6,
    versions: ["КП-40", "КП-63", "КП-100", "КП-160", "КП-250", "КП-400"],
    baseSpecs: {
      force: "40-400 тонн",
      tableSize: "400x400-1000x800 мм",
      power: "7.5-45 кВт",
    },
  },
  {
    id: 3,
    name: "Серия ФУ",
    category: "Фрезерные станки универсальные",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 1 200 000 - 3 800 000 ₽",
    description: "Универсальные фрезерные станки для обработки плоских и фасонных поверхностей",
    isPopular: false,
    versionsCount: 4,
    versions: ["ФУ-251", "ФУ-321", "ФУ-400", "ФУ-450"],
    baseSpecs: {
      workingArea: "250x800-450x1600 мм",
      spindleSpeed: "31.5-1600 об/мин",
      power: "4-11 кВт",
    },
  },
  {
    id: 4,
    name: "Серия АЛ",
    category: "Автоматизированные линии",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 5 000 000 - 25 000 000 ₽",
    description: "Комплексные автоматизированные линии для серийного производства деталей",
    isPopular: true,
    versionsCount: 4,
    versions: ["АЛ-1М", "АЛ-2М", "АЛ-3М", "АЛ-5М"],
    baseSpecs: {
      productivity: "50-300 дет/час",
      stations: "3-8 позиций",
      power: "25-150 кВт",
    },
  },
  {
    id: 5,
    name: "Серия РС",
    category: "Радиально-сверлильные станки",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 850 000 - 2 200 000 ₽",
    description: "Радиально-сверлильные станки для сверления отверстий в крупногабаритных деталях",
    isPopular: false,
    versionsCount: 4,
    versions: ["РС-25", "РС-32", "РС-40", "РС-50"],
    baseSpecs: {
      maxDrillDiameter: "25-50 мм",
      armLength: "800-1600 мм",
      power: "2.2-7.5 кВт",
    },
  },
  {
    id: 6,
    name: "Серия СМ",
    category: "Средства механизации",
    image: "/images/clx-350-product-picture.webp",
    priceRange: "от 450 000 - 1 800 000 ₽",
    description: "Подъемно-транспортное оборудование и средства механизации производства",
    isPopular: false,
    versionsCount: 5,
    versions: ["СМ-1Т", "СМ-2Т", "СМ-3Т", "СМ-5Т", "СМ-10Т"],
    baseSpecs: {
      liftCapacity: "1-10 тонн",
      liftHeight: "3-12 м",
      power: "1.5-15 кВт",
    },
  },
]

const sortOptions = [
  { value: "default", label: "По умолчанию" },
  { value: "name-asc", label: "Название: А-Я" },
  { value: "name-desc", label: "Название: Я-А" },
  { value: "popular", label: "Популярные" },
]

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filteredSeries, setFilteredSeries] = useState(series)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    filterSeries(value, sortBy)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    filterSeries(searchTerm, value)
  }

  const filterSeries = (search: string, sort: string) => {
    let filtered = [...series]

    // Apply search filter
    if (search) {
      filtered = filtered.filter(
        (seriesItem) =>
          seriesItem.name.toLowerCase().includes(search.toLowerCase()) ||
          seriesItem.category.toLowerCase().includes(search.toLowerCase()) ||
          seriesItem.description.toLowerCase().includes(search.toLowerCase()) ||
          seriesItem.versions.some((version) => version.toLowerCase().includes(search.toLowerCase())),
      )
    }

    // Apply sorting
    switch (sort) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "popular":
        filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0))
        break
      default:
        // Keep original order
        break
    }

    setFilteredSeries(filtered)
  }

  // Group series by category for overview display
  const groupedSeries = filteredSeries.reduce(
    (acc, seriesItem) => {
      if (!acc[seriesItem.category]) {
        acc[seriesItem.category] = []
      }
      acc[seriesItem.category].push(seriesItem)
      return acc
    },
    {} as Record<string, typeof series>,
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/images/clx-350-product-picture.webp"
            alt="Каталог оборудования"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-yellow-100 text-yellow-700 px-4 py-2 text-sm font-medium">
              Каталог продукции
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Металлообрабатывающее
              <span className="block text-yellow-400 text-4xl lg:text-5xl mt-2">оборудование</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              Универсальные решения для точных производственных задач. Полный спектр станков и оборудования для
              металлообработки от ведущего российского производителя
            </p>
            <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8 py-4">
              Смотреть каталог
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ОБЗОР ПРОДУКЦИИ</h2>

          {Object.entries(groupedSeries).map(([category, categoryItems]) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {categoryItems.map((seriesItem) => (
                  <Link key={seriesItem.id} href={`/catalog/${seriesItem.id}`} className="group">
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={seriesItem.image || "/placeholder.svg"}
                          alt={seriesItem.name}
                          width={150}
                          height={150}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 text-center">{seriesItem.name}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Components Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Основные компоненты металлообрабатывающих станков
            </h2>
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                Высокоточные переменные скорости и производственная точность основаны на высокотехнологичном станочном
                оборудовании. Нормальная конструкция облегчает снятие стружки и обслуживание системы. Станина является
                основой для <strong>обработки</strong> всех компонентов. Она должна быть жесткой для обеспечения
                точности обработки и долговечности станка.
              </p>
              <p>
                Шпиндель интегрирован в переднюю бабку. Многие модели оснащены как можно более мощным приводом для
                рабочего места. Шпиндель разделен на отдельные шпиндели и шпиндель счетчика. Главный шпиндель служит в
                качестве привода или крепления для токарного процесса. Счетчик шпинделя разделен на отдельные шпиндели и
                шпиндель счетчика, расположенный напротив главного шпинделя, с той же осью, полной обработкой рабочего
                места или на всех этапах, которые могут быть достигнуты. Это увеличивает производительность
                промышленного производства.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machining Operations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Операции обработки, выполняемые металлообрабатывающими станками
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Продольное точение
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Торцевое точение
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Обработка конических поверхностей
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Нарезание внутренней и наружной резьбы
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Нарезание резьбы
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Глубокое сверление (при наличии соответствующего инструмента)
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Фрезерование
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                    Шлифование
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-10 text-gray-600 text-lg text-center">
              Универсальные станки можно найти в промышленности как индивидуальные, обычные, управляемые ЧПУ и
              криминальные станки.
            </p>
          </div>
        </div>
      </section>

      {/* Right Series Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Правильная серия для каждого требования
            </h2>
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                Чтобы обеспечить универсальным производителям различные секции по производству металлических деталей с
                высочайшей точностью и эффективной точностью, ПромСтройМаш предлагает{" "}
                <strong>серию ТВ, КП, ФУ, АЛ, РС и СМ</strong> в качестве машинных решений. Каждая серия имеет свои
                собственные характеристики, которые делают их идеальными для различных областей применения, обеспечивая
                оптимальную производительность.
              </p>
              <p>
                Благодаря специальным направляющим и системам привода, каждая серия обеспечивает максимальную
                производительность. Благодаря специальным компонентам до 12 000 об/мин, пользователи получают выгоду от
                высокой скорости резания и высокой производительности. Одиночная токарная обработка, а также
                максимальная производительность обеспечивают оптимальные результаты в производстве рабочих мест.
                Токарные станки с приводными инструментами обеспечивают универсальность обработки в рамках
                универсального станка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Определенные свойства и богатство вариантов
            </h2>
            <div className="text-lg text-gray-600 mb-10 leading-relaxed">
              <p>
                По сравнению с другими токарными процессами, такими как токарная обработка с ЧПУ,{" "}
                <strong>универсальное точение</strong>
                отличается своей способностью к системе сложных геометрий и различных токарных операций в одном
                процессе. Это богатство вариантов достигается следующими свойствами:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>Шпиндель счетчика обеспечивает полную токарную обработку</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>Y-ось для полной обработки сложных компонентов</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>Задние центры с проходом до 25 мм диаметров</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>Обработка рабочих мест с диаметром до 800 мм и длиной до 4000 мм</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>Плоские направляющие для оптимальных свойств демпфирования и динамической жесткости</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                    <span>
                      <strong>МАСТЕР обновления</strong> с 36-месячной гарантией без ограничений по часам
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Важные вопросы о металлообрабатывающих станках
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="features" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  Каковы основные особенности металлообрабатывающих станков?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 text-lg">
                  Основные особенности включают высокую точность обработки, универсальность применения, надежную
                  конструкцию станины, мощные шпиндели, системы ЧПУ для автоматизации процессов, и возможность
                  выполнения различных операций на одном станке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="choice" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  Почему стоит выбрать металлообрабатывающие станки ПромСтройМаш?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 text-lg">
                  Станки ПромСтройМаш отличаются высоким качеством изготовления, надежностью, широким спектром
                  применения, конкурентоспособными ценами, полной технической поддержкой и гарантийным обслуживанием. Мы
                  предлагаем решения для любых производственных задач.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="applications" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  Какие металлообрабатывающие станки используются в серийном производстве?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 text-lg">
                  Для серийного производства используются автоматизированные линии серии АЛ, токарно-винторезные станки
                  с ЧПУ серии ТВ, универсальные фрезерные станки серии ФУ, и кузнечно-прессовое оборудование серии КП.
                  Выбор зависит от типа обрабатываемых деталей и требуемой производительности.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

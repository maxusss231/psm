"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Download,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data для конкретного заказа
const mockOrder = {
  id: "ORD-2024-001",
  product: "ПСМ-1500 CNC",
  category: "Токарные станки",
  status: "В производстве",
  statusColor: "bg-yellow-500",
  date: "2024-01-15",
  deliveryDate: "2024-03-15",
  amount: "2 500 000 ₽",
  quantity: 1,
  progress: 45,
  manager: "Елена Сидорова",
  managerPhone: "+7 (495) 123-45-68",
  managerEmail: "e.sidorova@promstroymash.ru",
  description: "Токарный станок с ЧПУ для высокоточной обработки деталей сложной формы",
  image: "/placeholder.svg?height=400&width=600",
  specifications: {
    "Максимальный диаметр обработки": "500 мм",
    "Максимальная длина обработки": "1500 мм",
    "Мощность главного привода": "15 кВт",
    "Система ЧПУ": "Siemens 828D",
    "Точность позиционирования": "±0.01 мм",
    "Вес станка": "3500 кг",
  },
  deliveryAddress: "123456, Москва, ул. Промышленная, д. 25, стр. 1",
  paymentStatus: "Частично оплачен",
  paymentAmount: "1 250 000 ₽",
  remainingAmount: "1 250 000 ₽",
}

const mockTimeline = [
  {
    date: "2024-01-15",
    title: "Заказ оформлен",
    description: "Заказ принят в работу",
    status: "completed",
    icon: CheckCircle,
  },
  {
    date: "2024-01-16",
    title: "Предоплата получена",
    description: "Получена предоплата 50%",
    status: "completed",
    icon: CheckCircle,
  },
  {
    date: "2024-01-20",
    title: "Производство начато",
    description: "Станок запущен в производство",
    status: "completed",
    icon: CheckCircle,
  },
  {
    date: "2024-02-15",
    title: "Сборка завершена",
    description: "Основная сборка станка завершена",
    status: "current",
    icon: Clock,
  },
  {
    date: "2024-03-01",
    title: "Тестирование",
    description: "Проведение финальных испытаний",
    status: "pending",
    icon: AlertCircle,
  },
  {
    date: "2024-03-15",
    title: "Готов к отгрузке",
    description: "Станок готов к отправке",
    status: "pending",
    icon: Truck,
  },
]

const mockDocuments = [
  {
    name: "Договор поставки",
    type: "PDF",
    size: "2.4 MB",
    date: "2024-01-15",
  },
  {
    name: "Техническое задание",
    type: "PDF",
    size: "1.8 MB",
    date: "2024-01-15",
  },
  {
    name: "Счет на предоплату",
    type: "PDF",
    size: "0.5 MB",
    date: "2024-01-16",
  },
  {
    name: "Акт выполненных работ",
    type: "PDF",
    size: "0.8 MB",
    date: "2024-02-15",
  },
]

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && ["overview", "timeline", "documents", "manager"].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    const url = new URL(window.location.href)
    if (value === "overview") {
      url.searchParams.delete("tab")
    } else {
      url.searchParams.set("tab", value)
    }
    window.history.replaceState({}, "", url.toString())
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle
      case "current":
        return Clock
      default:
        return AlertCircle
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "current":
        return "text-yellow-600"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/dashboard/orders">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к заказам
              </Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{mockOrder.id}</h1>
                <Badge className={`${mockOrder.statusColor} text-gray-900 border-0`}>{mockOrder.status}</Badge>
              </div>
              <p className="text-lg text-gray-600">{mockOrder.product}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 mb-8 bg-white border border-gray-200">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 data-[state=active]:border-red-200"
            >
              Обзор
            </TabsTrigger>
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 data-[state=active]:border-red-200"
            >
              Статус
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 data-[state=active]:border-red-200"
            >
              Документы
            </TabsTrigger>
            <TabsTrigger
              value="manager"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 data-[state=active]:border-red-200"
            >
              Менеджер
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-xl font-semibold text-gray-900">Информация о заказе</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Image
                          src={mockOrder.image || "/placeholder.svg"}
                          alt={mockOrder.product}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg border border-gray-200"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{mockOrder.product}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{mockOrder.description}</p>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Количество:</span>
                            <span className="font-semibold text-gray-900">{mockOrder.quantity} шт.</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Категория:</span>
                            <span className="font-semibold text-gray-900">{mockOrder.category}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 font-medium">Дата заказа:</span>
                            <span className="font-semibold text-gray-900">{mockOrder.date}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600 font-medium">Плановая поставка:</span>
                            <span className="font-semibold text-gray-900">{mockOrder.deliveryDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-xl font-semibold text-gray-900">Технические характеристики</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(mockOrder.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 font-medium">{key}</span>
                          <span className="font-semibold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-xl font-semibold text-gray-900">Сумма заказа</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-3xl font-bold text-gray-900">{mockOrder.amount}</div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 font-medium">Оплачено:</span>
                          <span className="font-semibold text-green-600">{mockOrder.paymentAmount}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600 font-medium">К доплате:</span>
                          <span className="font-semibold text-red-600">{mockOrder.remainingAmount}</span>
                        </div>
                      </div>
                      <Badge className="w-full justify-center py-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                        {mockOrder.paymentStatus}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-xl font-semibold text-gray-900">Адрес доставки</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{mockOrder.deliveryAddress}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-900">Статус выполнения заказа</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {mockTimeline.map((item, index) => {
                    const StatusIcon = getStatusIcon(item.status)
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            item.status === "completed"
                              ? "bg-green-100 border-2 border-green-200"
                              : item.status === "current"
                                ? "bg-yellow-100 border-2 border-yellow-200"
                                : "bg-gray-100 border-2 border-gray-200"
                          }`}
                        >
                          <StatusIcon className={`w-6 h-6 ${getStatusColor(item.status)}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-900">Документы по заказу</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">
                            {doc.type} • {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manager">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-900">Ваш менеджер</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">ЕС</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{mockOrder.manager}</h3>
                    <p className="text-gray-600 mb-6 text-lg">Менеджер по работе с клиентами</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">{mockOrder.managerPhone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">{mockOrder.managerEmail}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700 font-medium">Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">
                        <Phone className="w-4 h-4 mr-2" />
                        Позвонить
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">
                        <Mail className="w-4 h-4 mr-2" />
                        Написать
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

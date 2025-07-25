"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Wrench,
  Calendar,
  MessageSquare,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Eye,
  Download,
  User,
} from "lucide-react"
import Link from "next/link"

// Mock data
const mockStats = {
  activeOrders: 3,
  completedOrders: 12,
  serviceRequests: 2,
  upcomingBookings: 1,
}

const mockRecentOrders = [
  {
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
    description: "Токарный станок с ЧПУ для высокоточной обработки",
  },
  {
    id: "ORD-2024-002",
    product: "ПСМ-2000 VMC",
    category: "Фрезерные станки",
    status: "Готов к отгрузке",
    statusColor: "bg-green-500",
    date: "2024-01-10",
    deliveryDate: "2024-02-10",
    amount: "3 200 000 ₽",
    quantity: 1,
    progress: 100,
    manager: "Михаил Иванов",
    description: "Вертикально-фрезерный станок с автосменой инструмента",
  },
  {
    id: "ORD-2024-003",
    product: "ПСМ-800 Drill",
    category: "Сверлильные станки",
    status: "Ожидает оплаты",
    statusColor: "bg-yellow-600",
    date: "2024-01-08",
    deliveryDate: "2024-02-28",
    amount: "850 000 ₽",
    quantity: 2,
    progress: 0,
    manager: "Ольга Козлова",
    description: "Радиально-сверлильный станок с цифровой индикацией",
  },
]

const mockServiceRequests = [
  {
    id: "SRV-2024-001",
    type: "Плановое ТО",
    equipment: "ПСМ-1200 Lathe",
    status: "Назначен специалист",
    date: "2024-01-20",
    priority: "Средний",
  },
  {
    id: "SRV-2024-002",
    type: "Ремонт",
    equipment: "ПСМ-1500 CNC",
    status: "В работе",
    date: "2024-01-18",
    priority: "Высокий",
  },
]

const statusIcons = {
  "В производстве": Clock,
  "Готов к отгрузке": CheckCircle,
  "Ожидает оплаты": AlertCircle,
  Выполнен: CheckCircle,
  Отменен: XCircle,
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Панель управления</h1>
          <p className="text-gray-600">Добро пожаловать в личный кабинет</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Активные заказы</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.activeOrders}</p>
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Выполнено заказов</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.completedOrders}</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Сервисные заявки</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.serviceRequests}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Предстоящие записи</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.upcomingBookings}</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Package className="w-5 h-5 text-red-600" />
                    Последние заказы
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Link href="/dashboard/orders">Все заказы</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockRecentOrders.map((order) => {
                    const StatusIcon = statusIcons[order.status as keyof typeof statusIcons]

                    return (
                      <Card
                        key={order.id}
                        className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            {/* Order Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                                <Badge className={`${order.statusColor} text-white flex items-center gap-1`}>
                                  <StatusIcon className="w-3 h-3" />
                                  {order.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600 font-medium">Оборудование</p>
                                  <p className="font-semibold text-gray-900">{order.product}</p>
                                  <p className="text-gray-500">{order.category}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 font-medium">Количество</p>
                                  <p className="font-semibold text-gray-900">{order.quantity} шт.</p>
                                </div>
                                <div>
                                  <p className="text-gray-600 font-medium">Дата заказа</p>
                                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {order.date}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-600 font-medium">Менеджер</p>
                                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {order.manager}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3">
                                <p className="text-gray-600 text-sm">
                                  Плановая поставка: <span className="font-medium">{order.deliveryDate}</span>
                                </p>
                                <p className="text-gray-500 text-sm mt-1">{order.description}</p>
                              </div>
                            </div>
                            {/* Amount and Actions */}
                            <div className="lg:text-right">
                              <div className="text-2xl font-bold text-red-600 mb-4">{order.amount}</div>
                              <div className="flex flex-col gap-2">
                                <Button size="sm" asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                                  <Link href={`/dashboard/orders/${order.id}`}>
                                    <Eye className="w-4 h-4 mr-2" />
                                    Подробнее
                                  </Link>
                                </Button>
                                <Button size="sm" asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                                  <Link href={`/dashboard/orders/${order.id}?tab=documents`}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Документы
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Service Requests */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/dashboard/booking">
                    <Package className="w-4 h-4 mr-2" />
                    Новый заказ
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Link href="/dashboard/booking">
                    <Wrench className="w-4 h-4 mr-2" />
                    Сервисная заявка
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Link href="/dashboard/booking">
                    <Calendar className="w-4 h-4 mr-2" />
                    Записаться на ТО
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Link href="/dashboard/chat">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Техподдержка
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service Requests */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Wrench className="w-5 h-5 text-yellow-600" />
                    Сервисные заявки
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Link href="/dashboard/service-requests">Все заявки</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {mockServiceRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">{request.id}</span>
                        <Badge
                          variant={request.priority === "Высокий" ? "destructive" : "secondary"}
                          className={
                            request.priority === "Высокий" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
                          }
                        >
                          {request.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-1">{request.type}</p>
                      <p className="text-xs text-gray-500 mb-2">{request.equipment}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{request.date}</span>
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

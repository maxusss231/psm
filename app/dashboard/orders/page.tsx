"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Package,
  Search,
  Filter,
  Eye,
  Download,
  Plus,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

// Mock data
const mockOrders = [
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
  {
    id: "ORD-2024-004",
    product: "ПСМ-3000 Mill",
    category: "Фрезерные станки",
    status: "Выполнен",
    statusColor: "bg-green-600",
    date: "2023-12-20",
    deliveryDate: "2024-01-20",
    amount: "4 100 000 ₽",
    quantity: 1,
    progress: 100,
    manager: "Дмитрий Петров",
    description: "Горизонтально-фрезерный станок с поворотным столом",
  },
  {
    id: "ORD-2024-005",
    product: "ПСМ-600 Grind",
    category: "Шлифовальные станки",
    status: "Отменен",
    statusColor: "bg-red-500",
    date: "2023-12-15",
    deliveryDate: "2024-01-15",
    amount: "1 200 000 ₽",
    quantity: 1,
    progress: 0,
    manager: "Анна Смирнова",
    description: "Круглошлифовальный станок с ЧПУ",
  },
]

const statusIcons = {
  "В производстве": Clock,
  "Готов к отгрузке": CheckCircle,
  "Ожидает оплаты": AlertCircle,
  Выполнен: CheckCircle,
  Отменен: XCircle,
}

const statusOptions = [
  { value: "all", label: "Все статусы" },
  { value: "В производстве", label: "В производстве" },
  { value: "Готов к отгрузке", label: "Готов к отгрузке" },
  { value: "Ожидает оплаты", label: "Ожидает оплаты" },
  { value: "Выполнен", label: "Выполнен" },
  { value: "Отменен", label: "Отменен" },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Заказы</h1>
            <p className="text-gray-600">Управление вашими заказами оборудования</p>
          </div>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/dashboard/booking">
              <Plus className="w-4 h-4 mr-2" />
              Новый заказ
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6 border border-gray-200 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Поиск по номеру заказа, оборудованию..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="lg:w-64">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const StatusIcon = statusIcons[order.status as keyof typeof statusIcons]

            return (
              <Card
                key={order.id}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
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

                      {/* Progress Bar */}
                      {order.status !== "Отменен" && order.status !== "Выполнен" && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600 font-medium">Прогресс выполнения</span>
                            <span className="font-semibold text-gray-900">{order.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-red-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${order.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
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

          {filteredOrders.length === 0 && (
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardContent className="p-12 text-center">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Заказы не найдены</h3>
                <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска или создайте новый заказ</p>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/dashboard/booking">
                    <Plus className="w-4 h-4 mr-2" />
                    Создать заказ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

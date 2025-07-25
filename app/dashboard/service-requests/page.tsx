"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Wrench,
  Search,
  Filter,
  Eye,
  Plus,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Calendar,
  User,
  Settings,
} from "lucide-react"
import Link from "next/link"

// Mock data
const mockServiceRequests = [
  {
    id: "SRV-2024-001",
    type: "Плановое ТО",
    equipment: "ПСМ-1200 Lathe",
    serialNumber: "PSM-1200-2023-001",
    status: "Назначен специалист",
    statusColor: "bg-yellow-500",
    date: "2024-01-20",
    scheduledDate: "2024-01-25",
    priority: "Средний",
    technician: "Иван Петров",
    description: "Плановое техническое обслуживание токарного станка",
    estimatedCost: "25 000 ₽",
  },
  {
    id: "SRV-2024-002",
    type: "Ремонт",
    equipment: "ПСМ-1500 CNC",
    serialNumber: "PSM-1500-2022-015",
    status: "В работе",
    statusColor: "bg-yellow-600",
    date: "2024-01-18",
    scheduledDate: "2024-01-22",
    priority: "Высокий",
    technician: "Сергей Иванов",
    description: "Замена шпинделя и настройка системы ЧПУ",
    estimatedCost: "150 000 ₽",
  },
  {
    id: "SRV-2024-003",
    type: "Диагностика",
    equipment: "ПСМ-2000 VMC",
    serialNumber: "PSM-2000-2023-008",
    status: "Ожидает запчасти",
    statusColor: "bg-gray-500",
    date: "2024-01-15",
    scheduledDate: "2024-01-30",
    priority: "Низкий",
    technician: "Алексей Смирнов",
    description: "Диагностика системы охлаждения и смазки",
    estimatedCost: "35 000 ₽",
  },
  {
    id: "SRV-2024-004",
    type: "Модернизация",
    equipment: "ПСМ-800 Drill",
    serialNumber: "PSM-800-2021-003",
    status: "Выполнено",
    statusColor: "bg-green-500",
    date: "2024-01-10",
    scheduledDate: "2024-01-15",
    priority: "Средний",
    technician: "Михаил Козлов",
    description: "Установка новой системы цифровой индикации",
    estimatedCost: "80 000 ₽",
  },
  {
    id: "SRV-2024-005",
    type: "Гарантийный ремонт",
    equipment: "ПСМ-1800 Mill",
    serialNumber: "PSM-1800-2023-012",
    status: "Отменено",
    statusColor: "bg-red-500",
    date: "2024-01-08",
    scheduledDate: "2024-01-12",
    priority: "Высокий",
    technician: "Дмитрий Волков",
    description: "Замена подшипников главного привода",
    estimatedCost: "0 ₽",
  },
]

const statusIcons = {
  "Назначен специалист": Clock,
  "В работе": Settings,
  "Ожидает запчасти": AlertCircle,
  Выполнено: CheckCircle,
  Отменено: XCircle,
}

const statusOptions = [
  { value: "all", label: "Все статусы" },
  { value: "Назначен специалист", label: "Назначен специалист" },
  { value: "В работе", label: "В работе" },
  { value: "Ожидает запчасти", label: "Ожидает запчасти" },
  { value: "Выполнено", label: "Выполнено" },
  { value: "Отменено", label: "Отменено" },
]

const priorityOptions = [
  { value: "all", label: "Все приоритеты" },
  { value: "Высокий", label: "Высокий" },
  { value: "Средний", label: "Средний" },
  { value: "Низкий", label: "Низкий" },
]

export default function ServiceRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredRequests = mockServiceRequests.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.equipment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.serialNumber.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesPriority = priorityFilter === "all" || request.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Сервисные заявки</h1>
            <p className="text-gray-600">Управление заявками на техническое обслуживание и ремонт</p>
          </div>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/dashboard/booking">
              <Plus className="w-4 h-4 mr-2" />
              Новая заявка
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
                    placeholder="Поиск по номеру заявки, оборудованию, серийному номеру..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="lg:w-48">
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
              <div className="lg:w-48">
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorityOptions.map((option) => (
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

        {/* Service Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => {
            const StatusIcon = statusIcons[request.status as keyof typeof statusIcons]

            return (
              <Card
                key={request.id}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Request Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{request.id}</h3>
                        <Badge className={`${request.statusColor} text-white flex items-center gap-1`}>
                          <StatusIcon className="w-3 h-3" />
                          {request.status}
                        </Badge>
                        <Badge
                          variant={
                            request.priority === "Высокий"
                              ? "destructive"
                              : request.priority === "Средний"
                                ? "default"
                                : "secondary"
                          }
                          className={
                            request.priority === "Высокий"
                              ? "bg-red-100 text-red-800"
                              : request.priority === "Средний"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {request.priority}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 font-medium">Тип услуги</p>
                          <p className="font-semibold text-gray-900">{request.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Оборудование</p>
                          <p className="font-semibold text-gray-900">{request.equipment}</p>
                          <p className="text-gray-500 text-xs">{request.serialNumber}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Дата заявки</p>
                          <p className="font-semibold text-gray-900 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {request.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Специалист</p>
                          <p className="font-semibold text-gray-900 flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {request.technician}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-gray-600 text-sm">
                          Плановая дата: <span className="font-medium">{request.scheduledDate}</span>
                        </p>
                        <p className="text-gray-500 text-sm mt-1">{request.description}</p>
                      </div>
                    </div>

                    {/* Cost and Actions */}
                    <div className="lg:text-right">
                      <div className="text-2xl font-bold text-red-600 mb-4">{request.estimatedCost}</div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                          <Link href={`/dashboard/service-requests/${request.id}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            Подробнее
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {filteredRequests.length === 0 && (
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardContent className="p-12 text-center">
                <Wrench className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Заявки не найдены</h3>
                <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска или создайте новую заявку</p>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/dashboard/booking">
                    <Plus className="w-4 h-4 mr-2" />
                    Создать заявку
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

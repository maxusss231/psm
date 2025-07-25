"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  FileText,
  Phone,
  Mail,
  Wrench,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Settings,
  Download,
  Eye,
} from "lucide-react"
import Link from "next/link"

// Mock данные для сервисной заявки
const serviceRequest = {
  id: "SRV-2024-001",
  type: "Плановое ТО",
  equipment: "Экскаватор CAT 320D",
  serialNumber: "CAT320D2024001",
  status: "active",
  priority: "medium",
  createdDate: "2024-01-15",
  scheduledDate: "2024-01-20",
  completedDate: null,
  description: "Плановое техническое обслуживание экскаватора согласно регламенту производителя",
  location: "г. Москва, ул. Промышленная, 15",
  manager: {
    name: "Петров Александр Иванович",
    phone: "+7 (495) 123-45-67",
    email: "petrov@promstroymash.ru",
  },
  technician: {
    name: "Сидоров Василий Петрович",
    phone: "+7 (495) 987-65-43",
    specialization: "Гидравлические системы",
  },
  workDetails: [
    "Замена моторного масла и фильтров",
    "Проверка гидравлической системы",
    "Диагностика ходовой части",
    "Проверка системы охлаждения",
    "Калибровка электронных систем",
  ],
  documents: [
    {
      id: 1,
      name: "Акт выполненных работ",
      type: "PDF",
      size: "245 KB",
      date: "2024-01-20",
      url: "#",
    },
    {
      id: 2,
      name: "Протокол диагностики",
      type: "PDF",
      size: "1.2 MB",
      date: "2024-01-20",
      url: "#",
    },
    {
      id: 3,
      name: "Фотоотчет",
      type: "ZIP",
      size: "15.8 MB",
      date: "2024-01-20",
      url: "#",
    },
  ],
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <Clock className="h-4 w-4" />
    case "completed":
      return <CheckCircle className="h-4 w-4" />
    case "cancelled":
      return <XCircle className="h-4 w-4" />
    default:
      return <Settings className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-yellow-500 text-gray-900 border-0"
    case "completed":
      return "bg-green-500 text-white border-0"
    case "cancelled":
      return "bg-red-500 text-white border-0"
    default:
      return "bg-gray-500 text-white border-0"
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "active":
      return "В работе"
    case "completed":
      return "Выполнена"
    case "cancelled":
      return "Отменена"
    default:
      return "Неизвестно"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500 text-white border-0"
    case "medium":
      return "bg-yellow-500 text-gray-900 border-0"
    case "low":
      return "bg-green-500 text-white border-0"
    default:
      return "bg-gray-500 text-white border-0"
  }
}

const getPriorityText = (priority: string) => {
  switch (priority) {
    case "high":
      return "Высокий"
    case "medium":
      return "Средний"
    case "low":
      return "Низкий"
    default:
      return "Обычный"
  }
}

export default function ServiceRequestDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab) {
      setActiveTab(tab)
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
    router.replace(url.pathname + url.search, { scroll: false })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Хедер */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/dashboard/service-requests">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад к заявкам
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Заявка {serviceRequest.id}</h1>
              <p className="text-lg text-gray-600">{serviceRequest.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={`${getStatusColor(serviceRequest.status)} font-medium`}>
              {getStatusIcon(serviceRequest.status)}
              <span className="ml-2">{getStatusText(serviceRequest.status)}</span>
            </Badge>
            <Badge className={`${getPriorityColor(serviceRequest.priority)} font-medium`}>
              <AlertTriangle className="h-4 w-4 mr-2" />
              {getPriorityText(serviceRequest.priority)}
            </Badge>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка - основная информация */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 data-[state=active]:border-red-200"
                >
                  Обзор
                </TabsTrigger>
                <TabsTrigger
                  value="status"
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
                  Контакты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <Wrench className="h-6 w-6 text-red-600" />
                      Информация о заявке
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <Settings className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Оборудование:</span>
                        <span className="font-semibold text-gray-900">{serviceRequest.equipment}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Серийный номер:</span>
                        <span className="font-semibold text-gray-900">{serviceRequest.serialNumber}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Дата создания:</span>
                        <span className="font-semibold text-gray-900">
                          {new Date(serviceRequest.createdDate).toLocaleDateString("ru-RU")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Запланировано:</span>
                        <span className="font-semibold text-gray-900">
                          {new Date(serviceRequest.scheduledDate).toLocaleDateString("ru-RU")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Адрес:</span>
                        <span className="font-semibold text-gray-900">{serviceRequest.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600 font-medium">Техник:</span>
                        <span className="font-semibold text-gray-900">{serviceRequest.technician.name}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Описание работ:</h4>
                      <p className="text-gray-700 leading-relaxed">{serviceRequest.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Планируемые работы:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {serviceRequest.workDetails.map((work, index) => (
                          <li key={index} className="leading-relaxed">
                            {work}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="status" className="space-y-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <Clock className="h-6 w-6 text-red-600" />
                      Статус выполнения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Заявка создана</p>
                          <p className="text-sm text-gray-600">15 января 2024, 10:30</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Назначен техник</p>
                          <p className="text-sm text-gray-600">15 января 2024, 14:20</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <Clock className="h-6 w-6 text-yellow-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Выполняется</p>
                          <p className="text-sm text-gray-600">20 января 2024, 09:00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                        <Clock className="h-6 w-6 text-gray-400" />
                        <div>
                          <p className="font-semibold text-gray-900">Завершение работ</p>
                          <p className="text-sm text-gray-600">Ожидается</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <FileText className="h-6 w-6 text-red-600" />
                      Документы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {serviceRequest.documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{doc.name}</p>
                              <p className="text-sm text-gray-600">
                                {doc.type} • {doc.size} • {new Date(doc.date).toLocaleDateString("ru-RU")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">
                              <Eye className="h-4 w-4 mr-2" />
                              Просмотр
                            </Button>
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">
                              <Download className="h-4 w-4 mr-2" />
                              Скачать
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="manager" className="space-y-6">
                <div className="grid gap-6">
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="border-b border-gray-200">
                      <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <User className="h-6 w-6 text-red-600" />
                        Менеджер проекта
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-lg">
                            {serviceRequest.manager.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{serviceRequest.manager.name}</h3>
                          <p className="text-gray-600 text-lg">Менеджер сервисного обслуживания</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-red-600" />
                          <span className="font-medium text-gray-700">{serviceRequest.manager.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-red-600" />
                          <span className="font-medium text-gray-700">{serviceRequest.manager.email}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium">
                          <Phone className="h-4 w-4 mr-2" />
                          Позвонить
                        </Button>
                        <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">
                          <Mail className="h-4 w-4 mr-2" />
                          Написать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="border-b border-gray-200">
                      <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <Wrench className="h-6 w-6 text-red-600" />
                        Техник
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-lg">
                            {serviceRequest.technician.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{serviceRequest.technician.name}</h3>
                          <p className="text-gray-600 text-lg">{serviceRequest.technician.specialization}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-red-600" />
                          <span className="font-medium text-gray-700">{serviceRequest.technician.phone}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium">
                        <Phone className="h-4 w-4 mr-2" />
                        Связаться с техником
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Правая колонка - дополнительная информация */}
          <div className="space-y-6">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-900">Приоритет заявки</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Badge
                  className={`${getPriorityColor(serviceRequest.priority)} w-full justify-center py-3 text-base font-medium`}
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {getPriorityText(serviceRequest.priority)}
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-semibold text-gray-900">Адрес выполнения</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{serviceRequest.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

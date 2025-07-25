"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Settings,
  Package,
  User,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Mock data
const serviceTypes = [
  {
    id: "maintenance",
    name: "Плановое ТО",
    description: "Регулярное техническое обслуживание оборудования",
    duration: "2-4 часа",
    icon: Settings,
  },
  {
    id: "repair",
    name: "Ремонт",
    description: "Устранение неисправностей и замена деталей",
    duration: "4-8 часов",
    icon: Settings,
  },
  {
    id: "diagnostics",
    name: "Диагностика",
    description: "Комплексная проверка состояния оборудования",
    duration: "1-2 часа",
    icon: Settings,
  },
  {
    id: "modernization",
    name: "Модернизация",
    description: "Обновление и улучшение характеристик оборудования",
    duration: "1-3 дня",
    icon: Package,
  },
]

const equipmentList = [
  {
    id: "psm-1500-001",
    model: "ПСМ-1500 CNC",
    serialNumber: "PSM-1500-2023-001",
    category: "Токарные станки",
    status: "Активен",
    lastService: "2023-12-15",
  },
  {
    id: "psm-2000-008",
    model: "ПСМ-2000 VMC",
    serialNumber: "PSM-2000-2023-008",
    category: "Фрезерные станки",
    status: "Активен",
    lastService: "2023-11-20",
  },
  {
    id: "psm-800-003",
    model: "ПСМ-800 Drill",
    serialNumber: "PSM-800-2021-003",
    category: "Сверлильные станки",
    status: "Требует ТО",
    lastService: "2023-08-10",
  },
  {
    id: "psm-1200-015",
    model: "ПСМ-1200 Lathe",
    serialNumber: "PSM-1200-2022-015",
    category: "Токарные станки",
    status: "Активен",
    lastService: "2024-01-05",
  },
]

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedEquipment, setSelectedEquipment] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  })

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const today = new Date()
  const currentYear = currentMonth.getFullYear()
  const currentMonthIndex = currentMonth.getMonth()

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const days = getDaysInMonth(currentMonth)
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]

  const isDateAvailable = (date: Date) => {
    if (!date) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6 // Exclude weekends
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU")
  }

  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(formatDate(date))
    }
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex - 1, 1))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService && selectedEquipment
      case 2:
        return selectedDate && selectedTime
      case 3:
        return contactInfo.name && contactInfo.phone && contactInfo.email
      default:
        return false
    }
  }

  const handleSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      service: selectedService,
      equipment: selectedEquipment,
      date: selectedDate,
      time: selectedTime,
      contact: contactInfo,
    })
    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  const steps = [
    {
      number: 1,
      title: "Выбор услуги",
      description: "Выберите тип услуги и оборудование",
      icon: Settings,
      isActive: currentStep === 1,
      isCompleted: currentStep > 1,
    },
    {
      number: 2,
      title: "Дата и время",
      description: "Выберите удобную дату и время",
      icon: Calendar,
      isActive: currentStep === 2,
      isCompleted: currentStep > 2,
    },
    {
      number: 3,
      title: "Контактные данные",
      description: "Укажите контактную информацию",
      icon: User,
      isActive: currentStep === 3,
      isCompleted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Бронирование сервиса</h1>
          <p className="text-gray-600 mt-2">Запись на техническое обслуживание и ремонт оборудования</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0">
              <div
                className="h-full bg-red-600 transition-all duration-300 ease-in-out"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      step.isCompleted
                        ? "bg-red-600 text-white"
                        : step.isActive
                          ? "bg-red-600 text-white ring-4 ring-red-100"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                    }`}
                  >
                    {step.isCompleted ? <CheckCircle className="w-5 h-5" /> : <IconComponent className="w-5 h-5" />}
                  </div>
                  <div className="mt-3 text-center">
                    <p
                      className={`text-sm font-medium ${step.isActive || step.isCompleted ? "text-gray-900" : "text-gray-500"}`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`text-xs mt-1 ${step.isActive || step.isCompleted ? "text-gray-600" : "text-gray-400"}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Settings className="w-5 h-5 text-red-600" />
                  Выбор услуги и оборудования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Service Type Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block text-gray-900">Тип услуги</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceTypes.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Card
                          key={service.id}
                          className={`cursor-pointer transition-all hover:shadow-md border-gray-200 ${
                            selectedService === service.id ? "ring-2 ring-red-600 bg-red-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-red-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-900">{service.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                                <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">
                                  {service.duration}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                {/* Equipment Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block text-gray-900">Выбор оборудования</Label>
                  <div className="space-y-3">
                    {equipmentList.map((equipment) => (
                      <Card
                        key={equipment.id}
                        className={`cursor-pointer transition-all hover:shadow-md border-gray-200 ${
                          selectedEquipment === equipment.id ? "ring-2 ring-red-600 bg-red-50" : "hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedEquipment(equipment.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-medium text-gray-900">{equipment.model}</h3>
                                <Badge
                                  variant={equipment.status === "Активен" ? "default" : "destructive"}
                                  className={`text-xs ${
                                    equipment.status === "Активен"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {equipment.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600">Серийный номер</p>
                                  <p className="font-medium text-gray-900">{equipment.serialNumber}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Категория</p>
                                  <p className="font-medium text-gray-900">{equipment.category}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Последнее ТО</p>
                                  <p className="font-medium text-gray-900">{equipment.lastService}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date and Time Selection */}
          {currentStep === 2 && (
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Calendar className="w-5 h-5 text-red-600" />
                  Выбор даты и времени
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Calendar */}
                <div>
                  <Label className="text-base font-medium mb-4 block text-gray-900">Выберите дату</Label>
                  <Card className="max-w-md mx-auto border-gray-200">
                    <CardContent className="p-4">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevMonth}
                          className="border-gray-300 hover:bg-gray-50 bg-transparent"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <h3 className="text-lg font-medium text-gray-900">
                          {monthNames[currentMonthIndex]} {currentYear}
                        </h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextMonth}
                          className="border-gray-300 hover:bg-gray-50 bg-transparent"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                          <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {days.map((day, index) => (
                          <div key={index} className="aspect-square">
                            {day && (
                              <button
                                onClick={() => handleDateSelect(day)}
                                disabled={!isDateAvailable(day)}
                                className={`w-full h-full rounded-lg text-sm transition-colors ${
                                  selectedDate === formatDate(day)
                                    ? "bg-red-600 text-white"
                                    : isDateAvailable(day)
                                      ? "hover:bg-red-100 text-gray-900"
                                      : "text-gray-400 cursor-not-allowed"
                                }`}
                              >
                                {day.getDate()}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <Label className="text-base font-medium mb-4 block text-gray-900">Выберите время</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl mx-auto">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${
                            selectedTime === time
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "border-gray-300 hover:bg-gray-50 text-gray-900"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <User className="w-5 h-5 text-red-600" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium">
                      Контактное лицо *
                    </Label>
                    <Input
                      id="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="Введите ФИО"
                      className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-medium">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    placeholder="example@company.ru"
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-gray-900 font-medium">
                    Описание проблемы или пожелания
                  </Label>
                  <Textarea
                    id="description"
                    value={contactInfo.description}
                    onChange={(e) => setContactInfo({ ...contactInfo, description: e.target.value })}
                    placeholder="Опишите проблему или укажите особые требования к обслуживанию..."
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="border-gray-300 hover:bg-gray-50 text-gray-900 bg-transparent"
                >
                  Назад
                </Button>

                {currentStep < 3 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium"
                  >
                    Далее
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

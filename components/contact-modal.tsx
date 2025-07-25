"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Send, CheckCircle, Phone, Mail, Wrench, MessageSquare, Package } from "lucide-react"
import Link from "next/link"

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

interface Service {
  id: string
  title: string
  description: string
}

interface ContactModalProps {
  product?: Product
  service?: Service
  isOpen: boolean
  onClose: () => void
  type: "price" | "consultation" | "service" | "callback" | "contact" | "order" | "service-request"
}

const requestTypes = [
  { value: "price", label: "Запрос цены" },
  { value: "technical", label: "Техническая консультация" },
  { value: "commercial", label: "Коммерческое предложение" },
  { value: "installation", label: "Вопросы по установке" },
  { value: "service", label: "Сервисное обслуживание" },
  { value: "training", label: "Обучение персонала" },
  { value: "design", label: "Проектирование под заказ" },
  { value: "modernization", label: "Модернизация оборудования" },
]

const callbackTimes = [
  { value: "now", label: "Сейчас (в рабочее время)" },
  { value: "morning", label: "Утром (9:00-12:00)" },
  { value: "afternoon", label: "Днем (12:00-15:00)" },
  { value: "evening", label: "Вечером (15:00-18:00)" },
  { value: "tomorrow", label: "Завтра" },
]

export function ContactModal({ product, service, isOpen, onClose, type }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    phone: "",
    email: "",
    requestType: type === "price" ? "price" : type === "service" ? "service" : "",
    quantity: "",
    callbackTime: "",
    message: "",
    agreement: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const modalConfig = {
    price: {
      title: "Запрос цены",
      icon: Phone,
      description: "Заполните форму, и мы подготовим персональное коммерческое предложение",
      successTitle: "Запрос отправлен!",
      successMessage: "Мы получили ваш запрос и подготовим персональное предложение в течение 2 часов.",
      defaultMessage:
        "Укажите необходимое количество, особые требования к оборудованию, условия поставки и другие пожелания",
      showQuantity: true,
      showRequestType: true,
    },
    consultation: {
      title: "Получить консультацию",
      icon: Mail,
      description: "Наш специалист свяжется с вами для подробной консультации",
      successTitle: "Заявка принята!",
      successMessage: "Наш специалист свяжется с вами в течение 30 минут для консультации.",
      defaultMessage: "Опишите ваши вопросы, требования к оборудованию, условия эксплуатации и другие детали",
      showQuantity: false,
      showRequestType: true,
    },
    service: {
      title: "Заказать услугу",
      icon: Wrench,
      description: "Оставьте заявку на услугу, и мы свяжемся с вами для уточнения деталей",
      successTitle: "Заявка на услугу принята!",
      successMessage: "Мы получили вашу заявку и свяжемся с вами в ближайшее время для обсуждения деталей.",
      defaultMessage: "Опишите ваши требования к услуге, объем работ, сроки и другие важные детали",
      showQuantity: false,
      showRequestType: true,
    },
    callback: {
      title: "Заказать звонок",
      icon: Phone,
      description: "Укажите удобное время, и мы вам перезвоним",
      successTitle: "Заявка на звонок принята!",
      successMessage: "Мы перезвоним вам в указанное время.",
      defaultMessage: "Укажите тему для разговора или вопросы, которые хотели бы обсудить",
      showQuantity: false,
      showRequestType: false,
      showCallbackTime: true,
    },
    contact: {
      title: "Написать нам",
      icon: MessageSquare,
      description: "Отправьте нам сообщение, и мы ответим в ближайшее время",
      successTitle: "Сообщение отправлено!",
      successMessage: "Мы получили ваше сообщение и ответим в течение 2 часов.",
      defaultMessage: "Опишите ваш вопрос или предложение подробно",
      showQuantity: false,
      showRequestType: true,
    },
    order: {
      title: "Новый заказ",
      icon: Package,
      description: "Заполните форму, и мы подготовим персональное коммерческое предложение",
      successTitle: "Заказ оформлен!",
      successMessage: "Мы получили ваш заказ и свяжемся с вами в течение 30 минут для уточнения деталей.",
      defaultMessage: "Укажите необходимое оборудование, количество, особые требования и условия поставки",
      showQuantity: true,
      showRequestType: true,
    },
    "service-request": {
      title: "Новая заявка",
      icon: Wrench,
      description: "Оставьте заявку на сервисное обслуживание, и мы свяжемся с вами для уточнения деталей",
      successTitle: "Заявка принята!",
      successMessage: "Мы получили вашу заявку на сервисное обслуживание и свяжемся с вами в ближайшее время.",
      defaultMessage: "Опишите тип требуемого обслуживания, оборудование, проблему или плановые работы",
      showQuantity: false,
      showRequestType: true,
    },
  }

  const config = modalConfig[type]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(`${type} request submitted:`, {
      product: product?.name,
      service: service?.title,
      ...formData,
    })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        company: "",
        position: "",
        phone: "",
        email: "",
        requestType: type === "price" ? "price" : type === "service" ? "service" : "",
        quantity: "",
        callbackTime: "",
        message: "",
        agreement: false,
      })
      onClose()
    }, 3000)
  }

  const getSubjectInfo = () => {
    if (product) {
      return {
        title: type === "price" ? "Запрос цены на:" : "Консультация по:",
        name: product.name,
        category: product.category,
        price: product.price,
      }
    }
    if (service) {
      return {
        title: "Заказ услуги:",
        name: service.title,
        category: "Услуга",
        price: "",
      }
    }
    return null
  }

  const subjectInfo = getSubjectInfo()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl overflow-y-auto bg-white border-gray-200">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <config.icon className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-xl font-semibold text-gray-900">{config.title}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100">
              <X className="w-4 h-4 text-gray-500" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{config.successTitle}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {config.successMessage}
              {subjectInfo && (
                <>
                  <br />
                  <strong className="text-gray-900">
                    {subjectInfo.title} {subjectInfo.name}
                  </strong>
                </>
              )}
            </p>
          </div>
        ) : (
          <div className="pt-2">
            {/* Description */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 text-base leading-relaxed">{config.description}</p>
            </div>

            {/* Subject Info */}
            {subjectInfo && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-red-900 mb-3">{subjectInfo.title}</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white border border-red-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-red-600 font-medium">
                      {product ? "Фото" : service ? "Услуга" : ""}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{subjectInfo.name}</div>
                    <div className="text-sm text-gray-600">{subjectInfo.category}</div>
                    {subjectInfo.price && <div className="text-sm text-red-600 font-medium">{subjectInfo.price}</div>}
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Имя *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Ваше имя"
                    required
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Компания</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Название компании"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              {type !== "callback" && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Должность</label>
                  <Input
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    placeholder="Ваша должность"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Телефон *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email {type === "callback" ? "" : "*"}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required={type !== "callback"}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.showRequestType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Тип обращения</label>
                    <Select
                      value={formData.requestType}
                      onValueChange={(value) => handleInputChange("requestType", value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Выберите тип обращения" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        {requestTypes.map((requestType) => (
                          <SelectItem
                            key={requestType.value}
                            value={requestType.value}
                            className="hover:bg-red-50 focus:bg-red-50"
                          >
                            {requestType.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {config.showQuantity && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Количество</label>
                    <Input
                      value={formData.quantity}
                      onChange={(e) => handleInputChange("quantity", e.target.value)}
                      placeholder="Укажите количество"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                )}

                {config.showCallbackTime && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Удобное время для звонка</label>
                    <Select
                      value={formData.callbackTime}
                      onValueChange={(value) => handleInputChange("callbackTime", value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Выберите удобное время" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        {callbackTimes.map((time) => (
                          <SelectItem key={time.value} value={time.value} className="hover:bg-red-50 focus:bg-red-50">
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {type === "price"
                    ? "Дополнительные требования"
                    : type === "callback"
                      ? "Тема для разговора"
                      : type === "service"
                        ? "Описание требований"
                        : "Сообщение"}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={config.defaultMessage}
                  rows={4}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                  required
                  className="mt-[2px] data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                />
                <label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <Link href="/privacy" className="text-red-600 hover:text-red-700 underline font-medium">
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {type === "price"
                        ? "Отправить запрос"
                        : type === "callback"
                          ? "Заказать звонок"
                          : type === "service"
                            ? "Заказать услугу"
                            : type === "consultation"
                              ? "Получить консультацию"
                              : "Отправить сообщение"}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

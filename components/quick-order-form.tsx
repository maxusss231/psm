"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageSquare } from "lucide-react"

export function QuickOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Быстрый заказ</h2>
            <p className="text-xl text-gray-300 mb-8">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для консультации и расчета стоимости
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Звонок в течение 15 минут</h3>
                  <p className="text-gray-400">Наш менеджер перезвонит вам</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Персональное предложение</h3>
                  <p className="text-gray-400">Подберем оптимальное решение</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Бесплатная консультация</h3>
                  <p className="text-gray-400">Ответим на все ваши вопросы</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Опишите ваши потребности"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                />
                <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

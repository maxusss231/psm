import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, MessageCircle, Facebook, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Контакты ПромСтройМаш - Свяжитесь с нами",
  description:
    "Контактная информация компании ПромСтройМаш. Телефоны, адреса офисов, email для связи. Мы всегда готовы ответить на ваши вопросы о промышленном оборудовании.",
  keywords: "контакты, телефон, адрес, офис, связь, ПромСтройМаш",
}

const offices = [
  {
    id: 1,
    city: "Москва",
    address: "г. Москва, ул. Промышленная, д. 15, стр. 2",
    phone: "+7 (495) 123-45-67",
    email: "moscow@promstroymash.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
    isMain: true,
  },
  {
    id: 2,
    city: "Санкт-Петербург",
    address: "г. Санкт-Петербург, Свердловская наб., 60",
    phone: "+7 (812) 987-65-43",
    email: "spb@promstroymash.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
    isMain: false,
  },
  {
    id: 3,
    city: "Екатеринбург",
    address: "г. Екатеринбург, ул. Сулимова, 46",
    phone: "+7 (343) 555-12-34",
    email: "ekb@promstroymash.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
    isMain: false,
  },
  {
    id: 4,
    city: "Краснодар",
    address: "г. Краснодар, ул. Тополиная, д. 34",
    phone: "+7 (861) 777-88-99",
    email: "krasnodar@promstroymash.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
    isMain: false,
  },
]

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/clx-350-product-picture.webp')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-yellow-100 text-yellow-700 border-yellow-300">
              Связь с нами
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Контакты</h1>
            <p className="text-yellow-400 text-lg mb-4">Центральный офис и региональные представительства</p>
            <p className="text-white text-xl lg:text-2xl max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Наши специалисты готовы ответить на все ваши вопросы о
              промышленном оборудовании и услугах.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Основные контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phone */}
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">ТЕЛЕФОН</p>
                    <a
                      href="tel:+74951234567"
                      className="text-2xl font-bold text-gray-900 hover:text-yellow-600 transition-colors flex items-center gap-3"
                    >
                      <Phone className="w-6 h-6 text-yellow-600" />
                      +7 (495) 123-45-67
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">EMAIL</p>
                    <a
                      href="mailto:info@promstroymash.ru"
                      className="text-xl text-gray-900 hover:text-yellow-600 transition-colors flex items-center gap-3"
                    >
                      <Mail className="w-5 h-5 text-yellow-600" />
                      info@promstroymash.ru
                    </a>
                  </div>

                  {/* Social Media */}
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">СОЦИАЛЬНЫЕ СЕТИ</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Instagram className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">INSTAGRAM</span>
                        <span className="text-gray-900">PromStroyMash</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">YOUTUBE</span>
                        <span className="text-gray-900">PromStroyMash Channel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-600">TELEGRAM</span>
                        <span className="text-gray-900">@PromStroyMash</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-600">WHATSAPP</span>
                        <span className="text-gray-900">+7 917 345 65 24</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-600">VIBER</span>
                        <span className="text-gray-900">+7 917 345 65 24</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Facebook className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-600">FACEBOOK</span>
                        <span className="text-gray-900">PromStroyMash</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Быстрая связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Сообщение" rows={4} />
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Offices and Map */}
            <div className="space-y-8">
              {/* Offices List */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Наши офисы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div key={office.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg text-gray-900">{office.city}</h3>
                          {office.isMain && (
                            <Badge variant="default" className="text-xs bg-yellow-500 text-white">
                              Главный офис
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 flex-shrink-0 text-yellow-600" />
                            <a href={`tel:${office.phone}`} className="hover:text-yellow-600 transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 flex-shrink-0 text-yellow-600" />
                            <a href={`mailto:${office.email}`} className="hover:text-yellow-600 transition-colors">
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 flex-shrink-0 text-yellow-600" />
                            <span>{office.workingHours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Расположение офисов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                      <p className="text-lg font-medium text-gray-900">Интерактивная карта</p>
                      <p className="text-sm">Здесь будет отображена карта с офисами</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How to reach us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Как до нас добраться</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">На автомобиле:</h4>
                      <p>
                        Главный офис находится в 15 минутах от МКАД по Ленинградскому шоссе. Есть собственная парковка.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">На общественном транспорте:</h4>
                      <p>Ближайшая станция метро "Речной вокзал", далее автобус №123 до остановки "Промышленная".</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Время работы:</h4>
                      <p>
                        Понедельник - Пятница: 9:00 - 18:00
                        <br />
                        Суббота, Воскресенье: выходной
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Building2, Factory, Cog, TrendingUp, CheckCircle, Users, Award, Target } from "lucide-react"
import Image from "next/image"
import { ContactModal } from "@/components/contact-modal"

export default function CasesPage() {
  const [showContact, setShowContact] = useState(false)
  const [contactType, setContactType] = useState<"consultation" | "service" | "callback" | "contact">("consultation")

  const handleContactClick = (type: "consultation" | "service" | "callback" | "contact") => {
    setContactType(type)
    setShowContact(true)
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-24 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Background image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/clx-350-product-picture.webp"
              alt="Industrial machinery"
              fill
              className="object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200">
                Успешные проекты
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                НАШИ КЕЙСЫ
                <span className="block text-yellow-400 text-4xl lg:text-5xl mt-2">истории успеха</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Более 500 успешно реализованных проектов для ведущих промышленных предприятий России. Каждый проект —
                это уникальное решение, созданное с учетом специфики производства клиента.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
                  <div className="text-sm text-gray-300">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-sm text-gray-300">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Поддержка</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                  onClick={() => handleContactClick("consultation")}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Обсудить проект
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  onClick={() => handleContactClick("contact")}
                >
                  Скачать портфолио
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gazprom Case - Grid Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Модернизация производства Газпром</h2>
                  <p className="text-gray-600">Комплексное переоснащение механического цеха</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Задача</h3>
                      <p className="text-gray-600">
                        Заменить устаревшее оборудование механического цеха, повысить точность обработки деталей и
                        увеличить производительность в 2 раза при сохранении качества продукции.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Решение</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Установка 12 токарных станков с ЧПУ серии ТВ-4
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Интеграция с существующей системой управления производством
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Обучение персонала работе с новым оборудованием
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Настройка системы удаленного мониторинга
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/clx-350-product-picture.webp"
                    alt="Газпром проект 1"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <Image
                    src="/images/clx-350-product-picture.webp"
                    alt="Газпром проект 2"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <Image
                    src="/images/clx-350-product-picture.webp"
                    alt="Газпром проект 3"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48 col-span-2"
                  />
                </div>
              </div>

              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">+120%</div>
                      <div className="text-sm text-gray-600">Рост производительности</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">-40%</div>
                      <div className="text-sm text-gray-600">Снижение брака</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">8 мес.</div>
                      <div className="text-sm text-gray-600">Срок окупаемости</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NLMK Case - Side by Side */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Автоматизация НЛМК</h2>
                      <p className="text-gray-600">Внедрение роботизированных комплексов</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Вызов</h3>
                      <p className="text-gray-600">
                        Необходимость автоматизации процесса загрузки и выгрузки заготовок для повышения безопасности
                        труда и увеличения скорости производства.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Наше решение</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Установка 6 роботизированных комплексов
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Интеграция с конвейерной системой
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Система контроля качества с машинным зрением
                        </li>
                      </ul>
                    </div>

                    <Card className="bg-white border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-600 mb-1">+85%</div>
                            <div className="text-xs text-gray-600">Скорость обработки</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-600 mb-1">100%</div>
                            <div className="text-xs text-gray-600">Безопасность</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <Image
                    src="/images/clx-350-product-picture.webp"
                    alt="НЛМК проект"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uralmash Case - Side by Side Reverse */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Cog className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Реконструкция Уралмаш</h2>
                      <p className="text-gray-600">Модернизация тяжелого машиностроения</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Масштабная задача</h3>
                      <p className="text-gray-600">
                        Полная модернизация цеха тяжелого машиностроения с заменой оборудования советского периода на
                        современные высокоточные станки.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Комплексный подход</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Поставка 25 единиц тяжелых станков
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Реконструкция производственных площадей
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Обучение 150 специалистов
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          Гарантийное обслуживание 5 лет
                        </li>
                      </ul>
                    </div>

                    <Card className="bg-gray-50 border-0">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-red-600 mb-1">18 мес.</div>
                            <div className="text-xs text-gray-600">Срок реализации</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-red-600 mb-1">+200%</div>
                            <div className="text-xs text-gray-600">Рост мощности</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-red-600 mb-1">₽2.5 млрд</div>
                            <div className="text-xs text-gray-600">Объем проекта</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="lg:order-1">
                  <Image
                    src="/images/clx-350-product-picture.webp"
                    alt="Уралмаш проект"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Results - Bottom Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Общие результаты</h2>
                    <p className="text-gray-600">Достижения за 15 лет работы</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Наши проекты помогли клиентам увеличить производительность, снизить затраты и повысить
                  конкурентоспособность на рынке.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="bg-white border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Довольных клиентов</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">15</div>
                    <div className="text-sm text-gray-600">Отраслевых наград</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <Target className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Проектов в срок</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">₽50 млрд</div>
                    <div className="text-sm text-gray-600">Общий объем проектов</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Image
                  src="/images/clx-350-product-picture.webp"
                  alt="Результат 1"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
                <Image
                  src="/images/clx-350-product-picture.webp"
                  alt="Результат 2"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
                <Image
                  src="/images/clx-350-product-picture.webp"
                  alt="Результат 3"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы реализовать свой проект?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Обсудим ваши задачи и предложим оптимальное решение для вашего производства
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                onClick={() => handleContactClick("consultation")}
              >
                Обсудить проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                onClick={() => handleContactClick("contact")}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} type={contactType} />
    </>
  )
}

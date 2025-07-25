"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, Headphones, Warehouse, Settings, LifeBuoy } from "lucide-react"
import Image from "next/image"
import { ContactModal } from "@/components/contact-modal"

const serviceDetails = [
  {
    id: "support",
    icon: Headphones,
    title: "Минимизация простоев",
    subtitle: "Центр поддержки клиентов",
    description:
      "Опытные инженеры с глубокими знаниями продукции PromStroyMash, включая станки, лазеры, роботы и робототехнические системы, быстро отвечают на вопросы клиентов и запросы на обслуживание.",
    images: [
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
    ],
    layout: "grid",
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Склад запасных частей",
    description:
      "Ключевые сервисные офисы PromStroyMash по всему миру имеют богатый запас деталей. Центры запчастей в Москве и Новосибирске хранят запчасти от старых моделей до самых новых, которые могут быть отправлены в течение 24 часов в день. Наши склады в обоих центрах запчастей хранят детали, которые готовы к доставке по всему миру, чтобы способствовать минимизации простоев наших клиентов.",
    image: "/images/clx-350-product-picture.webp",
    layout: "side-by-side",
  },
  {
    id: "preventive",
    icon: Settings,
    title: "Профилактическое обслуживание",
    description:
      "Мы рекомендуем профилактическое обслуживание для снижения неожиданных отказов и простоев производства. Наши специалисты обнаружат точки дефектов, неисправности и примут меры до того, как отказ приведет к поломке. Машина может использоваться в течение длительного и стабильного времени. PromStroyMash предоставляет поддержку профилактического обслуживания, такую как периодическая проверка, смазка и замена деталей.",
    image: "/images/clx-350-product-picture.webp",
    layout: "side-by-side",
    reverse: true,
  },
  {
    id: "lifetime",
    icon: LifeBuoy,
    title: "Пожизненное обслуживание",
    description:
      "PromStroyMash будет продолжать предоставлять услуги до тех пор, пока клиенты используют продукцию PromStroyMash. У нас есть возможность выполнять более 16 000 типов ремонтов, используя более 470 единиц оборудования. Количество типов ремонта не превышает 2,1 миллиона. PromStroyMash хранит более 2 миллионов запасных частей, состоящих из 17 000 различных типов, включая детали, которые больше не производятся. Знания и опыт, накопленные отделом ремонта PromStroyMash, передаются в отделы разработки продукции.",
    images: [
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
      "/images/clx-350-product-picture.webp",
    ],
    layout: "bottom-grid",
  },
]

export default function ServicesPage() {
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
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0">
            <Image
              src="/images/clx-350-product-picture.webp"
              alt="Сервисное обслуживание"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-yellow-100 text-yellow-700 px-4 py-2 text-sm font-medium">
                Сервисное обслуживание
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Полный спектр
                <span className="block text-yellow-400 text-4xl lg:text-5xl mt-2">сервисных услуг</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
                От проектирования до пожизненного обслуживания — мы обеспечиваем комплексную поддержку вашего
                производства на всех этапах жизненного цикла оборудования
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4"
                onClick={() => handleContactClick("consultation")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>

        {/* Service Details Sections */}
        {serviceDetails.map((detail, index) => (
          <section key={detail.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <detail.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{detail.title}</h2>
                </div>
                {detail.subtitle && <h3 className="text-xl text-gray-600 mb-6">{detail.subtitle}</h3>}
              </div>

              {detail.layout === "grid" && (
                <div className="bg-gray-100 p-10 rounded-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {detail.images?.map((image, idx) => (
                      <div key={idx} className="aspect-square relative rounded-xl overflow-hidden bg-white shadow-sm">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${detail.title} ${idx + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">{detail.description}</p>
                </div>
              )}

              {detail.layout === "side-by-side" && (
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${detail.reverse ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={detail.reverse ? "lg:col-start-2" : ""}>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{detail.description}</p>
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4"
                      onClick={() => handleContactClick("service")}
                    >
                      Заказать услугу
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div className={detail.reverse ? "lg:col-start-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                      <Image
                        src={detail.image! || "/placeholder.svg"}
                        alt={detail.title}
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                  </div>
                </div>
              )}

              {detail.layout === "bottom-grid" && (
                <>
                  <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl">{detail.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {detail.images?.map((image, idx) => (
                      <div key={idx} className="aspect-square relative rounded-xl overflow-hidden bg-white shadow-sm">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${detail.title} ${idx + 1}`}
                          fill
                          className="object-contain p-3"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Готовы начать сотрудничество?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами для получения персонального предложения и консультации специалиста по сервисному
              обслуживанию
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4"
                onClick={() => handleContactClick("callback")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Заказать звонок
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4"
                onClick={() => handleContactClick("contact")}
              >
                Написать нам
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

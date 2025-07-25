import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  Users,
  Award,
  Globe,
  Download,
  Play,
  ArrowRight,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Factory,
    number: "25+",
    label: "лет на рынке",
    description: "Опыт и экспертиза",
  },
  {
    icon: Users,
    number: "200+",
    label: "сотрудников",
    description: "Профессиональная команда",
  },
  {
    icon: Award,
    number: "50+",
    label: "наград и сертификатов",
    description: "Признание качества",
  },
  {
    icon: Globe,
    number: "15",
    label: "стран-партнеров",
    description: "Международное сотрудничество",
  },
]

const technologies = [
  {
    name: "Токарная обработка",
    icon: "/placeholder.svg?height=80&width=80",
    description: "Высокоточные токарные станки с ЧПУ для сложных деталей",
    applications: ["Автомобил��строение", "Авиация", "Энергетика"],
  },
  {
    name: "Фрезерная обработка",
    icon: "/placeholder.svg?height=80&width=80",
    description: "Многоосевые фрезерные центры для комплексной обработки",
    applications: ["Машиностроение", "Медицина", "Аэрокосмос"],
  },
  {
    name: "Лазерные технологии",
    icon: "/placeholder.svg?height=80&width=80",
    description: "Лазерная резка и сварка с высокой точностью",
    applications: ["Металлургия", "Судостроение", "Приборостроение"],
  },
  {
    name: "Автоматизация",
    icon: "/placeholder.svg?height=80&width=80",
    description: "Роботизированные комплексы и автоматические линии",
    applications: ["Серийное производство", "Гибкие системы", "Industry 4.0"],
  },
]

const certificates = [
  {
    name: "ISO 9001:2015",
    description: "Система менеджмента качества",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    name: "ГОСТ Р ИСО 9001-2015",
    description: "Российский стандарт качества",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    name: "ТР ТС 010/2011",
    description: "Технический регламент безопасности машин",
    image: "/placeholder.svg?height=200&width=150",
  },
]

const aboutCards = [
  {
    title: "Медиа-центр",
    description: "Новости, пресс-релизы и медиа-материалы о развитии компании",
    image: "/placeholder.svg?height=200&width=300",
    link: "/blog",
    color: "from-yellow-600 to-yellow-800",
  },
  {
    title: "Карьера в ПромСтройМаш",
    description: "Присоединяйтесь к нашей команде профессионалов и развивайтесь с нами",
    image: "/placeholder.svg?height=200&width=300",
    link: "/contacts",
    color: "from-red-600 to-red-800",
  },
  {
    title: "Устойчивое развитие",
    description: "Наша ответственность перед будущими поколениями и экологией",
    image: "/placeholder.svg?height=200&width=300",
    link: "/about",
    color: "from-gray-600 to-gray-800",
  },
]

const milestones = [
  {
    year: "1998",
    title: "Основание компании",
    description: "Создание ПромСтройМаш как семейного предприятия",
  },
  {
    year: "2005",
    title: "Первый крупный контракт",
    description: "Поставка оборудования для Газпрома",
  },
  {
    year: "2010",
    title: "Сертификация ISO 9001",
    description: "Получение международного сертификата качества",
  },
  {
    year: "2015",
    title: "Расширение производства",
    description: "Открытие нового цеха площадью 5000 м²",
  },
  {
    year: "2020",
    title: "Цифровизация",
    description: "Внедрение систем Industry 4.0",
  },
  {
    year: "2024",
    title: "1000+ клиентов",
    description: "Достижение отметки в 1000 довольных клиентов",
  },
]

const values = [
  {
    icon: Target,
    title: "Цель",
    description: "Стать №1 в России по производству станочного оборудования",
    color: "bg-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Видение",
    description: "Технологический лидер с мировым признанием",
    color: "bg-red-500",
  },
  {
    icon: Shield,
    title: "Принципы",
    description: "Честность, надежность, профессионализм",
    color: "bg-gray-500",
  },
  {
    icon: Users,
    title: "Команда",
    description: "Единая команда профессионалов",
    color: "bg-yellow-600",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Facility Image */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/images/clx-350-product-picture.webp"
            alt="Производственный комплекс ПромСтройМаш"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-yellow-100 text-yellow-700 px-4 py-2 text-sm font-medium">О компании</Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              ПромСтройМаш
              <span className="block text-yellow-400 text-4xl lg:text-5xl mt-2">Российские технологии</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              Ведущий российский производитель промышленного оборудования с 25-летним опытом создания инновационных
              решений для металлообработки и автоматизации производства
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8 py-4">
                Наша история
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 bg-transparent"
              >
                Скачать презентацию
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              Оптимальные производственные решения для
              <span className="block text-yellow-600">широкого спектра применений</span>
            </h2>
            <div className="text-lg lg:text-xl text-gray-600 space-y-8 leading-relaxed">
              <p>
                ПромСтройМаш является одним из ведущих российских поставщиков производственных систем, которые
                охватывают весь технологический процесс: от токарной обработки до лазерной резки и автоматизации. Доступ
                к широкому спектру технологий позволяет нам предлагать комплексные решения для металлообработки и
                цифровизации производства.
              </p>
              <p>
                Компания, базирующаяся в России и работающая с партнерами по всему миру, опирается на коллективные
                знания и многолетний опыт, предлагая модульные и индивидуальные производственные системы мирового класса
                для обеспечения технологической независимости российской промышленности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-10 h-10 text-yellow-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Наши технологии и решения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр современных технологий металлообработки и автоматизации для различных отраслей
              промышленности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, appIndex) => (
                          <Badge
                            key={appIndex}
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-30"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Философия ПромСтройМаш"
                  width={500}
                  height={500}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                ЕДИНАЯ <span className="text-yellow-400">ФИЛОСОФИЯ</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  ПромСтройМаш создает единую экосистему для современного российского производства. За последние 25 лет
                  мир кардинально изменился, и сегодня мы можем предложить гораздо больше, чем просто станки и
                  оборудование.
                </p>
                <p>
                  Благодаря постоянным инновациям и развитию, изменения в промышленности создают новые вызовы для
                  отечественных производителей. Наша компания, которая адаптировалась к этим вызовам на протяжении
                  десятилетий, готова к новым задачам импортозамещения.
                </p>
                <p>
                  ЕДИНАЯ ФИЛОСОФИЯ - это наш ответ на основные изменения в российской промышленности. Мы думаем о
                  будущем как о едином технологическом пространстве, где качество, надежность и инновации идут рука об
                  руку.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Качество превыше всего",
                  "Инновации и развитие",
                  "Ответственность перед клиентами",
                  "Поддержка отечественной промышленности",
                ].map((principle, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg">{principle}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8 py-4 text-lg">
                Подробнее о нашей философии
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">История развития</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Путь от небольшой мастерской до ведущего производителя промышленного оборудования в России
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center w-full">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <Card
                    className={`w-full md:w-[calc(50%-3rem)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? "ml-[calc(50%+3rem)]" : "mr-[calc(50%+3rem)]"
                    }`}
                  >
                    <CardContent className="p-8">
                      <div className="text-3xl font-bold text-yellow-600 mb-3">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которые определяют нашу работу и отношения с клиентами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Video Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/clx-350-product-picture.webp"
                alt="Производственные мощности ПромСтройМаш"
                width={1000}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                <div className="text-center text-white">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm px-8 py-4 text-lg"
                  >
                    <Play className="w-8 h-8 mr-3" />
                    Виртуальная экскурсия по заводу
                  </Button>
                  <p className="mt-4 text-lg text-white/80">Познакомьтесь с нашими производственными мощностями</p>
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <Badge className="bg-yellow-500 text-gray-900 px-4 py-2">Технологии будущего</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Сертификаты и награды</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наше качество подтверждено международными и российскими сертификатами соответствия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    width={150}
                    height={200}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardTitle className="text-xl mb-3 text-gray-900">{cert.name}</CardTitle>
                  <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Скачать сертификат
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Больше о компании <span className="text-yellow-600">ПромСтройМаш</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Узнайте больше о нашей деятельности, карьерных возможностях и подходе к устойчивому развитию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white"
              >
                <div className="relative h-56">
                  <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{card.description}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white py-3"
                    asChild
                  >
                    <a href={card.link}>
                      Узнать больше
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

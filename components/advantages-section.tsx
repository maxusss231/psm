import { Shield, Wrench, Clock, Award, Users, Truck } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Надежность",
    description: "Гарантия качества на все оборудование до 3 лет",
  },
  {
    icon: Wrench,
    title: "Сервис",
    description: "Полный цикл обслуживания и ремонта оборудования",
  },
  {
    icon: Clock,
    title: "Скорость",
    description: "Быстрая поставка и ввод в эксплуатацию",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Сертифицированное оборудование по ГОСТ и ISO",
  },
  {
    icon: Users,
    title: "Опыт",
    description: "Команда экспертов с многолетним опытом",
  },
  {
    icon: Truck,
    title: "Логистика",
    description: "Доставка по всей России и странам СНГ",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем комплексные решения для промышленных предприятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <advantage.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, UserCheck, FileText, Phone, ClipboardList } from "lucide-react" // Added ClipboardList

const sections = [
  {
    id: "general",
    title: "1. Общие положения",
    icon: FileText,
    content: [
      "Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сайт ПромСтройМаш, расположенный на доменном имени promstroymash.ru может получить о Пользователе во время использования сайта.",
      "Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой конфиденциальности и указанными в ней условиями обработки его персональной информации.",
      "В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.",
    ],
  },
  {
    id: "data-collection",
    title: "2. Сбор персональных данных",
    icon: UserCheck,
    content: [
      "Персональная информация Пользователя собирается через:",
      "• Формы обратной связи на сайте",
      "• Формы заказа консультации",
      "• Формы подписки на новости",
      "• Телефонные звонки",
      "• Электронную почту",
      "Мы собираем только ту информацию, которая необходима для предоставления наших услуг и улучшения качества обслуживания.",
    ],
  },
  {
    id: "data-types",
    title: "3. Виды персональных данных",
    icon: Eye,
    content: [
      "Сайт собирает следующие виды персональных данных:",
      "• Имя и фамилия",
      "• Контактный телефон",
      "• Адрес электронной почты",
      "• Название организации",
      "• Должность",
      "• Техническая информация (IP-адрес, тип браузера, время посещения)",
      "Мы не собираем специальные категории персональных данных без явного согласия пользователя.",
    ],
  },
  {
    id: "data-usage",
    title: "4. Цели обработки данных",
    icon: Lock,
    content: [
      "Персональные данные используются для:",
      "• Связи с клиентами и предоставления консультаций",
      "• Обработки заявок и запросов",
      "• Отправки коммерческих предложений",
      "• Информирования о новых продуктах и услугах",
      "• Улучшения качества обслуживания",
      "• Выполнения договорных обязательств",
      "• Соблюдения требований законодательства",
    ],
  },
  {
    id: "data-protection",
    title: "5. Защита персональных данных",
    icon: Shield,
    content: [
      "Компания принимает необходимые организационные и технические меры для защиты персональной информации:",
      "• Шифрование данных при передаче",
      "• Ограничение доступа к персональным данным",
      "• Регулярное обновление систем безопасности",
      "• Обучение сотрудников правилам обраб����тки персональных данных",
      "• Контроль за соблюдением требований безопасности",
    ],
  },
  {
    id: "user-rights",
    title: "6. Права субъекта персональных данных",
    icon: UserCheck,
    content: [
      "Пользователь имеет право:",
      "• Получать информацию об обработке своих персональных данных",
      "• Требовать уточнения, блокирования или уничтожения персональных данных",
      "• Отзывать согласие на обработку персональных данных",
      "• Обращаться в уполномоченный орган по защите прав субъектов персональных данных",
      "• Защищать свои права и законные интересы в судебном порядке",
    ],
  },
  {
    id: "terms-of-use", // New section ID
    title: "7. Условия использования", // New section title
    icon: ClipboardList, // New icon
    content: [
      "Настоящие Условия использования регулируют порядок использования веб-сайта promstroymash.ru (далее – Сайт). Используя Сайт, вы соглашаетесь с настоящими Условиями.",
      "Все материалы, размещенные на Сайте, включая тексты, графические изображения, логотипы, являются собственностью ПромСтройМаш или его лицензиаров и защищены законодательством об интеллектуальной собственности.",
      "Пользователь обязуется использовать Сайт исключительно в законных целях, не нарушая права третьих лиц и действующее законодательство Российской Федерации.",
      "ПромСтройМаш не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования Сайта.",
      "ПромСтройМаш оставляет за собой право вносить изменения в настоящие Условия использования в любое время без предварительного уведомления. Продолжение использования Сайта после внесения изменений означает ваше согласие с обновленными Условиями.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div id="top" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Правовая информация</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Политика конфиденциальности
              <span className="block text-blue-200 text-2xl lg:text-3xl mt-2">персональных данных</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Мы серьезно относимся к защите ваших персональных данных и соблюдаем все требования российского
              законодательства
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span>Дата последнего обновления: 15 января 2024</span>
              <span>•</span>
              <span>Версия: 2.1</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Содержание
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <section.icon className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm font-medium">{section.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.id} id={section.id}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <section.icon className="w-6 h-6 mr-3 text-blue-600" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Additional Information (Contact Info) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                8. Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="mb-4 text-gray-700">
                  По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Почтовый адрес:</h4>
                      <p className="text-gray-700">123456, Москва, ул. Промышленная, д. 15</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Электронная почта:</h4>
                      <p className="text-gray-700">privacy@promstroymash.ru</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Телефон:</h4>
                      <p className="text-gray-700">+7 (495) 123-45-67</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Время работы:</h4>
                      <p className="text-gray-700">Пн-Пт: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  Настоящая Политика конфиденциальности может быть изменена нами в любое время без предварительного
                  уведомления. Новая редакция Политики вступает в силу с момента ее размещения на сайте.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <a
            href="#top"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Вернуться к началу
          </a>
        </div>
      </div>
    </div>
  )
}

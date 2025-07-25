import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ПСМ</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ПромСтройМаш</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ведущий российский производитель промышленного оборудования. Более 25 лет опыта в создании качественных
              решений для машиностроения.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">+7 (495) 123-45-67</div>
                  <div className="text-sm text-gray-500">Звонок бесплатный</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">info@promstroymash.ru</div>
                  <div className="text-sm text-gray-500">Ответим в течение часа</div>
                </div>
              </div>
            </div>
          </div>

          {/* Products & Catalog */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Каталог оборудования</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Токарные станки</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Фрезерные станки</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Сверлильные станки</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Шлифовальные станки</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Станки с ЧПУ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Запчасти</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Услуги и компания</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Услуги и сервис</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">О компании</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Кейсы и проекты</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Блог и новости</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Контакты</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="group flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Личный кабинет</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Головной офис</div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      123456, Москва,
                      <br />
                      ул. Промышленная, д. 15
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Режим работы</div>
                    <div className="text-gray-600 text-sm">
                      <div>Пн-Пт: 9:00-18:00</div>
                      <div>Сб-Вс: выходной</div>
                      <div className="text-red-600 font-medium mt-1">Техподдержка: 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="text-center">
                  <div className="text-sm text-red-600 font-medium mb-2">Нужна консультация?</div>
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="text-gray-500">
              <div className="mb-2">© {new Date().getFullYear()} ООО "ПромСтройМаш". Все права защищены.</div>
              <div className="text-sm">Лицензия на производство промышленного оборудования № 12345 от 01.01.2020</div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-red-600 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/privacy#terms-of-use" className="text-gray-500 hover:text-red-600 transition-colors">
                Условия использования
              </Link>
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-red-600 transition-colors">
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Phone, ArrowLeft, Wrench } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Wrench className="w-24 h-24 text-gray-300" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Страница не найдена</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по устаревшей
          ссылке.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              На главную
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="/catalog">
              <Search className="w-5 h-5 mr-2" />
              Каталог оборудования
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="/contacts">
              <Phone className="w-5 h-5 mr-2" />
              Связаться с нами
            </Link>
          </Button>
        </div>

        {/* Popular Pages */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Популярные разделы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/catalog"
                className="flex items-center p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Каталог оборудования</div>
                  <div className="text-sm text-gray-600">Токарные, фрезерные, сверлильные станки</div>
                </div>
              </Link>

              <Link
                href="/services"
                className="flex items-center p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Услуги</div>
                  <div className="text-sm text-gray-600">Проектирование, ПНР, сервис, модернизация</div>
                </div>
              </Link>

              <Link
                href="/about"
                className="flex items-center p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">О компании</div>
                  <div className="text-sm text-gray-600">История, команда, сертификаты</div>
                </div>
              </Link>

              <Link
                href="/cases"
                className="flex items-center p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                  <ArrowLeft className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Кейсы и отзывы</div>
                  <div className="text-sm text-gray-600">Реализованные проекты, отзывы клиентов</div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-gray-500 mt-8">
          Если вы считаете, что это ошибка, пожалуйста,{" "}
          <Link href="/contacts" className="text-blue-600 hover:underline">
            свяжитесь с нами
          </Link>
        </p>
      </div>
    </div>
  )
}

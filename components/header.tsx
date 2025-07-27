"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, User } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [showContact, setShowContact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCallbackClick = () => {
    setShowContact(true)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
        {/* Контейнер для контента хедера с адаптивными отступами, но без ограничения ширины */}
        <div className="w-full px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo_psm.svg" alt="PSM Logo" width={48} height={32} className="h-8 w-auto" priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/catalog" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Каталог
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Услуги
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors">
                О нас
              </Link>
              <Link href="/cases" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Проекты
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Блог
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>info@promstroymash.ru</span>
                </div>
              </div>

              {/* Dashboard Button */}
              <Button variant="ghost" size="sm" asChild className="hidden md:flex">
                <Link href="/dashboard">
                  <User className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                onClick={handleCallbackClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm px-3 py-2"
              >
                Заказать звонок
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Menu className="h-6 w-6 text-gray-700" />
                    <span className="sr-only">Toggle mobile menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0 bg-white border-l border-gray-200">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                      <div className="flex items-center">
                        <Image src="/images/logo.jpeg" alt="PSM Logo" width={48} height={32} className="h-8 w-auto" priority />
                      </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col p-6 space-y-1">
                      <Link
                        href="/"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Главная
                      </Link>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Личный кабинет
                      </Link>
                      <Link
                        href="/catalog"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Каталог
                      </Link>
                      <Link
                        href="/services"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Услуги
                      </Link>
                      <Link
                        href="/about"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        О нас
                      </Link>
                      <Link
                        href="/cases"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Проекты
                      </Link>
                      <Link
                        href="/blog"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Блог
                      </Link>
                      <Link
                        href="/contacts"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors text-base font-medium"
                        onClick={closeMobileMenu}
                      >
                        Контакты
                      </Link>
                    </nav>

                    {/* Contact Info */}
                    <div className="mt-auto p-6 border-t border-gray-200 bg-gray-50">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Phone className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-medium">+7 (495) 123-45-67</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Mail className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-medium">info@promstroymash.ru</span>
                        </div>
                        <Button
                          onClick={() => {
                            handleCallbackClick()
                            closeMobileMenu()
                          }}
                          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 mt-4"
                        >
                          Заказать звонок
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} type="callback" />
    </>
  )
}

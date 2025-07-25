"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, Wrench, Calendar, MessageSquare, User, Menu, X, LogOut, Bell } from "lucide-react"

const navigation = [
  {
    name: "Главная",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Мои заказы",
    href: "/dashboard/orders",
    icon: Package,
  },
  {
    name: "Сервисные заявки",
    href: "/dashboard/service-requests",
    icon: Wrench,
  },
  {
    name: "Бронирование",
    href: "/dashboard/booking",
    icon: Calendar,
  },
  {
    name: "Техподдержка",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    name: "Профиль",
    href: "/dashboard/profile",
    icon: User,
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-end p-2 border-b border-gray-200 lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* User info section moved to top */}
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold text-sm">АП</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Александр Петров</p>
                <p className="text-xs text-gray-600">ОАО «Газпром»</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto min-h-0">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-red-600" : "text-gray-400"}`} />
                    {item.name}
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Exit button at bottom */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              asChild
            >
              <Link href="/">
                <LogOut className="w-4 h-4 mr-2" />
                Выйти
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0 shadow-sm">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

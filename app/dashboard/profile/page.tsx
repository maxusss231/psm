"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Camera,
  Save,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Monitor,
  Smartphone,
  X,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [avatar, setAvatar] = useState<string | null>(null)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
  const [isActiveSessionsOpen, setIsActiveSessionsOpen] = useState(false)

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [profileData, setProfileData] = useState({
    firstName: "Александр",
    lastName: "Петров",
    email: "a.petrov@gazprom.ru",
    phone: "+7 (495) 123-45-67",
    position: "Главный инженер",
    company: "ОАО «Газпром»",
    department: "Отдел технического обслуживания",
    address: "г. Москва, ул. Ленина, д. 123",
    birthDate: "1985-03-15",
    workPhone: "+7 (495) 987-65-43",
    bio: "Опытный инженер с 15-летним стажем работы в области промышленного оборудования и автоматизации производственных процессов.",
  })

  const [notifications, setNotifications] = useState({
    emailOrders: true,
    emailService: true,
    emailNews: false,
    smsOrders: true,
    smsService: false,
    pushNotifications: true,
  })

  // Мок данные для активных сессий
  const activeSessions = [
    {
      id: 1,
      device: "Windows PC",
      browser: "Chrome 120.0",
      location: "Москва, Россия",
      ip: "192.168.1.100",
      lastActivity: "Сейчас",
      current: true,
      icon: Monitor,
    },
    {
      id: 2,
      device: "iPhone 15",
      browser: "Safari Mobile",
      location: "Москва, Россия",
      ip: "192.168.1.101",
      lastActivity: "2 часа назад",
      current: false,
      icon: Smartphone,
    },
    {
      id: 3,
      device: "MacBook Pro",
      browser: "Firefox 121.0",
      location: "Санкт-Петербург, Россия",
      ip: "78.108.123.45",
      lastActivity: "1 день назад",
      current: false,
      icon: Monitor,
    },
  ]

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatar(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    // Здесь будет логика сохранения данных
  }

  const handleChangePassword = () => {
    // Валидация паролей
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Новые пароли не совпадают")
      return
    }
    if (passwordData.newPassword.length < 8) {
      alert("Пароль должен содержать минимум 8 символов")
      return
    }

    // Здесь будет логика смены пароля
    console.log("Смена пароля:", passwordData)
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    setIsChangePasswordOpen(false)
    alert("Пароль успешно изменен")
  }

  const handleTerminateSession = (sessionId: number) => {
    // Здесь будет логика завершения сессии
    console.log("Завершение сессии:", sessionId)
    alert("Сессия завершена")
  }

  const getInitials = () => {
    return `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Профиль</h1>
            <p className="text-gray-600">Управление личными данными и настройками</p>
          </div>
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Отмена
                </Button>
                <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700 text-white font-medium">
                  <Save className="w-4 h-4 mr-2" />
                  Сохранить
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="bg-red-600 hover:bg-red-700 text-white font-medium">
                Редактировать
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Основная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    {avatar ? (
                      <img
                        src={avatar || "/placeholder.svg"}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center border-4 border-gray-100">
                        <span className="text-blue-600 font-semibold text-xl">{getInitials()}</span>
                      </div>
                    )}
                    {isEditing && (
                      <label className="absolute bottom-0 right-0 bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-red-700 transition-colors">
                        <Camera className="w-4 h-4" />
                        <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                      </label>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <p className="text-gray-600">{profileData.position}</p>
                    <Badge variant="secondary" className="mt-2 bg-gray-100 text-gray-700">
                      <Building className="w-3 h-3 mr-1" />
                      {profileData.company}
                    </Badge>
                  </div>
                </div>

                <Separator />

                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{profileData.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{new Date(profileData.birthDate).toLocaleDateString("ru-RU")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  Личные данные
                </CardTitle>
                <CardDescription>Основная информация о пользователе</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Дата рождения</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={profileData.birthDate}
                      onChange={(e) => setProfileData({ ...profileData, birthDate: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workPhone">Рабочий телефон</Label>
                    <Input
                      id="workPhone"
                      value={profileData.workPhone}
                      onChange={(e) => setProfileData({ ...profileData, workPhone: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    disabled={!isEditing}
                    className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">О себе</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    disabled={!isEditing}
                    rows={3}
                    className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Work Information */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Рабочая информация
                </CardTitle>
                <CardDescription>Данные о месте работы и должности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData({ ...profileData, position: e.target.value })}
                      disabled={!isEditing}
                      className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Отдел</Label>
                  <Input
                    id="department"
                    value={profileData.department}
                    onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                    disabled={!isEditing}
                    className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Настройки уведомлений
                </CardTitle>
                <CardDescription>Управление способами получения уведомлений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Email уведомления</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Уведомления о заказах</Label>
                        <p className="text-sm text-gray-600">Получать информацию о статусе заказов</p>
                      </div>
                      <Switch
                        checked={notifications.emailOrders}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailOrders: checked })}
                        disabled={!isEditing}
                        className="data-[state=checked]:bg-red-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Сервисные уведомления</Label>
                        <p className="text-sm text-gray-600">Напоминания о техническом обслуживании</p>
                      </div>
                      <Switch
                        checked={notifications.emailService}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailService: checked })}
                        disabled={!isEditing}
                        className="data-[state=checked]:bg-red-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Новости и акции</Label>
                        <p className="text-sm text-gray-600">Информация о новых продуктах и предложениях</p>
                      </div>
                      <Switch
                        checked={notifications.emailNews}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailNews: checked })}
                        disabled={!isEditing}
                        className="data-[state=checked]:bg-red-600"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">SMS уведомления</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Срочные уведомления о заказах</Label>
                        <p className="text-sm text-gray-600">Критически важная информация</p>
                      </div>
                      <Switch
                        checked={notifications.smsOrders}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, smsOrders: checked })}
                        disabled={!isEditing}
                        className="data-[state=checked]:bg-red-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Напоминания о сервисе</Label>
                        <p className="text-sm text-gray-600">Уведомления о предстоящем ТО</p>
                      </div>
                      <Switch
                        checked={notifications.smsService}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, smsService: checked })}
                        disabled={!isEditing}
                        className="data-[state=checked]:bg-red-600"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Push уведомления</h4>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Браузерные уведомления</Label>
                      <p className="text-sm text-gray-600">Уведомления в браузере при работе с системой</p>
                    </div>
                    <Switch
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                      disabled={!isEditing}
                      className="data-[state=checked]:bg-red-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Безопасность
                </CardTitle>
                <CardDescription>Настройки безопасности аккаунта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-medium">Изменить пароль</h4>
                    <p className="text-sm text-gray-600">Последнее изменение: 15 дней назад</p>
                  </div>
                  <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        Изменить
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Изменить пароль</DialogTitle>
                        <DialogDescription>Введите текущий пароль и новый пароль для изменения</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Текущий пароль</Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showCurrentPassword ? "text" : "password"}
                              value={passwordData.currentPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                              placeholder="Введите текущий пароль"
                              className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">Новый пароль</Label>
                          <div className="relative">
                            <Input
                              id="newPassword"
                              type={showNewPassword ? "text" : "password"}
                              value={passwordData.newPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                              placeholder="Введите новый пароль"
                              className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                              {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Подтвердите новый пароль</Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              value={passwordData.confirmPassword}
                              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                              placeholder="Повторите новый пароль"
                              className="focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsChangePasswordOpen(false)}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Отмена
                        </Button>
                        <Button
                          onClick={handleChangePassword}
                          className="bg-red-600 hover:bg-red-700 text-white font-medium"
                        >
                          Изменить пароль
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-medium">Двухфакторная аутентификация</h4>
                    <p className="text-sm text-gray-600">Дополнительная защита аккаунта</p>
                  </div>
                  <Badge variant="secondary">Не настроена</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-medium">Активные сессии</h4>
                    <p className="text-sm text-gray-600">Управление активными входами в систему</p>
                  </div>
                  <Dialog open={isActiveSessionsOpen} onOpenChange={setIsActiveSessionsOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        Просмотреть
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Активные сессии</DialogTitle>
                        <DialogDescription>
                          Список всех устройств, с которых выполнен вход в ваш аккаунт
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Устройство</TableHead>
                              <TableHead>Местоположение</TableHead>
                              <TableHead>Последняя активность</TableHead>
                              <TableHead className="text-right">Действия</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {activeSessions.map((session) => {
                              const IconComponent = session.icon
                              return (
                                <TableRow key={session.id}>
                                  <TableCell>
                                    <div className="flex items-center gap-3">
                                      <IconComponent className="w-5 h-5 text-gray-400" />
                                      <div>
                                        <div className="font-medium flex items-center gap-2">
                                          {session.device}
                                          {session.current && (
                                            <Badge variant="secondary" className="text-xs">
                                              Текущая
                                            </Badge>
                                          )}
                                        </div>
                                        <div className="text-sm text-gray-600">{session.browser}</div>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div>
                                      <div className="font-medium">{session.location}</div>
                                      <div className="text-sm text-gray-600">{session.ip}</div>
                                    </div>
                                  </TableCell>
                                  <TableCell>{session.lastActivity}</TableCell>
                                  <TableCell className="text-right">
                                    {!session.current && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleTerminateSession(session.id)}
                                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                      >
                                        <X className="w-4 h-4" />
                                      </Button>
                                    )}
                                  </TableCell>
                                </TableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsActiveSessionsOpen(false)}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Закрыть
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

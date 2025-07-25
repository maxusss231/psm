"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Paperclip, Clock, CheckCheck, HelpCircle, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "support" | "bot"
  timestamp: Date
  status?: "sent" | "delivered" | "read"
  attachments?: { name: string; size: string; type: string }[]
  isWelcome?: boolean
  isFAQ?: boolean
  faqOptions?: { id: string; question: string; answer: string }[]
}

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Как заказать запчасти для станка?",
    answer:
      "Для заказа запчастей перейдите в раздел 'Заказы' → 'Новый заказ' и выберите нужные детали из каталога. Укажите модель станка и серийный номер.",
  },
  {
    id: "2",
    question: "Сколько длится гарантийное обслуживание?",
    answer:
      "Гарантийное обслуживание составляет 24 месяца с момента ввода оборудования в эксплуатацию. В течение этого периода все работы выполняются бесплатно.",
  },
  {
    id: "3",
    question: "Как записаться на техническое обслуживание?",
    answer:
      "Записаться на ТО можно через раздел 'Бронирование' в личном кабинете или по телефону +7 (495) 123-45-67. Рекомендуем планировать ТО заранее.",
  },
  {
    id: "4",
    question: "Что делать если станок не включается?",
    answer:
      "Проверьте: 1) Подключение к сети питания 2) Состояние предохранителей 3) Положение аварийной кнопки STOP 4) Блокировки безопасности. Если проблема не решена - обратитесь к специалисту.",
  },
  {
    id: "5",
    question: "Как получить техническую документацию?",
    answer:
      "Техническая документация доступна в разделе 'Документы' вашего личного кабинета. Также можете запросить дополнительные материалы у нашего специалиста.",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Добро пожаловать в техническую поддержку ПромСтройМаш! 👋\n\nЯ помогу вам найти ответы на часто задаваемые вопросы или соединю с нашим специалистом.\n\nВыберите один из вариантов ниже:",
      sender: "bot",
      timestamp: new Date(),
      isWelcome: true,
      isFAQ: true,
      faqOptions: faqData,
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [operatorConnected, setOperatorConnected] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFAQClick = (faq: FAQItem) => {
    // Add user question
    const userMessage: Message = {
      id: Date.now().toString(),
      text: faq.question,
      sender: "user",
      timestamp: new Date(),
      status: "read",
    }

    setMessages((prev) => [...prev, userMessage])

    // Add bot answer after delay
    setTimeout(() => {
      const botAnswer: Message = {
        id: (Date.now() + 1).toString(),
        text:
          faq.answer +
          "\n\nЕсли у вас остались вопросы, выберите другой вопрос из FAQ или нажмите 'Связаться с оператором'.",
        sender: "bot",
        timestamp: new Date(),
        isFAQ: true,
        faqOptions: faqData,
      }
      setMessages((prev) => [...prev, botAnswer])
    }, 1000)
  }

  const handleConnectOperator = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: "Связаться с оператором",
      sender: "user",
      timestamp: new Date(),
      status: "read",
    }

    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setOperatorConnected(true)
        const operatorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Здравствуйте! Меня зовут Анна, я специалист технической поддержки. Опишите, пожалуйста, вашу проблему подробнее, и я помогу её решить.",
          sender: "support",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, operatorMessage])
      }, 2000)
    }, 500)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, message])
    setNewMessage("")

    // Simulate support response if operator is connected
    if (operatorConnected) {
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          const supportMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "Спасибо за информацию. Я изучаю ваш запрос и подготовлю детальный ответ. Это займет несколько минут.",
            sender: "support",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, supportMessage])
        }, 2000)
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Сегодня"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Вчера"
    } else {
      return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Техническая поддержка</h1>
              <p className="text-sm text-gray-600 mt-1">
                {operatorConnected ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Чат с специалистом Анной
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Автоматический помощник
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => {
            const showDate = index === 0 || formatDate(message.timestamp) !== formatDate(messages[index - 1].timestamp)

            return (
              <div key={message.id}>
                {showDate && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {formatDate(message.timestamp)}
                    </span>
                  </div>
                )}

                <div className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {(message.sender === "support" || message.sender === "bot") && (
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback
                        className={
                          message.sender === "bot"
                            ? "bg-yellow-100 text-yellow-700 text-xs font-medium"
                            : "bg-red-100 text-red-700 text-xs font-medium"
                        }
                      >
                        {message.sender === "bot" ? "🤖" : "АН"}
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div className={`max-w-md ${message.sender === "user" ? "order-2" : ""}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-red-600 text-white"
                          : message.sender === "bot"
                            ? "bg-yellow-50 border border-yellow-200 text-gray-900"
                            : "bg-white border border-gray-200 text-gray-900 shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>

                      {message.attachments && (
                        <div className="mt-2 space-y-2">
                          {message.attachments.map((attachment, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-2 p-2 rounded-lg ${
                                message.sender === "user" ? "bg-red-500" : "bg-gray-50"
                              }`}
                            >
                              <Paperclip className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium truncate">{attachment.name}</p>
                                <p className="text-xs opacity-70">{attachment.size}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* FAQ Options */}
                      {message.isFAQ && message.faqOptions && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium text-gray-700 mb-3">Часто задаваемые вопросы:</p>
                          <div className="grid gap-2">
                            {message.faqOptions.map((faq) => (
                              <Button
                                key={faq.id}
                                variant="outline"
                                size="sm"
                                className="justify-start text-left h-auto p-3 bg-white hover:bg-gray-50 border-gray-200 text-gray-900"
                                onClick={() => handleFAQClick(faq)}
                              >
                                <HelpCircle className="w-4 h-4 mr-2 flex-shrink-0 text-red-600" />
                                <span className="text-sm">{faq.question}</span>
                              </Button>
                            ))}
                            <Button
                              variant="default"
                              size="sm"
                              className="justify-start mt-3 bg-red-600 hover:bg-red-700 text-white font-medium"
                              onClick={handleConnectOperator}
                            >
                              <User className="w-4 h-4 mr-2" />
                              Связаться с оператором
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span>{formatTime(message.timestamp)}</span>
                      {message.sender === "user" && message.status && (
                        <div className="flex items-center">
                          {message.status === "sent" && <Clock className="w-3 h-3 ml-1" />}
                          {message.status === "delivered" && <CheckCheck className="w-3 h-3 ml-1" />}
                          {message.status === "read" && <CheckCheck className="w-3 h-3 ml-1 text-red-500" />}
                        </div>
                      )}
                    </div>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback className="bg-gray-100 text-gray-600 text-xs font-medium">ВЫ</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            )
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-red-100 text-red-700 text-xs font-medium">АН</AvatarFallback>
              </Avatar>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0 shadow-sm">
          <div className="flex items-end gap-3 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={operatorConnected ? "Введите сообщение..." : "Выберите вопрос выше или напишите свой..."}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 placeholder:text-gray-500"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="h-12 w-12 rounded-full p-0 bg-red-600 hover:bg-red-700 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <input ref={fileInputRef} type="file" className="hidden" multiple accept="image/*,.pdf,.doc,.docx" />
        </div>
      </div>
    </div>
  )
}

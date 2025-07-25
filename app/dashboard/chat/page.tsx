"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Paperclip, HelpCircle, User, CheckCheck, Clock } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "support" | "bot"
  timestamp: Date
  status?: "sent" | "delivered" | "read"
  attachments?: { name: string; size: string; type: string }[]
  isFAQ?: boolean
  faqOptions?: { id: string; question: string; answer: string }[]
}

const faqData = [
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
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Добро пожаловать в поддержку! 👋\n\nЯ помогу вам найти ответы на часто задаваемые вопросы или соединю с нашим специалистом.\n\nВыберите один из вариантов ниже:",
      sender: "bot",
      timestamp: new Date(),
      isFAQ: true,
      faqOptions: faqData,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [operatorConnected, setOperatorConnected] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Скролл только по сообщениям
  useEffect(() => {
    if (messages.length > 1 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages])

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
    // Симуляция ответа оператора
    if (operatorConnected) {
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              text: "Спасибо за информацию! Мы рассмотрим ваш вопрос и ответим в ближайшее время.",
              sender: "support",
              timestamp: new Date(),
            },
          ])
        }, 1500)
      }, 800)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFAQClick = (faq: typeof faqData[0]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: faq.question,
        sender: "user",
        timestamp: new Date(),
        status: "read",
      },
    ])
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: faq.answer +
            "\n\nЕсли у вас остались вопросы, выберите другой вопрос из FAQ или нажмите 'Связаться с оператором'.",
          sender: "bot",
          timestamp: new Date(),
          isFAQ: true,
          faqOptions: faqData,
        },
      ])
    }, 1000)
  }

  const handleConnectOperator = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: "Связаться с оператором",
        sender: "user",
        timestamp: new Date(),
        status: "read",
      },
    ])
    setTimeout(() => {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setOperatorConnected(true)
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: "Здравствуйте! Меня зовут Анна, я специалист поддержки. Опишите, пожалуйста, вашу проблему подробнее.",
            sender: "support",
            timestamp: new Date(),
          },
        ])
      }, 1200)
    }, 500)
  }

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })

  return (
    <div className="flex flex-col h-full min-h-0 bg-gray-50 text-[15px]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-2 py-2 flex-shrink-0 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">Техническая поддержка</h1>
            <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5">
              {operatorConnected ? (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Чат с оператором
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
      </header>

      {/* Messages */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto px-1 sm:px-3 py-2 space-y-2 min-h-0" style={{ background: "#f8fafc" }}>
          {messages.map((message, idx) => {
            const showDate = idx === 0 ||
              messages[idx].timestamp.toDateString() !== messages[idx - 1].timestamp.toDateString()
            return (
              <div key={message.id}>
                {showDate && (
                  <div className="flex justify-center mb-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {message.timestamp.toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
                    </span>
                  </div>
                )}
                <div className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {(message.sender === "support" || message.sender === "bot") && (
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback className={message.sender === "bot" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}>
                        {message.sender === "bot" ? "🤖" : "АН"}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`max-w-xs sm:max-w-md ${message.sender === "user" ? "order-2" : ""}`}>
                    <div className={`rounded-xl px-3 py-2 text-xs shadow-sm ${
                      message.sender === "user"
                        ? "bg-red-600 text-white"
                        : message.sender === "bot"
                          ? "bg-yellow-50 border border-yellow-200 text-gray-900"
                          : "bg-white border border-gray-200 text-gray-900"
                    }`}>
                      <p className="whitespace-pre-wrap">{message.text}</p>
                      {/* FAQ */}
                      {message.isFAQ && message.faqOptions && (
                        <div className="mt-4 space-y-2">
                          <p className="text-xs font-medium text-gray-700 mb-2">Часто задаваемые вопросы:</p>
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
                    <div className={`flex items-center gap-1 mt-0.5 text-[11px] text-gray-500 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
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
                      <AvatarFallback className="bg-gray-100 text-gray-600">ВЫ</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            )
          })}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-red-100 text-red-700">АН</AvatarFallback>
              </Avatar>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <form
          className="bg-white border-t border-gray-200 px-2 py-2 flex items-end gap-2 shadow-sm sticky bottom-0 z-10 w-full"
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
          autoComplete="off"
        >
          <div className="flex-1">
            <div className="flex items-center gap-1 bg-gray-50 rounded-xl px-2 py-2 border border-gray-200 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500">
              <Input
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={operatorConnected ? "Введите сообщение..." : "Выберите вопрос выше или напишите свой..."}
                className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 placeholder:text-gray-500"
                autoComplete="off"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7 p-0 hover:bg-gray-100"
                onClick={() => fileInputRef.current?.click()}
                tabIndex={-1}
              >
                <Paperclip className="w-4 h-4 text-gray-500" />
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            disabled={!newMessage.trim()}
            className="h-9 w-9 rounded-full p-0 bg-red-600 hover:bg-red-700 text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
          <input ref={fileInputRef} type="file" className="hidden" multiple accept="image/*,.pdf,.doc,.docx" />
        </form>
      </main>
    </div>
  )
}

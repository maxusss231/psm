import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Tag, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const popularArticles = [
  {
    slug: "cnc-machines-future-2024",
    title: "Будущее станков с ЧПУ: тенденции 2024 года",
    readTime: "8 мин",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    slug: "automation-manufacturing-2024",
    title: "Автоматизация производства: новые возможности",
    readTime: "7 мин",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    slug: "digital-transformation-manufacturing",
    title: "Цифровая трансформация в машиностроении",
    readTime: "9 мин",
    image: "/placeholder.svg?height=100&width=150",
  },
]

const popularTags = [
  { name: "ЧПУ", count: 15 },
  { name: "Технологии", count: 12 },
  { name: "Автоматизация", count: 10 },
  { name: "Industry 4.0", count: 8 },
  { name: "Обслуживание", count: 7 },
  { name: "Качество", count: 6 },
  { name: "Инновации", count: 5 },
  { name: "Производство", count: 4 },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            Подписка на новости
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4 text-sm">Получайте новые статьи и экспертные материалы на email</p>
          <div className="space-y-3">
            <Input placeholder="Ваш email" type="email" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Подписаться</Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Отправляем не чаще 1 раза в неделю</p>
        </CardContent>
      </Card>

      {/* Popular Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Популярные статьи
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={article.slug} className="flex gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 mb-1">
                    <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-500">{article.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-blue-600" />
            Популярные теги
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag.name}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              >
                {tag.name} ({tag.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Категории</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Link
              href="/blog?category=technologies"
              className="flex justify-between items-center py-2 hover:text-blue-600 transition-colors"
            >
              <span>Технологии</span>
              <Badge variant="outline">25</Badge>
            </Link>
            <Link
              href="/blog?category=service"
              className="flex justify-between items-center py-2 hover:text-blue-600 transition-colors"
            >
              <span>Сервис</span>
              <Badge variant="outline">18</Badge>
            </Link>
            <Link
              href="/blog?category=production"
              className="flex justify-between items-center py-2 hover:text-blue-600 transition-colors"
            >
              <span>Производство</span>
              <Badge variant="outline">15</Badge>
            </Link>
            <Link
              href="/blog?category=ecology"
              className="flex justify-between items-center py-2 hover:text-blue-600 transition-colors"
            >
              <span>Экология</span>
              <Badge variant="outline">8</Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

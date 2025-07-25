import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Article {
  slug: string
  title: string
  excerpt: string
  author: string
  authorRole: string
  publishedAt: string
  readTime: string
  image: string
  tags: string[]
  category: string
  featured?: boolean
}

interface BlogCardProps {
  article: Article
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden border-0 shadow-md">
      <div className="relative overflow-hidden">
        <Link href={`/blog/${article.slug}`}>
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Date */}
        <div className="text-yellow-600 font-semibold text-sm mb-3">
          {new Date(article.publishedAt).toLocaleDateString("ru-RU")}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-600 transition-colors line-clamp-2 flex-1 text-gray-900">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        {/* Arrow */}
        <div className="flex justify-end">
          <Link href={`/blog/${article.slug}`}>
            <ArrowRight className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

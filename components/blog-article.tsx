import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"

interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  publishedAt: string
  readTime: string
  image: string
  tags: string[]
  category: string
}

interface BlogArticleProps {
  article: Article
}

export function BlogArticle({ article }: BlogArticleProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Новости и медиа
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Новости
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-medium">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            {/* Date */}
            <div className="text-sm font-medium text-gray-600 mb-4">
              {new Date(article.publishedAt).toLocaleDateString("ru-RU")}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight uppercase">
              {article.title}
            </h1>

            {/* Location and Date */}
            <div className="text-gray-600 mb-8">
              <p>
                Москва,{" "}
                {new Date(article.publishedAt).toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Excerpt */}
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              <p>{article.excerpt}</p>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={800}
                height={500}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Content with embedded styling */}
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Back Button */}
          <div className="border-t pt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться к новостям
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}

import { BlogCard } from "@/components/blog-card"

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

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Похожие статьи</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Читайте также другие материалы по теме</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

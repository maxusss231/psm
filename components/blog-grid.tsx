"use client"

import { BlogCard } from "@/components/blog-card"

const articles = [
  {
    slug: "cnc-machines-future-2024",
    title: "Будущее станков с ЧПУ: тенденции 2024 года",
    excerpt:
      "Анализ последних тенденций в развитии станков с числовым программным управлением и их влияние на современное производство.",
    author: "Алексей Петров",
    authorRole: "Главный инженер",
    publishedAt: "2024-01-15",
    readTime: "8 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["ЧПУ", "Технологии", "Производство"],
    category: "Технологии",
    featured: true,
  },
  {
    slug: "automation-benefits-manufacturing",
    title: "Преимущества автоматизации в машиностроении",
    excerpt:
      "Как автоматизация производственных процессов помогает предприятиям повышать эффективность и снижать затраты.",
    author: "Мария Сидорова",
    authorRole: "Технический директор",
    publishedAt: "2024-01-10",
    readTime: "6 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Автоматизация", "Эффективность"],
    category: "Производство",
  },
  {
    slug: "maintenance-industrial-equipment",
    title: "Техническое обслуживание промышленного оборудования",
    excerpt:
      "Лучшие практики технического обслуживания станков и промышленного оборудования для максимальной производительности.",
    author: "Игорь Волков",
    authorRole: "Сервисный инженер",
    publishedAt: "2024-01-05",
    readTime: "10 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Обслуживание", "Надежность"],
    category: "Сервис",
  },
  {
    slug: "digital-transformation-industry",
    title: "Цифровая трансформация промышленности",
    excerpt:
      "Как цифровые технологии меняют лицо современной промышленности и какие возможности это открывает для бизнеса.",
    author: "Елена Козлова",
    authorRole: "Аналитик",
    publishedAt: "2023-12-28",
    readTime: "12 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Цифровизация", "Industry 4.0"],
    category: "Инновации",
  },
  {
    slug: "quality-control-modern-production",
    title: "Контроль качества в современном производстве",
    excerpt: "Современные методы и технологии контроля качества продукции на промышленных предприятиях.",
    author: "Дмитрий Морозов",
    authorRole: "Специалист по качеству",
    publishedAt: "2023-12-20",
    readTime: "7 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Качество", "Контроль"],
    category: "Производство",
  },
  {
    slug: "energy-efficiency-manufacturing",
    title: "Энергоэффективность в машиностроении",
    excerpt: "Способы повышения энергоэффективности производственных процессов и снижения операционных расходов.",
    author: "Анна Федорова",
    authorRole: "Эколог",
    publishedAt: "2023-12-15",
    readTime: "9 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Энергоэффективность", "Экология"],
    category: "Экология",
  },
]

export function BlogGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">НОВОСТИ</h2>
        <p className="text-xl text-gray-600">Последние статьи и новости отрасли</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}

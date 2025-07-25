import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/blog-article"
import { RelatedArticles } from "@/components/related-articles"

// Mock data - in real app this would come from CMS/API
const articles = [
  {
    slug: "cnc-machines-future-2024",
    title: "Будущее станков с ЧПУ: тенденции 2024 года",
    excerpt:
      "Анализируем ключевые тенденции развития станков с числовым программным управлением и их влияние на современное производство.",
    content: `
      <p>Станки с числовым программным управлением (ЧПУ) продолжают эволюционировать, внедряя новые технологии и возможности. В 2024 году мы наблюдаем несколько ключевых тенденций, которые определят будущее этой отрасли.</p>
      
      <h2>Интеграция с IoT и Industry 4.0</h2>
      <p>Современные станки с ЧПУ все больше интегрируются с системами Интернета вещей (IoT), что позволяет:</p>
      <ul>
        <li>Осуществлять удаленный мониторинг состояния оборудования</li>
        <li>Предсказывать необходимость технического обслуживания</li>
        <li>Оптимизировать производственные процессы в режиме реального времени</li>
        <li>Собирать и анализировать данные о производительности</li>
      </ul>
      
      <h2>Искусственный интеллект в управлении</h2>
      <p>ИИ революционизирует способы программирования и управления станками:</p>
      <ul>
        <li>Автоматическая оптимизация траекторий обработки</li>
        <li>Адаптивное управление режимами резания</li>
        <li>Распознавание и предотвращение дефектов в реальном времени</li>
        <li>Самообучающиеся системы управления</li>
      </ul>
      
      <h2>Экологичность и энергоэффективность</h2>
      <p>Растущие требования к экологичности производства стимулируют разработку более энергоэффективных решений:</p>
      <ul>
        <li>Снижение энергопотребления на 20-30%</li>
        <li>Использование экологически чистых СОЖ</li>
        <li>Минимизация отходов производства</li>
        <li>Рециклинг материалов и компонентов</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Будущее станков с ЧПУ связано с интеллектуализацией, экологичностью и интеграцией в цифровые экосистемы производства. Компании, которые адаптируются к этим тенденциям, получат значительные конкурентные преимущества.</p>
    `,
    author: "Михаил Петров",
    authorRole: "Технический директор",
    publishedAt: "2024-01-15",
    readTime: "8 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["ЧПУ", "Технологии", "Industry 4.0", "ИИ"],
    category: "Технологии",
  },
  {
    slug: "maintenance-industrial-equipment",
    title: "Техническое обслуживание промышленного оборудования: лучшие практики",
    excerpt:
      "Рассказываем о современных подходах к техническому обслуживанию промышленного оборудования и методах увеличения срока службы станков.",
    content: `
      <p>Правильное техническое обслуживание промышленного оборудования - ключ к эффективному производству и минимизации простоев. В этой статье мы рассмотрим лучшие практики обслуживания станков.</p>
      
      <h2>Виды технического обслуживания</h2>
      <p>Существует несколько основных подходов к техническому обслуживанию:</p>
      <ul>
        <li><strong>Плановое обслуживание</strong> - регулярные работы по графику</li>
        <li><strong>Предиктивное обслуживание</strong> - на основе анализа данных</li>
        <li><strong>Аварийное обслуживание</strong> - устранение внезапных поломок</li>
      </ul>
      
      <h2>Ключевые принципы эффективного обслуживания</h2>
      <p>Для максимальной эффективности следует придерживаться следующих принципов:</p>
      <ul>
        <li>Регулярность и системность проверок</li>
        <li>Использование оригинальных запчастей</li>
        <li>Ведение детальной документации</li>
        <li>Обучение персонала</li>
      </ul>
    `,
    author: "Елена Сидорова",
    authorRole: "Главный механик",
    publishedAt: "2024-01-10",
    readTime: "6 мин",
    image: "/images/clx-350-product-picture.webp",
    tags: ["Обслуживание", "Ремонт", "Эксплуатация"],
    category: "Сервис",
  },
]

interface BlogArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: "Статья не найдена",
    }
  }

  return {
    title: `${article.title} | Блог ПромСтройМаш`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles.filter((a) => a.slug !== params.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogArticle article={article} />
      <RelatedArticles articles={relatedArticles} />
    </div>
  )
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

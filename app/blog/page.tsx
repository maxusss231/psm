import type { Metadata } from "next"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"

export const metadata: Metadata = {
  title: "Блог ПромСтройМаш - Новости и статьи о промышленном оборудовании",
  description:
    "Актуальные новости, экспертные статьи и полезные материалы о промышленном оборудовании, станках с ЧПУ, автоматизации производства и технологиях машиностроения.",
  keywords: "промышленное оборудование, станки ЧПУ, машиностроение, автоматизация, производство, технологии",
  openGraph: {
    title: "Блог ПромСтройМаш - Экспертные статьи о промышленности",
    description:
      "Читайте актуальные новости и экспертные статьи о промышленном оборудовании, технологиях производства и инновациях в машиностроении.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Блог ПромСтройМаш",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог ПромСтройМаш - Экспертные статьи о промышленности",
    description:
      "Читайте актуальные новости и экспертные статьи о промышленном оборудовании и технологиях производства.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        <BlogGrid />
      </div>
    </div>
  )
}

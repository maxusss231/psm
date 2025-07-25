"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

interface SeriesListItemProps {
  series: {
    id: number
    name: string
    category: string
    image: string
    priceRange: string
    description: string
    isPopular: boolean
    versionsCount: number
    versions: string[]
    baseSpecs: Record<string, string>
  }
}

export function SeriesListItem({ series }: SeriesListItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64 h-48 md:h-auto">
          <Image
            src={series.image || "/placeholder.svg"}
            alt={series.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          {series.isPopular && (
            <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">Популярная серия</Badge>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
            {series.versionsCount} моделей
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between h-full">
            <div className="flex-1 mb-4 md:mb-0 md:mr-6">
              <div className="mb-2">
                <Badge variant="outline" className="text-xs">
                  {series.category}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{series.name}</h3>

              <p className="text-gray-600 mb-4">{series.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Модели в серии:</h4>
                  <div className="flex flex-wrap gap-1">
                    {series.versions.map((version, index) => (
                      <Link key={index} href={`/catalog/${series.id}/${version.toLowerCase().replace("-", "")}`}>
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-blue-100 cursor-pointer transition-colors"
                        >
                          {version}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Основные характеристики:</h4>
                  <div className="space-y-1">
                    {Object.entries(series.baseSpecs).map(([key, value]) => (
                      <div key={key} className="text-sm text-gray-600 flex justify-between">
                        <span>{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:text-right">
              <div className="text-2xl font-bold text-blue-600 mb-4">{series.priceRange}</div>
              <div className="flex flex-col gap-2 md:w-48">
                <Link href={`/catalog/${series.id}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    Обзор серии
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {series.versions.slice(0, 2).map((version, index) => (
                    <Link key={index} href={`/catalog/${series.id}/${version.toLowerCase().replace("-", "")}`}>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                        {version}
                      </Button>
                    </Link>
                  ))}
                </div>
                {series.versions.length > 2 && (
                  <Link href={`/catalog/${series.id}`}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent text-xs">
                      Все модели ({series.versions.length})
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

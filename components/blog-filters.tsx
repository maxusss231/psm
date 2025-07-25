"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

const allTags = [
  "ЧПУ",
  "Технологии",
  "Industry 4.0",
  "ИИ",
  "Обслуживание",
  "Ремонт",
  "Эксплуатация",
  "Автоматизация",
  "Роботы",
  "Производство",
  "Качество",
  "Контроль",
  "Стандарты",
  "Энергоэффективность",
  "Экология",
  "Экономия",
  "Цифровизация",
  "IT",
  "Инновации",
]

const categories = [
  { value: "all", label: "Все категории" },
  { value: "Технологии", label: "Технологии" },
  { value: "Сервис", label: "Сервис" },
  { value: "Производство", label: "Производство" },
  { value: "Экология", label: "Экология" },
]

interface BlogFiltersProps {
  onFilter: (searchTerm: string, selectedTags: string[], selectedCategory: string) => void
}

export function BlogFilters({ onFilter }: BlogFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onFilter(value, selectedTags, selectedCategory)
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]

    setSelectedTags(newTags)
    onFilter(searchTerm, newTags, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilter(searchTerm, selectedTags, category)
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
    setSelectedCategory("all")
    onFilter("", [], "all")
  }

  const hasActiveFilters = searchTerm || selectedTags.length > 0 || selectedCategory !== "all"

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Поиск и фильтры</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Очистить все
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Поиск по статьям..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Теги</label>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && <X className="w-3 h-3 ml-1" />}
              </Badge>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Активные фильтры</label>
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Поиск: "{searchTerm}"
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleSearch("")} />
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="outline" className="flex items-center gap-1">
                  {categories.find((c) => c.value === selectedCategory)?.label}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange("all")} />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

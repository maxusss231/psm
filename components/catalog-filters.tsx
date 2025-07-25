"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const categories = [
  { id: "lathe", name: "Токарно-винторезные станки", count: 1 },
  { id: "press", name: "Кузнечно-прессовое оборудование", count: 1 },
  { id: "milling", name: "Фрезерные станки", count: 1 },
  { id: "drilling", name: "Радиально-сверлильные станки", count: 1 },
  { id: "automation", name: "Автоматизированные линии", count: 1 },
  { id: "mechanization", name: "Средства механизации", count: 1 },
]

const features = [
  { id: "cnc", name: "ЧПУ управление" },
  { id: "auto", name: "Автоматическая подача" },
  { id: "cooling", name: "Система охлаждения" },
  { id: "protection", name: "Защитное ограждение" },
  { id: "digital", name: "Цифровая индикация" },
  { id: "hydraulic", name: "Гидравлический привод" },
]

const powerRanges = [
  { id: "low", name: "До 10 кВт" },
  { id: "medium", name: "10-30 кВт" },
  { id: "high", name: "30-100 кВт" },
  { id: "industrial", name: "Свыше 100 кВт" },
]

export function CatalogFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedPowerRanges, setSelectedPowerRanges] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([500000, 25000000])

  const activeFiltersCount = selectedCategories.length + selectedFeatures.length + selectedPowerRanges.length

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedFeatures([])
    setSelectedPowerRanges([])
    setPriceRange([500000, 25000000])
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Активные фильтры</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Очистить все
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId)
                return (
                  <Badge key={categoryId} variant="secondary" className="flex items-center gap-1">
                    {category?.name}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setSelectedCategories((prev) => prev.filter((id) => id !== categoryId))}
                    />
                  </Badge>
                )
              })}
              {selectedFeatures.map((featureId) => {
                const feature = features.find((f) => f.id === featureId)
                return (
                  <Badge key={featureId} variant="secondary" className="flex items-center gap-1">
                    {feature?.name}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setSelectedFeatures((prev) => prev.filter((id) => id !== featureId))}
                    />
                  </Badge>
                )
              })}
              {selectedPowerRanges.map((powerId) => {
                const power = powerRanges.find((p) => p.id === powerId)
                return (
                  <Badge key={powerId} variant="secondary" className="flex items-center gap-1">
                    {power?.name}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setSelectedPowerRanges((prev) => prev.filter((id) => id !== powerId))}
                    />
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Тип оборудования</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category.id])
                      } else {
                        setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                      }
                    }}
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Power Range */}
      <Card>
        <CardHeader>
          <CardTitle>Мощность</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {powerRanges.map((power) => (
              <div key={power.id} className="flex items-center space-x-2">
                <Checkbox
                  id={power.id}
                  checked={selectedPowerRanges.includes(power.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedPowerRanges([...selectedPowerRanges, power.id])
                    } else {
                      setSelectedPowerRanges(selectedPowerRanges.filter((id) => id !== power.id))
                    }
                  }}
                />
                <label htmlFor={power.id} className="text-sm cursor-pointer">
                  {power.name}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle>Диапазон цен</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={30000000}
              min={400000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRange[0].toLocaleString()} ₽</span>
              <span>{priceRange[1].toLocaleString()} ₽</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Особенности</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={selectedFeatures.includes(feature.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFeatures([...selectedFeatures, feature.id])
                    } else {
                      setSelectedFeatures(selectedFeatures.filter((id) => id !== feature.id))
                    }
                  }}
                />
                <label htmlFor={feature.id} className="text-sm cursor-pointer">
                  {feature.name}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

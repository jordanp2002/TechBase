'use client'

import React, { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const FilterBar: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [budgetFilter, setBudgetFilter] = useState<string | null>(null)

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  }

  const updateBudgetFilter = (value: string) => {
    setBudgetFilter(value)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out">
      <div className="flex flex-wrap gap-2 items-center">
        <FilterDropdown 
          label="Program" 
          options={['Computer Science', 'Engineering', 'Design', 'Business']}
          onSelect={addFilter}
        />
        <FilterDropdown 
          label="Brand" 
          options={['Apple', 'Dell', 'HP', 'Lenovo']}
          onSelect={addFilter}
        />
        <BudgetDropdown onSelect={updateBudgetFilter} />
        <FilterDropdown 
          label="Screen Size" 
          options={['13"', '14"', '15"', '16"', '17"+']}
          onSelect={addFilter}
        />
        <FilterDropdown 
          label="Processor" 
          options={['Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'Apple M1', 'Apple M2']}
          onSelect={addFilter}
        />
        <Button className="ml-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          Apply Filters
        </Button>
      </div>
      {(activeFilters.length > 0 || budgetFilter) && (
        <div className="flex flex-wrap gap-2 mt-3">
          {activeFilters.map(filter => (
            <div key={filter} className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
              {filter}
              <button onClick={() => removeFilter(filter)} className="ml-1 text-blue-600 hover:text-blue-800">
                <X size={14} />
              </button>
            </div>
          ))}
          {budgetFilter && (
            <div className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
              {budgetFilter}
              <button onClick={() => setBudgetFilter(null)} className="ml-1 text-blue-600 hover:text-blue-800">
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const FilterDropdown: React.FC<{ label: string; options: string[]; onSelect: (option: string) => void }> = ({ label, options, onSelect }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
          {label} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-md shadow-lg border border-gray-200 animate-in fade-in-80 slide-in-from-top-1">
        {options.map((option) => (
          <DropdownMenuItem 
            key={option} 
            onClick={() => onSelect(`${label}: ${option}`)}
            className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer focus:bg-blue-50 focus:text-blue-600 outline-none"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const BudgetDropdown: React.FC<{ onSelect: (option: string) => void }> = ({ onSelect }) => {
  const [priceRange, setPriceRange] = useState([1000])
  const [isOpen, setIsOpen] = useState(false)
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    onSelect(`Budget: $${value[0]}`)
  }
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
          Budget: ${priceRange[0]}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 p-4 bg-white rounded-md shadow-lg border border-gray-200"
        align="start"
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Price Range</span>
            <span>${priceRange[0]}</span>
          </div>
          <Slider
            value={priceRange}
            max={5000}
            min={200}
            step={100}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$200</span>
            <span>$5,000</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterBar
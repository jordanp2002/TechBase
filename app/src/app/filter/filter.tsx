'use client'

import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const FilterBar: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <FilterDropdown 
          label="Program" 
          options={['Computer Science', 'Engineering', 'Design', 'Business', 'All Programs']} 
        />
        <FilterDropdown 
          label="Brand" 
          options={['Apple', 'Dell', 'HP', 'Lenovo', 'All Brands']} 
        />
        <BudgetDropdown />
        <FilterDropdown 
          label="Screen Size" 
          options={['13"', '14"', '15"', '16"', '17"+']} 
        />
        <FilterDropdown 
          label="Processor" 
          options={['Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'Apple M1', 'Apple M2']}
        />
        <Button className="px-3 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

const FilterDropdown: React.FC<{ label: string; options: string[] }> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState(label)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="min-w-[140px] inline-flex items-center justify-between px-3 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2">
        <span>{selectedOption}</span>
        <svg 
          className="w-4 h-4 ml-2 opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[200px] bg-white rounded-md shadow-lg border border-gray-100 animate-in fade-in-80 slide-in-from-top-1"
        align="center"
      >
        <DropdownMenuLabel className="px-3 py-2 text-sm font-medium text-gray-500">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-100" />
        {options.map((option) => (
          <DropdownMenuItem 
            key={option} 
            onClick={() => setSelectedOption(option)}
            className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer focus:bg-blue-50 focus:text-blue-600 outline-none"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const BudgetDropdown: React.FC = () => {
  const [priceRange, setPriceRange] = useState([1000])
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="min-w-[140px] inline-flex items-center justify-between px-3 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2">
        <span>Budget: ${priceRange[0]}</span>
        <svg 
          className="w-4 h-4 ml-2 opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[200px] bg-white rounded-md shadow-lg border border-gray-100 p-4"
        align="center"
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Price Range</span>
            <span>${priceRange[0]}</span>
          </div>
          <Slider
            defaultValue={[1000]}
            max={5000}
            min={200}
            step={100}
            onValueChange={setPriceRange}
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

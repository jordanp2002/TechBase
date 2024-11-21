'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Laptop, ShoppingCart, BarChart2 , } from 'lucide-react'
import {  Cpu, CpuIcon as Gpu, MemoryStickIcon as Memory, HardDrive } from 'lucide-react'

interface ProductCardProps {
  image: string
  title: string
  price: string
  cpu: string
  gpu: string
  ram: string
  storage: string
  screenSize: string
  onAddToCart: () => void
  onAddToComparison: () => void
}

export default function ProductCard({
  image,
  title,
  price,
  cpu,
  gpu,
  ram,
  storage,
  screenSize,
  onAddToCart,
  onAddToComparison
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <div className="space-y-2 text-sm">
          <p><Laptop className="inline mr-2" size={16} /> {screenSize} display</p>
          <p><Cpu className="inline mr-2" size={16} /> {cpu}</p>
          <p><Gpu className="inline mr-2" size={16} /> {gpu}</p>
          <p><Memory className="inline mr-2" size={16} /> {ram}</p>
          <p><HardDrive className="inline mr-2" size={16} /> {storage}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Button onClick={onAddToCart} className="flex-1 mr-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2">
          <ShoppingCart className="mr-2" size={16} /> Purchase
        </Button>
        <Button onClick={onAddToComparison} variant="outline" className="flex-1">
          <BarChart2 className="mr-2" size={16} /> Compare
        </Button>
      </CardFooter>
    </Card>
  )
}
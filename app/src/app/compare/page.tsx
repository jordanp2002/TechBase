'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from "@/app/navbar/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Cpu, CpuIcon as Gpu, MemoryStickIcon as Memory, HardDrive, Monitor, Weight, Battery, Usb, MonitorSmartphone } from 'lucide-react'

interface Product {
  id: number
  title: string
  price: string
  image: string
  cpu: string
  gpu: string
  ram: string
  storage: string
  screenSize: string
  weight: string
  battery: string
  ports: string[]
  os: string
}

const ComparisonPage = () => {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([
    {
      id: 1,
      title: 'MacBook Pro 14"',
      price: '$1,999',
      image: '/images/macbook.jpg',
      cpu: 'Apple M2 Pro',
      gpu: 'Integrated 16-core GPU',
      ram: '16GB',
      storage: '512GB SSD',
      screenSize: '14-inch Liquid Retina XDR display',
      weight: '3.5 lbs (1.6 kg)',
      battery: 'Up to 17 hours',
      ports: ['3x Thunderbolt 4', 'HDMI', 'MagSafe 3', 'SD card slot'],
      os: 'macOS',
    },
    {
      id: 2,
      title: 'Dell XPS 15',
      price: '$1,799',
      image: '/images/dell.jpg',
      cpu: 'Intel Core i7-11800H',
      gpu: 'NVIDIA GeForce RTX 3050 Ti',
      ram: '16GB',
      storage: '512GB SSD',
      screenSize: '15.6-inch 4K UHD+ (3840 x 2400) touch display',
      weight: '4.0 lbs (1.8 kg)',
      battery: 'Up to 13 hours',
      ports: ['2x Thunderbolt 4', 'USB-C 3.2', 'SD card reader'],
      os: 'Windows 11',
    },
  ])

  const removeProduct = (id: number) => {
    setComparedProducts(comparedProducts.filter(product => product.id !== id))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Compare Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {comparedProducts.map((product) => (
            <Card key={product.id} className="relative overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10"
                onClick={() => removeProduct(product.id)}
                aria-label={`Remove ${product.title} from comparison`}
              >
                <X className="h-4 w-4" />
              </Button>
              <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="w-full h-[300px] relative">
                    <Image
                      src={product.image}
                      alt={`${product.title} product image`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-3xl font-bold text-blue-600 mb-4">{product.price}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center">
                        <Cpu className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">CPU:</span> {product.cpu}
                      </p>
                      <p className="flex items-center">
                        <Gpu className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">GPU:</span> {product.gpu}
                      </p>
                      <p className="flex items-center">
                        <Memory className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">RAM:</span> {product.ram}
                      </p>
                      <p className="flex items-center">
                        <HardDrive className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">Storage:</span> {product.storage}
                      </p>
                      <p className="flex items-center">
                        <Monitor className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">Screen:</span> {product.screenSize}
                      </p>
                      <p className="flex items-center">
                        <Weight className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">Weight:</span> {product.weight}
                      </p>
                      <p className="flex items-center">
                        <Battery className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">Battery:</span> {product.battery}
                      </p>
                      <p className="flex items-center">
                        <MonitorSmartphone className="mr-2 h-4 w-4 flex-shrink-0" /> 
                        <span className="font-semibold">OS:</span> {product.os}
                      </p>
                      <div className="flex items-start">
                        <Usb className="mr-2 h-4 w-4 mt-1 flex-shrink-0" /> 
                        <div>
                          <span className="font-semibold">Ports:</span>
                          <ul className="list-disc list-inside ml-2">
                            {product.ports.map((port, index) => (
                              <li key={index}>{port}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ComparisonPage
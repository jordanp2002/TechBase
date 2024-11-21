'use client'
import ProductCard from '../product-cards/product-card'

const products = [
  {
    image: '/images/macbook.jpg',
    title: 'MacBook Pro 14"',
    price: '$1,999',
    cpu: 'Apple M2 Pro',
    gpu: 'Integrated 16-core GPU',
    ram: '16GB',
    storage: '512GB SSD',
    screenSize: '14-inch',
  },
  {
    image: '/images/dell.jpg',
    title: 'Dell XPS 15',
    price: '$1,799',
    cpu: 'Intel Core i7-11800H',
    gpu: 'NVIDIA GeForce RTX 3050 Ti',
    ram: '16GB',
    storage: '512GB SSD',
    screenSize: '15.6-inch',
  },
  {
    image: '/images/think1.jpg',
    title: 'Lenovo ThinkPad X1 Carbon',
    price: '$1,499',
    cpu: 'Intel Core i5-1135G7',
    gpu: 'Intel Iris Xe Graphics',
    ram: '16GB',
    storage: '256GB SSD',
    screenSize: '14-inch',
  },
  // Add more products as needed
]

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          onAddToCart={() => console.log('Added to cart:', product.title)}
          onAddToComparison={() => console.log('Added to comparison:', product.title)}
        />
      ))}
    </div>
  )
}

export default ProductList
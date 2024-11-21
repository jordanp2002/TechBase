'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BarChart2 } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">Devicefy</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/compare" className="text-gray-100 hover:bg-blue-700 px-3 py-2 rounded-md transition duration-150 flex items-center">
              <BarChart2 className="mr-2" size={20} />
              Compare
            </Link>
            <Link href="/login" className="text-gray-100 hover:bg-blue-700 px-3 py-2 rounded-md transition duration-150">
              Login
            </Link>
            <Link href="/register" className="text-gray-100 hover:bg-blue-700 px-3 py-2 rounded-md transition duration-150">
              Register
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/compare" className="text-white block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-150 flex items-center">
            <BarChart2 className="mr-2" size={20} />
            Compare
          </Link>
          <Link href="/login" className="text-white block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-150">
            Login
          </Link>
          <Link href="/register" className="text-white block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-150">
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

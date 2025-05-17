import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { ChevronRight, Menu, X, Link } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-700">M-Shamba AI</span>
          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Beta
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-green-700">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-green-700">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-700">
            Testimonials
          </a>
          <a href="/dashboard" className="text-gray-600 hover:text-green-700">
            Dashboard
          </a>
          <Button size="lg" component="a"  href="https://m-shamba-ai-ussd-bxvg.vercel.app/" color="green.7" className="bg-green-700 hover:bg-green-800">
            Get Started
          </Button>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-500 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#features" className="block text-gray-600 hover:text-green-700 py-2">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-green-700 py-2">
              How It Works
            </a>
            <a href="#testimonials" className="block text-gray-600 hover:text-green-700 py-2">
              Testimonials
            </a>
            <Button component="a"  href="https://m-shamba-ai-ussd-bxvg.vercel.app/" fullWidth color="green.7" className="bg-green-700 hover:bg-green-800">
              Get Started
            </Button>
          </div>
        </div>}
    </header>;
}

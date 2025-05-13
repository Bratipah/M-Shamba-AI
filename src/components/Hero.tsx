import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative bg-gradient-to-b from-green-900 to-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591086559393-978e4a7ba5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fair Prices for Kenyan Farmers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              M-Shamba AI connects farmers directly to buyers through a simple
              USSD menu (*483*1#). No smartphone or internet needed - works on
              any basic phone!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="filled" color="yellow" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold" rightSection={<ChevronRight size={16} />}>
                Dial *483*1# to Start
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            <div className="mt-8 text-sm text-green-100 flex items-center justify-center">
              <div className="flex -space-x-2 mr-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-green-700" alt="Farmer" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-green-700" alt="Farmer" />
                <img src="https://randomuser.me/api/portraits/men/59.jpg" className="w-8 h-8 rounded-full border-2 border-green-700" alt="Farmer" />
              </div>
              <span>Join 1,000+ farmers already using M-Shamba AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
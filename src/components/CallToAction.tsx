import React from 'react';
import { Button } from '@mantine/core';
import { Send } from 'lucide-react';
export function CallToAction() {
  return <section className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Kenyan farmers who are already increasing their
            income with M-Shamba AI. Works on any basic phone - no smartphone
            needed!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" variant="filled" color="yellow" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold" rightSection={<Send size={16} />}>
              Dial *483*1# Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call Our Support Team
            </Button>
          </div>
          <div className="text-sm text-green-100">
            <p>*Standard USSD rates apply. Registration is free.</p>
          </div>
        </div>
      </div>
    </section>;
}
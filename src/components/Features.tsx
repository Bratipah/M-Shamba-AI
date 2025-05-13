import React from 'react';
import { Clock, Coins, Shield } from 'lucide-react';
const features = [{
  icon: <div className="w-10 h-10 text-green-600" />,
  title: 'Fair Market Prices',
  description: 'Access real-time market data from the Nairobi Commodity Exchange, ensuring you always get the best possible price for your crops.'
}, {
  icon: <Clock className="w-10 h-10 text-green-600" />,
  title: 'Instant Payments',
  description: 'Receive payments immediately via M-Pesa or USDC cryptocurrency, eliminating delayed payments and debt cycles.'
}, {
  icon: <Coins className="w-10 h-10 text-green-600" />,
  title: 'Reward System',
  description: 'Earn crypto rewards and NFTs for early adoption, bulk sales, and referring other farmers to the platform.'
}, {
  icon: <Shield className="w-10 h-10 text-green-600" />,
  title: 'No Middlemen',
  description: 'Connect directly with buyers, cutting out predatory middlemen who typically take 20-50% of your profits.'
}];
export function Features() {
  return <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Farmers Choose M-Shamba AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform solves the biggest challenges facing Kenyan
            farmers today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}
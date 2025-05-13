import React from 'react';
import { UserPlus, MessageSquare, CreditCard, Trophy } from 'lucide-react';
const steps = [{
  icon: <UserPlus className="w-8 h-8 text-white" />,
  title: '1. Easy Registration',
  description: 'Simply dial *483*1# from any phone. Our system verifies your farm details instantly.'
}, {
  icon: <MessageSquare className="w-8 h-8 text-white" />,
  title: '2. List Your Produce',
  description: 'Follow the USSD menu to list what you want to sell. Get instant market prices.'
}, {
  icon: <CreditCard className="w-8 h-8 text-white" />,
  title: '3. Secure Payments',
  description: 'Accept offers directly through USSD. Receive instant payments via M-Pesa.'
}, {
  icon: <Trophy className="w-8 h-8 text-white" />,
  title: '4. Earn Rewards',
  description: 'Get bonus airtime and M-Pesa rewards for successful sales and referrals.'
}];
export function HowItWorks() {
  return <section id="how-it-works" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How M-Shamba AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple USSD menu helps you sell crops at the best prices with
            any basic phone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => <div key={index} className="relative">
              <div className="bg-green-700 text-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-green-800 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-green-100">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-green-500 z-10"></div>}
            </div>)}
        </div>
        {/* USSD Demo */}
        <div className="mt-16 max-w-[300px] mx-auto">
          <div className="bg-gray-800 p-4 rounded-t-2xl">
            <div className="flex justify-between items-center mb-2">
              <div className="text-white text-xs">Safaricom</div>
              <div className="text-white text-xs">12:00</div>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg">
              <div className="text-sm font-mono space-y-3">
                <p>M-SHAMBA AI</p>
                <p>1. Sell Produce</p>
                <p>2. Check Prices</p>
                <p>3. My Account</p>
                <p>4. Help</p>
                <p className="text-xs mt-4">Reply with number</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-2 rounded-b-2xl">
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => <button key={i} className="bg-gray-600 text-white rounded p-2 text-sm hover:bg-gray-500">
                  {num}
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
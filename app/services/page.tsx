'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, TrendingUp, BarChart3, PieChart, Shield, Users, Clock } from 'lucide-react';

const additionalServices = [
  {
    title: 'Trading Education Course',
    description: 'Comprehensive course covering technical analysis, risk management, and trading psychology',
    price: '$197',
    icon: BarChart3
  },
  {
    title: 'Personal Trading Mentorship',
    description: 'One-on-one mentorship program with experienced trader',
    price: '$150/hour',
    icon: Users
  },
  {
    title: 'Risk Management Consultation',
    description: 'Professional risk assessment and portfolio optimization consultation',
    price: '$250/session',
    icon: Shield
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Trading Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect service package to accelerate your trading success with expert guidance and proven strategies
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Trading Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive trading solutions designed to maximize your investment potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trading Signals',
                description: 'Real-time market analysis with high-probability trade setups',
                icon: BarChart3,
                color: 'bg-emerald-500/10 text-emerald-400'
              },
              {
                title: 'Portfolio Management',
                description: 'Professional portfolio optimization and risk management',
                icon: PieChart,
                color: 'bg-blue-500/10 text-blue-400'
              },
              {
                title: 'Market Analysis',
                description: 'In-depth technical and fundamental market research',
                icon: TrendingUp,
                color: 'bg-purple-500/10 text-purple-400'
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-700/50 rounded-lg">
                      <service.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-900/20 to-green-900/20 py-12 px-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Trading?
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of successful traders who trust our expertise. Start your journey to consistent profitability today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Get Free Consultation
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8">
              View Testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

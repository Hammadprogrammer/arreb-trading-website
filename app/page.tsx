'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3, PieChart, Target, ArrowUpRight, DollarSign, Users, Award } from 'lucide-react';
import Link from 'next/link';
import TradeSetups from './trade-setups/page';

const stats = [
  { label: 'Success Rate', value: '87%', icon: Target, color: 'text-emerald-400' },
  { label: 'Total Returns', value: '+2,340%', icon: TrendingUp, color: 'text-green-400' },
  { label: 'Active Clients', value: '150+', icon: Users, color: 'text-blue-400' },
  { label: 'Years Experience', value: '8+', icon: Award, color: 'text-purple-400' },
];

const services = [
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <TrendingUp className="h-12 w-12 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="text-emerald-400 block">Trading Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Elevate your trading journey with expert analysis, proven strategies, and cutting-edge market insights. 
              Join the ranks of successful traders who trust Areeb Traders for consistent returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trade-setups">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  View Trade Setups
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <TradeSetups/>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join our community of successful traders and start your journey to financial excellence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Explore Services
              </Button>
            </Link>
            <Link href="/weekly-reports">
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                View Reports
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
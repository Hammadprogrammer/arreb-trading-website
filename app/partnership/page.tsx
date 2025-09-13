'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, Globe, Award, Handshake } from 'lucide-react';
import Link from 'next/link';

const partnershipBenefits = [
  {
    title: 'Global Reach',
    description: 'Access to MEXC\'s worldwide trading community',
    icon: Globe,
    color: 'text-blue-400'
  },
  {
    title: 'Advanced Trading Tools',
    description: 'Professional trading platform with advanced features',
    icon: TrendingUp,
    color: 'text-emerald-400'
  },
  {
    title: 'Community Building',
    description: 'Growing and engaging with crypto trading community',
    icon: Users,
    color: 'text-purple-400'
  },
  {
    title: 'Recognition',
    description: 'Official Key Opinion Leader status and recognition',
    icon: Award,
    color: 'text-yellow-400'
  }
];

const mexcFeatures = [
  'Spot Trading with 1,500+ cryptocurrencies',
  'Futures Trading with up to 200x leverage',
  'Copy Trading for automated strategies',
  'Staking and DeFi opportunities',
  'Advanced charting and analysis tools',
  'Mobile app for trading on the go'
];

export default function Partnership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-500/10 rounded-full">
              <Handshake className="h-16 w-16 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
            MEXC Partnership
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Official Key Opinion Leader partnership with MEXC Global - Building trust and growing the crypto community
          </p>
        </div>

        {/* Partnership Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Handshake className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-2xl">Official KOL Partnership</CardTitle>
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white mt-2">
                    Active Since Sep 2025
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-4">
                As an official Key Opinion Leader (KOL) for MEXC Global, I share insights and create engaging content 
                to build trust, grow the community, and connect the exchange with a wider audience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This partnership allows me to provide exclusive trading insights, market analysis, and educational 
                content to help traders make informed decisions in the cryptocurrency market.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border-emerald-700/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl mb-4">About MEXC Global</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-4">
                MEXC Global is one of the world's leading cryptocurrency exchanges, serving millions of users across 
                170+ countries. Known for its comprehensive trading features, security, and innovation.
              </p>
              <div className="space-y-2">
                {mexcFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-full">
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 py-12 px-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Trading with MEXC
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Join millions of traders worldwide and experience professional cryptocurrency trading with MEXC Global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit MEXC Global
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8">
                Contact for Partnership Info
              </Button>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            This partnership is for educational and informational purposes. Trading cryptocurrencies involves substantial 
            risk and may not be suitable for all investors. Please conduct your own research and consider your risk tolerance 
            before trading.
          </p>
        </div>
      </div>
    </div>
  );
}
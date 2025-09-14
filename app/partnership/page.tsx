'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, Globe, Award, Handshake } from 'lucide-react'; // Handshake is still imported for potential use elsewhere, but not as the main logo.
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
            <div className="p-4 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="MEXC Global Logo"
                className="h-16 w-16"
              />
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
                {/* Replaced Handshake icon with MEXC logo */}
                <div className="p-3 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="MEXC Global Logo"
                    className="h-8 w-8"
                  />
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
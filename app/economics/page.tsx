'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, TrendingUp, AlertTriangle, Globe } from 'lucide-react';
import Link from 'next/link'; // <-- Add this import

const economicEvents = [
  {
    id: 1,
    title: 'Federal Reserve Interest Rate Decision',
    time: '14:00 EST',
    date: 'Today',
    currency: 'USD',
    impact: 'High',
    forecast: '5.50%',
    previous: '5.25%',
    description: 'The Federal Reserve announces its monetary policy decision affecting global markets.'
  },
  {
    id: 2,
    title: 'European Central Bank Press Conference',
    time: '08:30 EST',
    date: 'Tomorrow',
    currency: 'EUR',
    impact: 'High',
    forecast: 'N/A',
    previous: 'N/A',
    description: 'ECB President discusses monetary policy and economic outlook for the Eurozone.'
  },
  {
    id: 3,
    title: 'US Non-Farm Payrolls',
    time: '08:30 EST',
    date: 'Jan 25',
    currency: 'USD',
    impact: 'High',
    forecast: '180K',
    previous: '199K',
    description: 'Monthly employment data release showing job creation in the US economy.'
  },
  {
    id: 4,
    title: 'UK GDP Growth Rate',
    time: '07:00 EST',
    date: 'Jan 26',
    currency: 'GBP',
    impact: 'Medium',
    forecast: '0.2%',
    previous: '0.1%',
    description: 'Quarterly economic growth data for the United Kingdom.'
  },
];

const marketAnalysis = [
  {
    title: 'Global Market Sentiment',
    status: 'Risk-On',
    trend: 'Bullish',
    description: 'Markets showing increased appetite for risk assets amid positive economic data.'
  },
  {
    title: 'Currency Strength Meter',
    status: 'USD Dominant',
    trend: 'Strengthening',
    description: 'US Dollar maintains strength against major currencies due to Fed policy expectations.'
  },
  {
    title: 'Volatility Index',
    status: 'Moderate',
    trend: 'Stable',
    description: 'Market volatility remains controlled with occasional spikes during news events.'
  },
];

// Assuming you also have a Button component imported from your UI library
// import { Button } from '@/components/ui/button';

export default function Economics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Economic Calendar & Analysis
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay ahead of market-moving events with our comprehensive economic calendar and expert analysis
          </p>
        </div>

        {/* Market Analysis Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {marketAnalysis.map((analysis, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-emerald-400" />
                  {analysis.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                      {analysis.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Trend:</span>
                    <span className="text-green-400 font-medium">{analysis.trend}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">{analysis.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Economic Events */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Economic Events</h2>

          {economicEvents.map((event) => (
            <Card key={event.id} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={
                          event.impact === 'High' ? 'border-red-500 text-red-400' :
                          event.impact === 'Medium' ? 'border-yellow-500 text-yellow-400' :
                          'border-green-500 text-green-400'
                        }
                      >
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {event.impact} Impact
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-400">
                        {event.currency}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      {event.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <Calendar className="h-4 w-4" />
                      Date
                    </div>
                    <div className="text-white font-medium">{event.date}</div>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <Clock className="h-4 w-4" />
                      Time
                    </div>
                    <div className="text-white font-medium">{event.time}</div>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-gray-400 text-sm mb-1">Forecast</div>
                    <div className="text-emerald-400 font-medium">{event.forecast}</div>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-gray-400 text-sm mb-1">Previous</div>
                    <div className="text-gray-300 font-medium">{event.previous}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Economics & Market Analysis Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Economics & Market Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'The reason for the market pump',
                  description: 'A significant miss like this signals a slowing job market, which increases the likelihood of a more dovish stance from the Fed.',
                  date: '2025-09-05'
                },
                {
                  title: 'NVIDIA earnings Report',
                  description: 'Growth is booming without China.',
                  date: '2025-08-28'
                },
                {
                  title: 'BTC Levels & Trend',
                  description: 'BTC facing resistance? Bitcoin may dip to $110,452?.',
                  date: '2025-08-27'
                },
                {
                  title: 'Biggest Crypto News',
                  description: 'PVARA held its 1st board meeting with FM, SBP, SECP, FBR & PCC.',
                  date: '2025-08-27'
                },
                {
                  title: 'Next Week Market Plan',
                  description: 'Most likely case: A strong pump continue.',
                  date: '2025-08-25'
                },
                {
                  title: 'Bitcoin Market Update',
                  description: 'Deeper dump possible but Longs still play out?',
                  date: '2025-08-25'
                }
              ].map((analysis, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{analysis.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {analysis.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-3">{analysis.description}</p>
                    {/* The Link component is now correctly imported and used */}
                    <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              {/* Assuming Button is imported from '@/components/ui/button' */}
              {/* <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                View All Analysis
              </Button> */}
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            All times are displayed in Eastern Standard Time (EST)
          </p>
        </div>
      </div>
    </div>
  );
}
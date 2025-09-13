'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, AlertCircle, ExternalLink } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'According to this Monad, the Monad Exchange in Russia has halted',
    category: 'Breaking',
    time: '2 hours ago',
    priority: 'high',
    description: 'Major cryptocurrency exchange operations suspended in Russia following regulatory concerns.',
    source: 'CryptoNews'
  },
  {
    id: 2,
    title: 'Volvo Recalls 1,545 Vehicles in the U.S. Due to Seatbelt',
    category: 'Market',
    time: '4 hours ago',
    priority: 'medium',
    description: 'Automotive recall affects market sentiment as safety concerns impact stock prices.',
    source: 'MarketWatch'
  },
  {
    id: 3,
    title: 'Federal Reserve Signals Potential Rate Changes',
    category: 'Economics',
    time: '6 hours ago',
    priority: 'high',
    description: 'Fed officials hint at monetary policy adjustments affecting global markets.',
    source: 'Financial Times'
  },
  {
    id: 4,
    title: 'Bitcoin Reaches New Weekly High',
    category: 'Crypto',
    time: '8 hours ago',
    priority: 'medium',
    description: 'Cryptocurrency markets show strong bullish momentum amid institutional adoption.',
    source: 'CoinDesk'
  },
  {
    id: 5,
    title: 'European Markets Open Higher',
    category: 'Markets',
    time: '10 hours ago',
    priority: 'low',
    description: 'European indices gain ground following positive economic data releases.',
    source: 'Reuters'
  },
  {
    id: 6,
    title: 'Oil Prices Surge on Supply Concerns',
    category: 'Commodities',
    time: '12 hours ago',
    priority: 'high',
    description: 'Crude oil prices jump as geopolitical tensions affect supply chains.',
    source: 'Bloomberg'
  }
];

const categories = ['All', 'Breaking', 'Market', 'Crypto', 'Economics', 'Commodities'];

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Breaking News
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest market news and financial developments
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className={category === 'All' 
                ? 'bg-emerald-600 hover:bg-emerald-700' 
                : 'border-gray-600 text-gray-300 hover:bg-gray-800'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card key={news.id} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant="outline"
                    className={
                      news.priority === 'high' ? 'border-red-500 text-red-400' :
                      news.priority === 'medium' ? 'border-yellow-500 text-yellow-400' :
                      'border-green-500 text-green-400'
                    }
                  >
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="h-3 w-3" />
                    {news.time}
                  </div>
                </div>
                <CardTitle className="text-white text-lg group-hover:text-emerald-400 transition-colors">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {news.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{news.source}</span>
                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <TrendingUp className="mr-2 h-5 w-5" />
            Load More News
          </Button>
        </div>
      </div>
    </div>
  );
}
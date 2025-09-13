'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Target, Clock, DollarSign, BarChart } from 'lucide-react';

const tradeSetups = [
  {
    id: 1,
    symbol: 'EUR/USD',
    type: 'BUY',
    entry: '1.0850',
    stopLoss: '1.0800',
    takeProfit: '1.0920',
    riskReward: '1:1.4',
    status: 'Active',
    confidence: 85,
    analysis: 'Strong bullish momentum with RSI oversold bounce',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    symbol: 'GBP/JPY',
    type: 'SELL',
    entry: '185.50',
    stopLoss: '186.20',
    takeProfit: '184.10',
    riskReward: '1:2.0',
    status: 'Completed',
    confidence: 92,
    analysis: 'Bearish divergence confirmed with resistance rejection',
    timestamp: '1 day ago'
  },
  {
    id: 3,
    symbol: 'GOLD',
    type: 'BUY',
    entry: '2035.00',
    stopLoss: '2020.00',
    takeProfit: '2065.00',
    riskReward: '1:2.0',
    status: 'Pending',
    confidence: 78,
    analysis: 'Safe haven demand increasing, technical breakout expected',
    timestamp: '3 hours ago'
  },
];

export default function TradeSetups() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Trade Setups
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-probability trading opportunities with detailed analysis and risk management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {tradeSetups.map((trade) => (
            <Card key={trade.id} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-white text-xl">{trade.symbol}</CardTitle>
                    <Badge 
                      variant={trade.type === 'BUY' ? 'default' : 'destructive'}
                      className={trade.type === 'BUY' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
                    >
                      {trade.type === 'BUY' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {trade.type}
                    </Badge>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={
                      trade.status === 'Active' ? 'border-emerald-500 text-emerald-400' :
                      trade.status === 'Completed' ? 'border-blue-500 text-blue-400' :
                      'border-yellow-500 text-yellow-400'
                    }
                  >
                    {trade.status}
                  </Badge>
                </div>
                <CardDescription className="text-gray-400 text-sm">
                  {trade.analysis}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Entry</div>
                      <div className="text-white font-bold">{trade.entry}</div>
                    </div>
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">R:R</div>
                      <div className="text-emerald-400 font-bold">{trade.riskReward}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Stop Loss</div>
                      <div className="text-red-400 font-bold">{trade.stopLoss}</div>
                    </div>
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Take Profit</div>
                      <div className="text-green-400 font-bold">{trade.takeProfit}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm text-gray-400">Confidence: {trade.confidence}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {trade.timestamp}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <BarChart className="mr-2 h-5 w-5" />
            View All Setups
          </Button>
        </div>
      </div>
    </div>
  );
}
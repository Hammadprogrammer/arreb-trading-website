'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'Weekly Market Analysis - Week 3, January 2025',
    date: 'January 21, 2025',
    summary: 'Market volatility increases amid Federal Reserve speculation. Major currency pairs show mixed signals.',
    trades: 12,
    winRate: '83%',
    returns: '+2.4%',
    status: 'Latest'
  },
  {
    id: 2,
    title: 'Weekly Market Analysis - Week 2, January 2025',
    date: 'January 14, 2025',
    summary: 'Strong bullish momentum in EUR/USD and GBP/JPY. Gold continues consolidation phase.',
    trades: 15,
    winRate: '87%',
    returns: '+3.1%',
    status: 'Published'
  },
  {
    id: 3,
    title: 'Weekly Market Analysis - Week 1, January 2025',
    date: 'January 7, 2025',
    summary: 'New year trading begins with cautious optimism. Focus on major economic releases.',
    trades: 10,
    winRate: '90%',
    returns: '+1.8%',
    status: 'Published'
  },
];

const marketInsights = [
  {
    title: 'Market Sentiment',
    value: 'Bullish',
    change: '+15%',
    icon: TrendingUp,
    color: 'text-green-400'
  },
  {
    title: 'Average Win Rate',
    value: '86.7%',
    change: '+2.3%',
    icon: PieChart,
    color: 'text-emerald-400'
  },
  {
    title: 'Weekly Returns',
    value: '+2.4%',
    change: '+0.6%',
    icon: BarChart3,
    color: 'text-blue-400'
  },
];

export default function WeeklyReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Weekly Market Reports
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive market analysis, trade performance, and strategic insights delivered weekly
          </p>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {marketInsights.map((insight, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{insight.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-white">{insight.value}</span>
                      <span className={`text-sm ${insight.color}`}>{insight.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-700/50`}>
                    <insight.icon className={`h-6 w-6 ${insight.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report) => (
            <Card key={report.id} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-white text-xl">{report.title}</CardTitle>
                      <Badge 
                        variant={report.status === 'Latest' ? 'default' : 'outline'}
                        className={report.status === 'Latest' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-gray-600 text-gray-400'}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      {report.summary}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {report.date}
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white font-medium">{report.trades}</span> trades analyzed
                  </div>
                  <div className="text-gray-400">
                    Win Rate: <span className="text-emerald-400 font-medium">{report.winRate}</span>
                  </div>
                  <div className="text-gray-400">
                    Returns: <span className="text-green-400 font-medium">{report.returns}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <FileText className="mr-2 h-5 w-5" />
            Subscribe to Reports
          </Button>
        </div>
      </div>
    </div>
  );
}
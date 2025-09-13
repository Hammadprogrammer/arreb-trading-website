'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProfessionalTimeline } from '@/components/ProfessionalTimeline';
import { TrendingUp, Award, Users, Target, BarChart3, Shield } from 'lucide-react';

const achievements = [
  {
    metric: '8+',
    label: 'Years Experience',
    description: 'Trading professionally across multiple markets',
    icon: Award,
    color: 'text-emerald-400'
  },
  {
    metric: '87%',
    label: 'Success Rate',
    description: 'Consistent profitable trading record',
    icon: Target,
    color: 'text-green-400'
  },
  {
    metric: '150+',
    label: 'Active Clients',
    description: 'Traders trusting our expertise worldwide',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    metric: '+2,340%',
    label: 'Total Returns',
    description: 'Cumulative returns since inception',
    icon: TrendingUp,
    color: 'text-purple-400'
  },
];

const expertise = [
  {
    area: 'Technical Analysis',
    description: 'Expert in chart patterns, indicators, and market structure analysis',
    level: 'Expert'
  },
  {
    area: 'Risk Management',
    description: 'Proven strategies for capital preservation and portfolio optimization',
    level: 'Expert'
  },
  {
    area: 'Forex Trading',
    description: 'Specialized in major and exotic currency pairs',
    level: 'Expert'
  },
  {
    area: 'Commodities',
    description: 'Gold, Oil, and agricultural commodities trading',
    level: 'Advanced'
  },
  {
    area: 'Cryptocurrency',
    description: 'Digital asset analysis and trading strategies',
    level: 'Advanced'
  },
  {
    area: 'Market Psychology',
    description: 'Understanding crowd behavior and sentiment analysis',
    level: 'Expert'
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-500/10 rounded-full">
              <TrendingUp className="h-16 w-16 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Areeb Traders
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Transforming trading journeys through expert analysis, proven strategies, and unwavering commitment to client success
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">My Trading Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My journey in financial markets began over 8 years ago with a simple fascination for market movements and 
                  economic dynamics. What started as personal interest evolved into a professional calling, driven by the 
                  desire to master the art and science of trading.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Through years of dedicated study, countless hours of market analysis, and learning from both victories 
                  and setbacks, I developed a systematic approach to trading that combines technical expertise with 
                  disciplined risk management. My methodology focuses on high-probability setups, proper position sizing, 
                  and psychological discipline.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, I'm passionate about sharing this knowledge with aspiring traders, helping them navigate the 
                  complexities of financial markets while building sustainable, profitable trading careers. My mission 
                  is to provide not just trading signals, but comprehensive education and mentorship for long-term success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <ProfessionalTimeline />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
                  <div className="text-lg font-medium text-gray-300 mb-2">{achievement.label}</div>
                  <div className="text-sm text-gray-400">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((skill, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg">{skill.area}</CardTitle>
                    <Badge 
                      variant="outline"
                      className={
                        skill.level === 'Expert' 
                          ? 'border-emerald-500 text-emerald-400'
                          : 'border-blue-500 text-blue-400'
                      }
                    >
                      {skill.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-xl">Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To empower traders with the knowledge, tools, and confidence needed to achieve consistent 
                profitability in financial markets while maintaining the highest standards of risk management 
                and professional ethics.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Transparency in all trading activities, continuous education and improvement, disciplined 
                risk management, and unwavering commitment to client success. Every decision is guided by 
                integrity and professional excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
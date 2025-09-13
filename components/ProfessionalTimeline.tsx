'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, GraduationCap, TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Key Opinion Leader (KOL)',
    company: 'MEXC Global',
    period: 'Sep 2025 - Present',
    type: 'work',
    description: 'As a KOL for MEXC, I share insights and create engaging content to build trust, grow the community, and connect the exchange with a wider audience.',
    icon: Users,
    color: 'bg-purple-500/10 text-purple-400',
    status: 'current'
  },
  {
    id: 2,
    title: 'Crypto Analyst',
    company: 'Itechgemini',
    period: 'July 2025 - Present',
    type: 'work',
    description: 'Improved AI trading app by analyzing crypto market data and enhancing financial research features for better decision-making.',
    icon: TrendingUp,
    color: 'bg-emerald-500/10 text-emerald-400',
    status: 'current'
  },
  {
    id: 3,
    title: 'ACCA',
    company: "Mirchawala's Hub of Accountancy",
    period: 'July 2025 - Present',
    type: 'education',
    description: 'I have started my ACCA (Association of Chartered Certified Accountants) studies through Mirchawala\'s Hub of Accountancy. ACCA is a globally recognized professional qualification in accounting and finance. By pursuing ACCA, I aim to build strong expertise in commerce and prepare for a successful career in accounting and finance.',
    icon: GraduationCap,
    color: 'bg-blue-500/10 text-blue-400',
    status: 'current'
  },
  {
    id: 4,
    title: 'I.Com',
    company: 'S.M College',
    period: 'Sep 2022 - Nov 2024',
    type: 'education',
    description: 'I completed my Intermediate in Commerce (I.Com) from S.M. College, where I studied Accounting, Economics, Commerce, Business Mathematics & Statistics, and Banking & Finance.',
    icon: GraduationCap,
    color: 'bg-blue-500/10 text-blue-400',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Funded Account Manager',
    company: 'FundedNext',
    period: 'July 2023 – 2024',
    type: 'work',
    description: 'Managed funded accounts for prop firms within strict risk limits, consistently achieving profit targets through leverage crypto and forex strategies, supported by technical/fundamental analysis and detailed trade journaling.',
    icon: Briefcase,
    color: 'bg-green-500/10 text-green-400',
    status: 'completed'
  },
  {
    id: 6,
    title: 'Funded Account Manager',
    company: 'Alpha Capital',
    period: 'July 2023 – 2024',
    type: 'work',
    description: 'Managed funded accounts for prop firms within strict risk limits, consistently achieving profit targets through leverage crypto and forex strategies, supported by technical/fundamental analysis and detailed trade journaling.',
    icon: Briefcase,
    color: 'bg-green-500/10 text-green-400',
    status: 'completed'
  },
  {
    id: 7,
    title: 'Blockchain & Cryptocurrency',
    company: 'waqarzaka.net',
    period: 'January 2021 - Present',
    type: 'education',
    description: 'I have been learning Blockchain and Cryptocurrency from Waqar Zaka and his team for many years. During this time, I have continuously upgraded my knowledge and skills, and I am still learning to stay updated with the latest developments in the crypto world.',
    icon: Award,
    color: 'bg-orange-500/10 text-orange-400',
    status: 'ongoing'
  }
];

export function ProfessionalTimeline() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in finance, trading, and blockchain technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-emerald-500 to-blue-500 opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${exp.color.split(' ')[0]} border-2 border-gray-800 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-left pr-8'}`}>
                  <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <CardHeader>
                      <div className="flex items-center gap-3 text-left"> {/* Always text-left */}
                        <div className={`p-3 rounded-full ${exp.color}`}>
                          <exp.icon className="h-6 w-6" />
                        </div>
                        <div className="text-left"> {/* Always text-left */}
                          <CardTitle className="text-white text-xl mb-1">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-medium">{exp.company}</span>
                            <Badge 
                              variant="outline" 
                              className={
                                exp.status === 'current' ? 'border-emerald-500 text-emerald-400' :
                                exp.status === 'ongoing' ? 'border-orange-500 text-orange-400' :
                                'border-gray-600 text-gray-400'
                              }
                            >
                              {exp.status === 'current' ? 'Current' : 
                               exp.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-left mt-2"> {/* Always text-left */}
                        {exp.period}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-left leading-relaxed"> {/* Always text-left */}
                        {exp.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

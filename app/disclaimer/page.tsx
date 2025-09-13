'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, FileText, Info } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full">
              <AlertTriangle className="h-16 w-16 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Important legal information regarding the use of Areeb Traders services
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Info className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">General Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                The information provided on the Areeb Traders website (the "Site") is for general informational and educational purposes only. All 
                information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the 
                accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">No Financial Advice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                The content on this Site, including but not limited to trade setups, economic analyses, articles, and any other materials, does not 
                constitute financial advice, investment advice, trading advice, or any other sort of advice, and you should not treat any of the Site's content as such. 
                Areeb Traders does not recommend that any specific security, portfolio of securities, transaction, or investment strategy is suitable for any specific person. 
                You understand that you are using any and all information available on or through this Site at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white text-xl">Risk of Loss</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Trading and investing in financial markets, including stocks, commodities, cryptocurrencies, and forex, involves a substantial risk of loss 
                and is not suitable for every investor. The valuation of financial instruments may fluctuate, and, as a result, clients may lose more than their original 
                investment. Past performance is not indicative of future results. You should carefully consider whether trading is suitable for you in light of your 
                circumstances, knowledge, and financial resources.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">Do Your Own Research</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                You are solely responsible for conducting your own research and making your own investment decisions. Before making any 
                investment decision, you should seek advice from a qualified financial advisor and conduct your own due diligence. Areeb Traders is not a registered 
                investment advisor, broker-dealer, or financial analyst.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Info className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white text-xl">Accuracy of Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we cannot guarantee that all information is entirely 
                accurate, complete, or current. Market conditions change rapidly, and information may become outdated. We are under no obligation to update or 
                correct any information provided on the Site.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white text-xl">Third-Party Links</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not 
                investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, 
                guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any 
                website or feature linked in any banner or other advertising.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white text-xl">Testimonials and Examples</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Any testimonials, case studies, or examples of past performance or trade setups presented on the Site are not to be 
                taken as a guarantee that you will achieve the same or similar results. These are for illustrative purposes only.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white text-xl">Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Descriptions of services such as "Account Management," "Copy Trading," and "1-on-1 Mentorship" are for informational purposes. 
                Engaging in such services involves significant risk and is subject to specific terms and conditions that will be provided upon inquiry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-700/50">
            <CardContent className="p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">Agreement</h3>
              <p className="text-gray-300">
                By using this Site, you agree to the terms of this disclaimer. If you do not agree with this disclaimer, please do not use our Site.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
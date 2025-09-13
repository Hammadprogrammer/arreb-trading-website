'use client';

import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/95 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Areeb Traders</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional trading services with expert analysis, proven strategies, and comprehensive market insights for consistent returns.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>areeb@areebtraders.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/trade-setups" className="text-gray-400 hover:text-emerald-400 transition-colors">Trade Setups</Link></li>
              <li><Link href="/weekly-reports" className="text-gray-400 hover:text-emerald-400 transition-colors">Weekly Reports</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-emerald-400 transition-colors">News</Link></li>
              <li><Link href="/economics" className="text-gray-400 hover:text-emerald-400 transition-colors">Economics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Legal & Partnerships */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Partners</h3>
            <ul className="space-y-2">
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-emerald-400 transition-colors">Disclaimer</Link></li>
              <li><Link href="/partnership" className="text-gray-400 hover:text-emerald-400 transition-colors">MEXC Partnership</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Areeb Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
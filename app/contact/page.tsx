'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const contactMethods = [
  {
    title: 'Email',
    description: 'Send us an email anytime',
    contact: 'areeb@areebtraders.com',
    icon: Mail,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    title: 'Phone',
    description: 'Call during business hours',
    contact: '+1 (555) 123-4567',
    icon: Phone,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'WhatsApp', // Changed from Telegram to WhatsApp
    description: 'Get in touch on WhatsApp',
    contact: '+1 (555) 123-4567', // Replace with actual WhatsApp number if different
    icon: MessageCircle, // Using MessageCircle icon for WhatsApp as well, or you can find a specific WhatsApp icon if available in lucide-react or another library
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Office',
    description: 'Visit our trading office',
    contact: 'New York, NY 10001',
    icon: MapPin,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
];

const socialMediaLinks = [
  { icon: Instagram, url: 'https://www.instagram.com/your_instagram_handle' },
  { icon: Twitter, url: 'https://www.twitter.com/your_twitter_handle' },
  { icon: Facebook, url: 'https://www.facebook.com/your_facebook_page' },
  // Add other social media links as needed, e.g.:
  // { icon: Youtube, url: 'https://www.youtube.com/your_youtube_channel' },
  // { icon: Linkedin, url: 'https://www.linkedin.com/your_linkedin_profile' },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your trading journey? Have questions about our services? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800/30 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        className="bg-gray-900/50 border-gray-600 text-white focus:border-emerald-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        className="bg-gray-900/50 border-gray-600 text-white focus:border-emerald-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-emerald-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-emerald-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-md text-white focus:border-emerald-500 focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="education">Trading Education</option>
                      <option value="mentorship">Personal Mentorship</option>
                      <option value="consultation">Risk Management Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      className="bg-gray-900/50 border-gray-600 text-white focus:border-emerald-500"
                      placeholder="Tell us about your trading goals and how we can help you..."
                    />
                  </div>
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Social Media Icons */}
            <div className="mt-8 text-center">
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                {socialMediaLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                      <IconComponent className="h-7 w-7" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${method.bgColor}`}>
                          <method.icon className={`h-6 w-6 ${method.color}`} />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-lg">{method.title}</h3>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                          <p className={`font-medium ${method.color}`}>{method.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white text-xl">Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-gray-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg">
                  <p className="text-emerald-400 text-sm">
                    <strong>Note:</strong> Trading signals and support are provided 24/5 during market hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Guarantee */}
            <Card className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 border-emerald-700/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-300">
                  We respond to all inquiries within <span className="text-emerald-400 font-medium">24 hours</span>. 
                  For urgent matters, call us directly during business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
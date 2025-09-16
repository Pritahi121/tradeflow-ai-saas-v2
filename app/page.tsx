'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Upload, Zap, Shield, BarChart3, Users, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

const features = [
  {
    icon: Upload,
    title: 'Smart File Processing',
    description: 'Upload PDF, EML, or TXT files and watch AI extract purchase order data instantly.',
    color: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process purchase orders in seconds, not hours. Reduce manual work by 90%.',
    color: 'text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and secure data handling. Your data stays protected.',
    color: 'text-green-600'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track processing status, vendor analytics, and spending patterns in real-time.',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share access with team members and manage permissions effortlessly.',
    color: 'text-red-600'
  },
  {
    icon: CheckCircle,
    title: 'Smart Integrations',
    description: 'Connect with Google Sheets, WhatsApp, Zoho Books and more popular tools.',
    color: 'text-indigo-600'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    credits: 10,
    features: [
      '10 PO processing credits',
      'Basic file upload (PDF, EML, TXT)',
      'Email notifications',
      'Basic analytics',
      'Community support'
    ],
    popular: false,
    buttonText: 'Start Free Trial',
    buttonVariant: 'outline' as const
  },
  {
    name: 'Professional',
    price: 29,
    credits: 100,
    features: [
      '100 PO processing credits',
      'All file formats supported',
      'WhatsApp & Email notifications',
      'Advanced analytics & reports',
      'Google Sheets integration',
      'Priority support',
      'API access'
    ],
    popular: true,
    buttonText: 'Get Started',
    buttonVariant: 'default' as const
  },
  {
    name: 'Enterprise',
    price: 99,
    credits: 500,
    features: [
      '500 PO processing credits',
      'All Professional features',
      'Zoho Books integration',
      'Custom branding',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations'
    ],
    popular: false,
    buttonText: 'Contact Sales',
    buttonVariant: 'outline' as const
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Procurement Manager',
    company: 'TechCorp India',
    content: 'TradeFlow AI reduced our PO processing time from 2 hours to 5 minutes. Game changer!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Finance Director',
    company: 'Global Enterprises',
    content: 'The accuracy is incredible. No more manual errors in our purchase order data.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Operations Head',
    company: 'Manufacturing Plus',
    content: 'Integration with our existing tools was seamless. Highly recommended!',
    rating: 5
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TradeFlow AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 AI-Powered Purchase Order Processing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}PO Workflow
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop wasting hours on manual purchase order processing. Our AI extracts, validates, 
              and organizes your PO data in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <Link href="#demo">
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✨ No credit card required • 10 free processing credits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate your purchase order processing workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <CardDescription className="text-gray-600 mt-2">
                      {plan.credits} processing credits included
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-8" 
                      variant={plan.buttonVariant}
                      size="lg"
                      asChild
                    >
                      <Link href="/signup">
                        {plan.buttonText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about TradeFlow AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-200">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already saving time with TradeFlow AI
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/signup">
                Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-blue-100 mt-4">
              No setup fees • Cancel anytime • 24/7 support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TradeFlow AI</span>
              </div>
              <p className="text-gray-400">
                Automate your purchase order processing with AI-powered intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/api-docs" className="hover:text-white transition-colors">API Docs</Link></li>
                <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TradeFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

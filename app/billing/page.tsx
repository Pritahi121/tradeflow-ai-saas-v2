'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CreditCard, 
  CheckCircle, 
  Clock,
  Download,
  Zap,
  Settings,
  TrendingUp,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

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
    current: true
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
    current: false
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
    current: false
  }
]

const mockUsageHistory = [
  {
    id: '1',
    date: '2024-09-16',
    description: 'PO Processing - PO-2024-002',
    credits: -1,
    balance: 8
  },
  {
    id: '2',
    date: '2024-09-15',
    description: 'PO Processing - PO-2024-001',
    credits: -1,
    balance: 9
  },
  {
    id: '3',
    date: '2024-09-01',
    description: 'Monthly credit allocation',
    credits: +10,
    balance: 10
  }
]

const mockBillingHistory = [
  {
    id: '1',
    date: '2024-09-01',
    description: 'Starter Plan - September 2024',
    amount: 0,
    status: 'paid',
    invoice: 'INV-2024-001'
  }
]

export default function BillingPage() {
  const [currentCredits] = useState(8)
  const [totalCredits] = useState(10)
  const [currentPlan] = useState('Starter')

  const handleUpgrade = (planName: string) => {
    // In a real app, this would integrate with Stripe
    alert(`Upgrading to ${planName} plan... (This would integrate with Stripe)`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-gray-900">TradeFlow AI</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/dashboard" className="text-gray-500 hover:text-gray-700">Dashboard</a>
              <a href="/upload" className="text-gray-500 hover:text-gray-700">Upload PO</a>
              <a href="/integrations" className="text-gray-500 hover:text-gray-700">Integrations</a>
              <a href="/billing" className="text-blue-600 font-medium">Billing</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign Out</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Billing & Usage</h1>
          <p className="mt-2 text-gray-600">
            Manage your subscription and track your usage
          </p>
        </div>

        {/* Current Plan & Usage */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Current Plan
                <Badge variant="secondary">{currentPlan}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">$0/month</div>
              <p className="text-gray-600 mb-4">Free tier with basic features</p>
              <Button className="w-full">Upgrade Plan</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Credits Usage</CardTitle>
              <CardDescription>This month's processing credits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{currentCredits}</span>
                <span className="text-gray-500">/ {totalCredits}</span>
              </div>
              <Progress value={(currentCredits / totalCredits) * 100} className="mb-2" />
              <p className="text-sm text-gray-600">
                {totalCredits - currentCredits} credits used this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Billing</CardTitle>
              <CardDescription>Your next billing cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="font-medium">October 1, 2024</span>
              </div>
              <p className="text-sm text-gray-600">
                Credits will reset on your next billing date
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Choose Your Plan</CardTitle>
            <CardDescription>
              Upgrade or downgrade your plan anytime. Changes take effect immediately.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative border rounded-lg p-6 ${
                    plan.current 
                      ? 'border-blue-500 bg-blue-50' 
                      : plan.popular 
                      ? 'border-purple-500 shadow-lg' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  {plan.current && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Current Plan
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600 mt-1">
                      {plan.credits} processing credits included
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                    disabled={plan.current}
                    onClick={() => handleUpgrade(plan.name)}
                  >
                    {plan.current ? 'Current Plan' : `Upgrade to ${plan.name}`}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage History & Billing History */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Usage History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Usage History</span>
              </CardTitle>
              <CardDescription>
                Track your credit usage over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUsageHistory.map((usage) => (
                  <div key={usage.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{usage.description}</p>
                      <p className="text-sm text-gray-500">{new Date(usage.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${usage.credits > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {usage.credits > 0 ? '+' : ''}{usage.credits}
                      </p>
                      <p className="text-sm text-gray-500">Balance: {usage.balance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Billing History</span>
              </CardTitle>
              <CardDescription>
                View your past invoices and payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBillingHistory.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{bill.description}</p>
                      <p className="text-sm text-gray-500">{new Date(bill.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${bill.amount}</p>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span className="text-sm text-green-600 capitalize">{bill.status}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Manage your payment information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">No payment method added</p>
                  <p className="text-sm text-gray-500">Add a payment method to upgrade your plan</p>
                </div>
              </div>
              <Button variant="outline">Add Payment Method</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Settings,
  Zap,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  FileSpreadsheet,
  Mail,
  Webhook,
  Key,
  Copy,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'

interface Integration {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  connected: boolean
  status: 'active' | 'inactive' | 'error'
  lastSync?: string
  config?: any
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'google-sheets',
      name: 'Google Sheets',
      description: 'Automatically export processed PO data to Google Sheets',
      icon: FileSpreadsheet,
      connected: true,
      status: 'active',
      lastSync: '2024-09-16T10:30:00Z',
      config: {
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        sheetName: 'Purchase Orders'
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      description: 'Send PO processing notifications via WhatsApp',
      icon: MessageSquare,
      connected: false,
      status: 'inactive'
    },
    {
      id: 'email',
      name: 'Email Notifications',
      description: 'Receive email alerts for PO processing updates',
      icon: Mail,
      connected: true,
      status: 'active',
      config: {
        email: 'user@example.com',
        notifications: ['processing_complete', 'processing_failed']
      }
    },
    {
      id: 'webhook',
      name: 'Webhooks',
      description: 'Send PO data to your custom endpoints',
      icon: Webhook,
      connected: false,
      status: 'inactive'
    }
  ])

  const [apiKey] = useState('tfai_sk_1234567890abcdef')
  const [showApiKey, setShowApiKey] = useState(false)

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === id 
        ? { 
            ...integration, 
            connected: !integration.connected,
            status: !integration.connected ? 'active' : 'inactive'
          }
        : integration
    ))
  }

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    // In a real app, you'd show a toast notification
    alert('API key copied to clipboard!')
  }

  const regenerateApiKey = () => {
    // In a real app, this would call an API to regenerate the key
    alert('API key regenerated! (This would call the backend API)')
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'error':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
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
              <a href="/integrations" className="text-blue-600 font-medium">Integrations</a>
              <a href="/billing" className="text-gray-500 hover:text-gray-700">Billing</a>
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
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="mt-2 text-gray-600">
            Connect TradeFlow AI with your favorite tools and services
          </p>
        </div>

        {/* API Key Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5" />
              <span>API Access</span>
            </CardTitle>
            <CardDescription>
              Use your API key to integrate TradeFlow AI with custom applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="api-key">Your API Key</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input
                    id="api-key"
                    type={showApiKey ? 'text' : 'password'}
                    value={apiKey}
                    readOnly
                    className="font-mono"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? 'Hide' : 'Show'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyApiKey}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={regenerateApiKey}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Keep your API key secure. Don't share it in publicly accessible areas.
                </p>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  View our{' '}
                  <a href="/api-docs" className="font-medium text-blue-600 hover:text-blue-500">
                    API documentation
                  </a>{' '}
                  to learn how to integrate with TradeFlow AI.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Available Integrations */}
        <div className="space-y-6">
          {integrations.map((integration) => (
            <Card key={integration.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <integration.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(integration.status)}>
                      {getStatusIcon(integration.status)}
                      <span className="ml-1 capitalize">{integration.status}</span>
                    </Badge>
                    <Switch
                      checked={integration.connected}
                      onCheckedChange={() => toggleIntegration(integration.id)}
                    />
                  </div>
                </div>
              </CardHeader>

              {integration.connected && (
                <CardContent>
                  {integration.id === 'google-sheets' && integration.config && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="spreadsheet-id">Spreadsheet ID</Label>
                          <Input
                            id="spreadsheet-id"
                            value={integration.config.spreadsheetId}
                            readOnly
                            className="font-mono text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="sheet-name">Sheet Name</Label>
                          <Input
                            id="sheet-name"
                            value={integration.config.sheetName}
                            readOnly
                          />
                        </div>
                      </div>
                      {integration.lastSync && (
                        <p className="text-sm text-gray-500">
                          Last synced: {new Date(integration.lastSync).toLocaleString()}
                        </p>
                      )}
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Open Sheet
                        </Button>
                      </div>
                    </div>
                  )}

                  {integration.id === 'email' && integration.config && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="notification-email">Notification Email</Label>
                        <Input
                          id="notification-email"
                          value={integration.config.email}
                          readOnly
                        />
                      </div>
                      <div>
                        <Label>Notification Types</Label>
                        <div className="mt-2 space-y-2">
                          {integration.config.notifications.map((type: string) => (
                            <div key={type} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm capitalize">{type.replace('_', ' ')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure Notifications
                      </Button>
                    </div>
                  )}

                  {integration.id === 'whatsapp' && (
                    <div className="space-y-4">
                      <Alert>
                        <MessageSquare className="h-4 w-4" />
                        <AlertDescription>
                          Connect your WhatsApp Business account to receive PO processing notifications.
                        </AlertDescription>
                      </Alert>
                      <Button>Connect WhatsApp Business</Button>
                    </div>
                  )}

                  {integration.id === 'webhook' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <Input
                          id="webhook-url"
                          placeholder="https://your-domain.com/webhook"
                        />
                      </div>
                      <div>
                        <Label htmlFor="webhook-secret">Webhook Secret (Optional)</Label>
                        <Input
                          id="webhook-secret"
                          type="password"
                          placeholder="Enter a secret for webhook verification"
                        />
                      </div>
                      <Alert>
                        <Webhook className="h-4 w-4" />
                        <AlertDescription>
                          Webhooks will be sent as POST requests with PO data in JSON format.
                        </AlertDescription>
                      </Alert>
                      <Button>Save Webhook Configuration</Button>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              More integrations are on the way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Slack', icon: '💬' },
                { name: 'Zoho Books', icon: '📊' },
                { name: 'QuickBooks', icon: '💰' },
                { name: 'Zapier', icon: '⚡' }
              ].map((upcoming) => (
                <div key={upcoming.name} className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl mb-2">{upcoming.icon}</div>
                  <p className="font-medium text-gray-900">{upcoming.name}</p>
                  <Badge variant="outline" className="mt-1">Coming Soon</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

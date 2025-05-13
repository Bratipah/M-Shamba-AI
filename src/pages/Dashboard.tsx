import React from 'react';
import { Card, Title, Text, Button } from '@mantine/core';
import { Users, PhoneCall, BarChart3, Clock, Check, X, RefreshCcw } from 'lucide-react';
const metrics = [{
  title: 'Active Sessions',
  value: '24',
  change: '+12%',
  icon: <PhoneCall className="w-6 h-6" />
}, {
  title: 'Total Users',
  value: '1,234',
  change: '+5%',
  icon: <Users className="w-6 h-6" />
}, {
  title: 'Success Rate',
  value: '94%',
  change: '+2%',
  icon: <BarChart3 className="w-6 h-6" />
}, {
  title: 'Avg. Session Time',
  value: '1m 45s',
  change: '-10s',
  icon: <Clock className="w-6 h-6" />
}];
const recentSessions = [{
  id: '1',
  phone: '+254 712 345 678',
  status: 'Active',
  action: 'Checking maize prices',
  time: '2 mins ago'
}, {
  id: '2',
  phone: '+254 723 456 789',
  status: 'Completed',
  action: 'Listed 500kg potatoes',
  time: '5 mins ago'
}, {
  id: '3',
  phone: '+254 734 567 890',
  status: 'Failed',
  action: 'Registration attempt',
  time: '12 mins ago'
}, {
  id: '4',
  phone: '+254 745 678 901',
  status: 'Completed',
  action: 'Accepted buyer offer',
  time: '15 mins ago'
}];
export function Dashboard() {
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                USSD Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor your USSD service in real-time
              </p>
            </div>
            <Button variant="light" color="green" leftSection={<RefreshCcw size={16} />}>
              Refresh Data
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map(metric => <Card key={metric.title} className="bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <Text size="sm" c="dimmed">
                    {metric.title}
                  </Text>
                  <Title order={3} className="mt-1">
                    {metric.value}
                  </Title>
                  <Text size="sm" className={metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {metric.change} from last hour
                  </Text>
                </div>
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  {metric.icon}
                </div>
              </div>
            </Card>)}
        </div>
        {/* Recent Sessions */}
        <Card className="bg-white mb-8">
          <div className="flex justify-between items-center mb-6">
            <Title order={4}>Recent USSD Sessions</Title>
            <Button variant="subtle" color="gray" size="sm">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentSessions.map(session => <tr key={session.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm">{session.phone}</Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${session.status === 'Active' ? 'bg-green-100 text-green-800' : session.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                        {session.status === 'Active' ? <Clock size={12} className="mr-1" /> : session.status === 'Completed' ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                        {session.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm">{session.action}</Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {session.time}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <Title order={4} className="mb-4">
              Common USSD Issues
            </Title>
            <div className="space-y-2">
              <Button variant="light" color="red" fullWidth>
                Reset Stuck Session
              </Button>
              <Button variant="light" color="yellow" fullWidth>
                Clear Cache
              </Button>
              <Button variant="light" color="blue" fullWidth>
                View Error Logs
              </Button>
            </div>
          </Card>
          <Card className="bg-white">
            <Title order={4} className="mb-4">
              System Status
            </Title>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text size="sm">USSD Gateway</Text>
                <span className="flex items-center text-green-600">
                  <Check size={16} className="mr-1" /> Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <Text size="sm">Database</Text>
                <span className="flex items-center text-green-600">
                  <Check size={16} className="mr-1" /> Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <Text size="sm">API Services</Text>
                <span className="flex items-center text-green-600">
                  <Check size={16} className="mr-1" /> Operational
                </span>
              </div>
            </div>
          </Card>
          <Card className="bg-white">
            <Title order={4} className="mb-4">
              Quick Stats
            </Title>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text size="sm">Today's Sessions</Text>
                <Text size="sm" className="font-semibold">
                  1,234
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text size="sm">Failed Sessions</Text>
                <Text size="sm" className="font-semibold text-red-600">
                  23 (1.8%)
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text size="sm">Peak Hour</Text>
                <Text size="sm" className="font-semibold">
                  10:00 - 11:00 AM
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>;
}
'use client'

import { SecurityEvent } from '../../types/waf'

const SecurityEvents = () => {
  const events: SecurityEvent[] = [
    {
      id: '1',
      type: 'SQL Injection',
      severity: 'Critical',
      timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
      sourceIp: '192.168.1.15',
      description: 'Detected SQL injection attempt in login form',
      action: 'Blocked',
    },
    {
      id: '2',
      type: 'XSS',
      severity: 'High',
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      sourceIp: '10.0.0.23',
      description: 'Cross-site scripting attempt detected in comment section',
      action: 'Blocked',
    },
    {
      id: '3',
      type: 'Brute Force',
      severity: 'Medium',
      timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      sourceIp: '172.16.0.42',
      description: 'Multiple failed login attempts from same IP address',
      action: 'Blocked',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800'
      case 'High':
        return 'bg-orange-100 text-orange-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>
        Recent Security Events
      </h2>

      <div className='space-y-4'>
        {events.map((event) => (
          <div
            key={event.id}
            className='flex items-start justify-between p-4 border border-gray-200 rounded-lg'
          >
            <div className='flex items-start space-x-4'>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${getSeverityColor(
                  event.severity
                )}`}
              >
                {event.severity.charAt(0)}
              </div>

              <div>
                <h3 className='font-medium text-gray-900'>{event.type}</h3>
                <p className='text-sm text-gray-500'>{event.description}</p>
                <div className='flex items-center mt-1 space-x-2'>
                  <span className='text-xs text-gray-500'>
                    {event.sourceIp}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {formatTime(event.timestamp)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-end'>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  event.action === 'Blocked'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {event.action}
              </span>
              <span className='text-xs text-gray-500 mt-1'>
                {event.severity}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-4 text-center'>
        <button className='text-sm text-blue-600 hover:text-blue-800 font-medium'>
          View all events →
        </button>
      </div>
    </div>
  )
}

export default SecurityEvents

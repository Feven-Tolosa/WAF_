import { TrafficData } from '../types/waf'

export const generateTrafficData = (): TrafficData[] => {
  const data: TrafficData[] = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const timestamp = new Date(now)
    timestamp.setHours(timestamp.getHours() - i)

    data.push({
      timestamp,
      allowed: Math.floor(Math.random() * 500) + 800,
      blocked: Math.floor(Math.random() * 50) + 10,
    })
  }

  return data
}

export const getThreatDistribution = () => {
  return [
    { threat: 'SQL Injection', percentage: 42, color: '#ef4444' },
    { threat: 'XSS Attacks', percentage: 28, color: '#f59e0b' },
    { threat: 'Brute Force', percentage: 15, color: '#3b82f6' },
    { threat: 'DDoS Attempts', percentage: 8, color: '#8b5cf6' },
    { threat: 'Other', percentage: 7, color: '#64748b' },
  ]
}

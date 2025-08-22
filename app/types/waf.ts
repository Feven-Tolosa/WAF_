export interface SecurityEvent {
  id: string
  type: 'SQL Injection' | 'XSS' | 'Brute Force' | 'DDoS' | 'Other'
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  timestamp: Date
  sourceIp: string
  description: string
  action: 'Blocked' | 'Allowed' | 'Flagged'
}

export interface TrafficData {
  timestamp: Date
  allowed: number
  blocked: number
}

export interface WAFStats {
  totalRequests: number
  blockedRequests: number
  allowedRequests: number
  falsePositives: number
  avgResponseTime: number
  activeRules: number
}

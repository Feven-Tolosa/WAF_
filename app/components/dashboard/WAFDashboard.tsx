'use client'

import { useState, useEffect } from 'react'
import TrafficChart from '../dashboard/TrafficChart'
import StatsGrid from './StatsGrid'

import { WAFStats, SecurityEvent, TrafficData } from '../../types/waf'
import { generateTrafficData } from '../../utils/chart-data'
import ThreatDistribution from './ThreatDistribution'
import SecurityEvents from './SecurityEvents'

const WAFDashboard = () => {
  const [stats, setStats] = useState<WAFStats>({
    totalRequests: 26115,
    blockedRequests: 1243,
    allowedRequests: 24872,
    falsePositives: 42,
    avgResponseTime: 42,
    activeRules: 187,
  })

  const [trafficData, setTrafficData] = useState<TrafficData[]>([])

  useEffect(() => {
    // Simulate initial data load
    setTrafficData(generateTrafficData())

    // Simulate live data updates
    const interval = setInterval(() => {
      setTrafficData((prevData) => {
        const newData = [...prevData]
        newData.shift()

        const lastEntry = newData[newData.length - 1]
        const newTimestamp = new Date(lastEntry.timestamp)
        newTimestamp.setHours(newTimestamp.getHours() + 1)

        newData.push({
          timestamp: newTimestamp,
          allowed: Math.floor(Math.random() * 500) + 800,
          blocked: Math.floor(Math.random() * 50) + 10,
        })

        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold text-gray-800'>WAF Dashboard</h1>

      <StatsGrid stats={stats} />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <TrafficChart data={trafficData} />
        <ThreatDistribution />
      </div>

      <SecurityEvents />
    </div>
  )
}

export default WAFDashboard

// app/components/dashboard/WAFDashboard.tsx
'use client'

import { useState, useEffect } from 'react'
import TrafficChart from './TrafficChart'
import StatsGrid from './StatsGrid'
import ThreatDistribution from './ThreatDistribution'
import SecurityEvents from './SecurityEvents'
import { TrafficData, WAFStats } from '@/app/types/waf'
import { generateTrafficData } from '@/app/utils/chart-data'

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
      {/* Ethiopian Cultural Header */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-ethio-yellow flex items-center'>
          <i className='fas fa-shield-alt mr-3'></i>
          WAF Dashboard
        </h1>
        <div className='flex items-center space-x-2 bg-ethio-dark/80 px-4 py-2 rounded-full border border-ethio-yellow/30'>
          <i className='fas fa-globe-africa text-ethio-yellow'></i>
          <span className='text-ethio-light'>Ethiopian Server</span>
        </div>
      </div>

      {/* Ethiopian Pattern Separator */}
      <div className='h-1 bg-gradient-to-r from-ethio-green via-ethio-yellow to-ethio-red rounded-full'></div>

      <StatsGrid stats={stats} />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <TrafficChart data={trafficData} />
        <ThreatDistribution />
      </div>

      <SecurityEvents />

      {/* Ethiopian Cultural Footer */}
      <div className='flex justify-center items-center mt-8 pt-6 border-t border-ethio-yellow/20'>
        <div className='text-center'>
          <div className='flex justify-center space-x-4 mb-2'>
            <i className='fas fa-coffee text-ethio-yellow'></i>
            <i className='fas fa-hands-helping text-ethio-green'></i>
            <i className='fas fa-users text-ethio-red'></i>
          </div>
          <p className='text-ethio-light text-sm'>
            Protected with pride using Ethiopian technology
          </p>
        </div>
      </div>
    </div>
  )
}

export default WAFDashboard

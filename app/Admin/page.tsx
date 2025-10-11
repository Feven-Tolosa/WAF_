'use client'
import React, { useState } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const trafficData = [
  { time: '00:00', requests: 120 },
  { time: '04:00', requests: 240 },
  { time: '08:00', requests: 900 },
  { time: '12:00', requests: 1500 },
  { time: '16:00', requests: 1100 },
  { time: '20:00', requests: 700 },
  { time: '24:00', requests: 300 },
]

const sampleEvents = [
  {
    id: 1,
    ip: '51.89.23.10',
    type: 'Blocked',
    rule: 'SQLi Detection',
    time: '2025-10-10 14:32',
  },
  {
    id: 2,
    ip: '196.189.12.4',
    type: 'Allowed',
    rule: '-',
    time: '2025-10-10 13:12',
  },
  {
    id: 3,
    ip: '45.77.88.200',
    type: 'Blocked',
    rule: 'Rate Limit',
    time: '2025-10-09 21:02',
  },
]

export default function Admin() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('overview')
  const [events, setEvents] = useState(sampleEvents)
  const [blacklist, setBlacklist] = useState(['203.0.113.12'])
  const [newIp, setNewIp] = useState('')
  const [dark, setDark] = useState(false)

  function addBlacklist() {
    if (!newIp) return
    if (!blacklist.includes(newIp)) setBlacklist([newIp, ...blacklist])
    setNewIp('')
  }

  function removeFromBlacklist(ip) {
    setBlacklist(blacklist.filter((i) => i !== ip))
  }

  const filteredEvents = events.filter(
    (e) =>
      e.ip.includes(query) || e.rule.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className='relative'>
      <header className='flex items-center justify-between p-4 ethio-card mb-6'>
        <div className='flex items-center gap-3'>
          <svg width='40' height='40' viewBox='0 0 100 100'>
            <rect width='100' height='33' fill='#078930' />
            <rect y='33' width='100' height='34' fill='#FFD200' />
            <rect y='67' width='100' height='33' fill='#E03A3E' />
          </svg>
          <div>
            <h1 className='text-lg font-bold text-yellow-400'>
              EthioGuard WAF
            </h1>
            <p className='text-sm text-gray-400'>
              Protecting Ethiopian web applications
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center gap-2 bg-gray-900/40 p-2 rounded-lg'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='bg-transparent outline-none text-sm text-yellow-200'
              placeholder='Search IP, rule...'
            />
            <button
              className='text-sm px-2 py-1 rounded bg-green-700 text-white'
              onClick={() => setQuery('')}
            >
              Clear
            </button>
          </div>
          <label className='theme-toggle'>
            <input
              type='checkbox'
              onChange={() => setDark(!dark)}
              checked={dark}
            />
            <span className='theme-slider'></span>
          </label>
        </div>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div className='ethio-stat-card p-6 rounded-2xl text-white'>
          <h4 className='text-sm opacity-80'>Requests (24h)</h4>
          <p className='text-3xl font-bold'>18,423</p>
          <p className='text-xs'>+12% vs yesterday</p>
        </div>

        <div className='ethio-card p-6 text-yellow-300'>
          <h4 className='text-sm'>Threats Blocked</h4>
          <p className='text-3xl font-bold text-green-400'>1,204</p>
          <p className='text-xs text-gray-400'>SQLi, XSS, Bot</p>
        </div>

        <div className='ethio-card p-6 text-yellow-300'>
          <h4 className='text-sm'>Active Rules</h4>
          <p className='text-3xl font-bold text-yellow-400'>48</p>
          <p className='text-xs text-gray-400'>Managed & Custom</p>
        </div>
      </div>

      <div className='ethio-card p-6 mb-8'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='font-semibold text-yellow-400'>Traffic (last 24h)</h3>
          <span className='text-sm text-gray-400'>Requests per hour</span>
        </div>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#555' />
              <XAxis dataKey='time' stroke='#fcd116' />
              <YAxis stroke='#fcd116' />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='requests'
                stroke='#37f272'
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <nav className='flex flex-wrap gap-2 mb-6'>
        {['overview', 'events', 'rules', 'ips', 'settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`nav-item px-4 py-2 rounded-lg ${
              activeTab === tab
                ? 'bg-green-700 text-white'
                : 'bg-transparent text-yellow-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='ethio-card p-6'>
            <h3 className='font-semibold text-yellow-400 mb-3'>
              Recent Events
            </h3>
            <ul className='space-y-3'>
              {events.slice(0, 5).map((ev) => (
                <li
                  key={ev.id}
                  className='flex items-center justify-between border-b border-gray-700 pb-2'
                >
                  <div>
                    <div className='text-sm text-white'>{ev.ip}</div>
                    <div className='text-xs text-gray-400'>
                      {ev.rule} • {ev.time}
                    </div>
                  </div>
                  <button className='px-2 py-1 text-xs rounded bg-red-600 text-white'>
                    Block
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='ethio-card p-6'>
            <h3 className='font-semibold text-yellow-400 mb-3'>Rule Health</h3>
            <div className='space-y-2 text-sm text-gray-300'>
              <div className='flex items-center justify-between'>
                <span>SQLi Detection</span>
                <span className='font-semibold text-yellow-300'>612</span>
              </div>
              <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                <div className='h-2 bg-gradient-to-r from-green-600 to-yellow-400 w-[62%]'></div>
              </div>

              <div className='flex items-center justify-between mt-3'>
                <span>Rate Limit</span>
                <span className='font-semibold text-yellow-300'>312</span>
              </div>
              <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
                <div className='h-2 bg-gradient-to-r from-red-600 to-yellow-300 w-[31%]'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className='ethio-card p-6'>
          <h2 className='text-yellow-400 text-lg font-semibold mb-4'>Events</h2>
          <table className='w-full text-sm text-gray-300'>
            <thead>
              <tr className='text-left text-yellow-400 border-b border-gray-700'>
                <th className='p-2'>IP</th>
                <th className='p-2'>Type</th>
                <th className='p-2'>Rule</th>
                <th className='p-2'>Time</th>
                <th className='p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((ev) => (
                <tr key={ev.id} className='border-b border-gray-800'>
                  <td className='p-2'>{ev.ip}</td>
                  <td className='p-2'>{ev.type}</td>
                  <td className='p-2'>{ev.rule}</td>
                  <td className='p-2'>{ev.time}</td>
                  <td className='p-2'>
                    <button className='px-2 py-1 mr-2 rounded bg-green-700 text-white text-xs'>
                      Details
                    </button>
                    <button
                      className='px-2 py-1 rounded bg-red-600 text-white text-xs'
                      onClick={() =>
                        setEvents(events.filter((e) => e.id !== ev.id))
                      }
                    >
                      Dismiss
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* IP Management Tab */}
      {activeTab === 'ips' && (
        <div className='ethio-card p-6'>
          <h2 className='text-yellow-400 text-lg font-semibold mb-4'>
            IP Management
          </h2>
          <div className='flex gap-2 mb-4'>
            <input
              className='flex-1 p-2 rounded border bg-transparent text-yellow-200'
              value={newIp}
              onChange={(e) => setNewIp(e.target.value)}
              placeholder='Add IP to blacklist'
            />
            <button
              onClick={addBlacklist}
              className='px-4 py-2 rounded bg-red-600 text-white'
            >
              Add
            </button>
          </div>

          <ul className='space-y-2'>
            {blacklist.map((ip) => (
              <li
                key={ip}
                className='flex items-center justify-between p-2 border border-gray-700 rounded'
              >
                <span className='text-white'>{ip}</span>
                <button
                  onClick={() => removeFromBlacklist(ip)}
                  className='px-2 py-1 text-xs rounded border text-yellow-300'
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className='ethio-card p-6'>
          <h2 className='text-yellow-400 text-lg font-semibold mb-4'>
            Settings
          </h2>
          <div className='space-y-4 text-gray-200'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='font-medium'>Global Mode</div>
                <div className='text-sm text-gray-400'>
                  Detection / Prevention
                </div>
              </div>
              <select className='p-2 rounded bg-transparent border text-yellow-300'>
                <option>Detection</option>
                <option>Prevention</option>
              </select>
            </div>

            <div className='flex items-center justify-between'>
              <div>
                <div className='font-medium'>Threat Intelligence</div>
                <div className='text-sm text-gray-400'>Third-party feeds</div>
              </div>
              <button className='px-3 py-1 rounded border text-yellow-300'>
                Configure
              </button>
            </div>

            <p className='text-sm text-gray-400'>Changes are auto-saved.</p>
          </div>
        </div>
      )}

      <footer className='text-center text-xs text-gray-400 mt-8'>
        © {new Date().getFullYear()} EthioGuard — Championing Secure Ethiopian
        Web.
      </footer>
    </div>
  )
}

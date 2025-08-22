'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ThreatDistribution = () => {
  const data = {
    labels: [
      'SQL Injection',
      'XSS Attacks',
      'Brute Force',
      'DDoS Attempts',
      'Other',
    ],
    datasets: [
      {
        data: [42, 28, 15, 8, 7],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(100, 116, 139, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(59, 130, 246)',
          'rgb(139, 92, 246)',
          'rgb(100, 116, 139)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Threat Distribution',
      },
    },
  }

  return (
    <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default ThreatDistribution

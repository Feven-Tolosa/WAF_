import { WAFStats } from '../../types/waf'

const StatsGrid = ({ stats }: { stats: WAFStats }) => {
  const statCards = [
    {
      title: 'Total Requests',
      value: stats.totalRequests.toLocaleString(),
      change: '+12.4%',
      icon: 'globe',
      color: 'blue',
    },
    {
      title: 'Blocked Threats',
      value: stats.blockedRequests.toLocaleString(),
      change: '+3.2%',
      icon: 'ban',
      color: 'red',
    },
    {
      title: 'Avg. Response Time',
      value: `${stats.avgResponseTime}ms`,
      change: '-8.7%',
      icon: 'bolt',
      color: 'green',
    },
    {
      title: 'Active Rules',
      value: stats.activeRules.toLocaleString(),
      change: '+12',
      icon: 'list',
      color: 'purple',
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {statCards.map((card, index) => (
        <div
          key={index}
          className='bg-white rounded-xl p-4 shadow-sm border border-gray-200'
        >
          <div className='flex justify-between items-start'>
            <div>
              <h3 className='text-gray-500 text-sm font-medium'>
                {card.title}
              </h3>
              <p className='text-2xl font-bold text-gray-900 mt-1'>
                {card.value}
              </p>
            </div>
            {/* <div
              className={`w-10 h-10 rounded-lg bg-${card.color}-100 flex items-center justify-center`}
            >
              <span className={`text-${card.color}-500 text-lg`}>
                {card.icon === 'globe' && '🌐'}
                {card.icon === 'ban' && '🚫'}
                {card.icon === 'bolt' && '⚡'}
                {card.icon === 'list' && '📋'}
              </span>
            </div> */}
            {/* // Update the color classes to use your custom colors */}
            <div
              className={`w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center`}
            >
              <span className={`text-primary-500 text-lg`}>
                {card.icon === 'globe' && '🌐'}
                {card.icon === 'ban' && '🚫'}
                {card.icon === 'bolt' && '⚡'}
                {card.icon === 'list' && '📋'}
              </span>
            </div>
          </div>
          <div className='flex items-center mt-3'>
            <span
              className={`text-${
                card.change.startsWith('+') ? 'green' : 'red'
              }-500 text-sm font-medium flex items-center`}
            >
              {card.change.startsWith('+') ? '↑' : '↓'} {card.change}
            </span>
            <span className='text-gray-500 text-sm ml-2'>from yesterday</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsGrid

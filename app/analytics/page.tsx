const AnalyticsPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-ethio-yellow mb-6 flex items-center'>
        <i className='fas fa-chart-line mr-3'></i>
        Analytics
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='ethio-card p-6'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Traffic Overview
          </h2>
          <div className='h-64 bg-ethio-dark/50 rounded-lg flex items-center justify-center'>
            <p className='text-ethio-light'>
              Traffic chart will be displayed here
            </p>
          </div>
        </div>

        <div className='ethio-card p-6'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Threat Distribution
          </h2>
          <div className='h-64 bg-ethio-dark/50 rounded-lg flex items-center justify-center'>
            <p className='text-ethio-light'>
              Threat distribution chart will be displayed here
            </p>
          </div>
        </div>

        <div className='ethio-card p-6 lg:col-span-2'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Top Blocked IPs
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-ethio-yellow/20'>
                  <th className='text-left py-2 text-ethio-light'>
                    IP Address
                  </th>
                  <th className='text-left py-2 text-ethio-light'>Country</th>
                  <th className='text-left py-2 text-ethio-light'>Requests</th>
                  <th className='text-left py-2 text-ethio-light'>Last Seen</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-ethio-yellow/10'>
                  <td className='py-3 text-ethio-light'>192.168.1.15</td>
                  <td className='py-3 text-ethio-light'>Ethiopia</td>
                  <td className='py-3 text-ethio-light'>142</td>
                  <td className='py-3 text-ethio-light'>2 hours ago</td>
                </tr>
                <tr className='border-b border-ethio-yellow/10'>
                  <td className='py-3 text-ethio-light'>10.0.0.23</td>
                  <td className='py-3 text-ethio-light'>United States</td>
                  <td className='py-3 text-ethio-light'>87</td>
                  <td className='py-3 text-ethio-light'>5 hours ago</td>
                </tr>
                <tr className='border-b border-ethio-yellow/10'>
                  <td className='py-3 text-ethio-light'>172.16.0.42</td>
                  <td className='py-3 text-ethio-light'>China</td>
                  <td className='py-3 text-ethio-light'>63</td>
                  <td className='py-3 text-ethio-light'>1 day ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage

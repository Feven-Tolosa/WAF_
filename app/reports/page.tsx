const ReportsPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-ethio-yellow mb-6 flex items-center'>
        <i className='fas fa-file-alt mr-3'></i>
        Reports
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <div className='ethio-stat-card rounded-xl p-4'>
          <div className='flex justify-between items-start'>
            <div>
              <h3 className='text-ethio-light text-sm'>Generated Reports</h3>
              <p className='text-2xl font-bold mt-1 text-white'>24</p>
            </div>
            <div className='w-10 h-10 rounded-lg bg-ethio-blue/20 flex items-center justify-center'>
              <i className='fas fa-file text-ethio-blue'></i>
            </div>
          </div>
        </div>

        <div className='ethio-stat-card rounded-xl p-4'>
          <div className='flex justify-between items-start'>
            <div>
              <h3 className='text-ethio-light text-sm'>Scheduled Reports</h3>
              <p className='text-2xl font-bold mt-1 text-white'>8</p>
            </div>
            <div className='w-10 h-10 rounded-lg bg-ethio-green/20 flex items-center justify-center'>
              <i className='fas fa-calendar text-ethio-green'></i>
            </div>
          </div>
        </div>

        <div className='ethio-stat-card rounded-xl p-4'>
          <div className='flex justify-between items-start'>
            <div>
              <h3 className='text-ethio-light text-sm'>This Week</h3>
              <p className='text-2xl font-bold mt-1 text-white'>3</p>
            </div>
            <div className='w-10 h-10 rounded-lg bg-ethio-yellow/20 flex items-center justify-center'>
              <i className='fas fa-clock text-ethio-yellow'></i>
            </div>
          </div>
        </div>
      </div>

      <div className='ethio-card p-6'>
        <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
          Recent Reports
        </h2>
        <div className='space-y-4'>
          <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
            <div>
              <h3 className='font-medium text-ethio-light'>
                Weekly Security Report
              </h3>
              <p className='text-sm text-gray-400'>
                Generated on: Oct 15, 2023
              </p>
            </div>
            <button className='px-4 py-2 bg-ethio-yellow text-ethio-dark font-medium rounded hover:bg-ethio-yellow/90'>
              Download
            </button>
          </div>

          <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
            <div>
              <h3 className='font-medium text-ethio-light'>
                Threat Analysis Report
              </h3>
              <p className='text-sm text-gray-400'>
                Generated on: Oct 10, 2023
              </p>
            </div>
            <button className='px-4 py-2 bg-ethio-yellow text-ethio-dark font-medium rounded hover:bg-ethio-yellow/90'>
              Download
            </button>
          </div>

          <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
            <div>
              <h3 className='font-medium text-ethio-light'>Monthly Summary</h3>
              <p className='text-sm text-gray-400'>Generated on: Oct 1, 2023</p>
            </div>
            <button className='px-4 py-2 bg-ethio-yellow text-ethio-dark font-medium rounded hover:bg-ethio-yellow/90'>
              Download
            </button>
          </div>
        </div>

        <div className='mt-6'>
          <button className='px-4 py-2 bg-ethio-green text-white font-medium rounded hover:bg-ethio-green/90 flex items-center'>
            <i className='fas fa-plus mr-2'></i>
            Generate New Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage

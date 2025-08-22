const FirewallPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-ethio-yellow mb-6 flex items-center'>
        <i className='fas fa-fire mr-3'></i>
        Firewall Rules
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='ethio-card p-6 lg:col-span-2'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Active Rules
          </h2>
          <div className='space-y-4'>
            <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
              <div>
                <h3 className='font-medium text-ethio-light'>
                  SQL Injection Protection
                </h3>
                <p className='text-sm text-gray-400'>
                  Blocks SQL injection attempts
                </p>
              </div>
              <span className='px-3 py-1 bg-ethio-green/30 text-ethio-green rounded-full text-sm'>
                Active
              </span>
            </div>

            <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
              <div>
                <h3 className='font-medium text-ethio-light'>XSS Protection</h3>
                <p className='text-sm text-gray-400'>
                  Blocks cross-site scripting attacks
                </p>
              </div>
              <span className='px-3 py-1 bg-ethio-green/30 text-ethio-green rounded-full text-sm'>
                Active
              </span>
            </div>

            <div className='flex justify-between items-center p-4 bg-ethio-dark/50 rounded-lg'>
              <div>
                <h3 className='font-medium text-ethio-light'>Rate Limiting</h3>
                <p className='text-sm text-gray-400'>
                  Prevents brute force attacks
                </p>
              </div>
              <span className='px-3 py-1 bg-ethio-green/30 text-ethio-green rounded-full text-sm'>
                Active
              </span>
            </div>
          </div>
        </div>

        <div className='ethio-card p-6'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Add New Rule
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Rule Name
              </label>
              <input
                type='text'
                className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Rule Type
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>SQL Injection</option>
                <option>XSS</option>
                <option>Rate Limit</option>
                <option>IP Block</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Action
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>Block</option>
                <option>Allow</option>
                <option>Log</option>
              </select>
            </div>

            <button className='w-full py-2 bg-ethio-yellow text-ethio-dark font-medium rounded hover:bg-ethio-yellow/90'>
              Add Rule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirewallPage

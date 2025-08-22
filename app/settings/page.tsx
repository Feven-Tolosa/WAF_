const SettingsPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-ethio-yellow mb-6 flex items-center'>
        <i className='fas fa-cog mr-3'></i>
        Settings
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='ethio-card p-6 lg:col-span-2'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            General Settings
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Site Name
              </label>
              <input
                type='text'
                defaultValue='EthioGuard WAF'
                className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Timezone
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>Africa/Addis_Ababa (EAT)</option>
                <option>UTC</option>
                <option>GMT</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Language
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>English</option>
                <option>Amharic</option>
              </select>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='notifications'
                className='mr-2'
                defaultChecked
              />
              <label
                htmlFor='notifications'
                className='text-sm text-ethio-light'
              >
                Enable Email Notifications
              </label>
            </div>

            <button className='px-4 py-2 bg-ethio-yellow text-ethio-dark font-medium rounded hover:bg-ethio-yellow/90'>
              Save Settings
            </button>
          </div>
        </div>

        <div className='ethio-card p-6'>
          <h2 className='text-lg font-semibold text-ethio-yellow mb-4'>
            Security Settings
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                WAF Mode
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>Enabled (Block threats)</option>
                <option>Monitoring Only (Do not block)</option>
                <option>Disabled</option>
              </select>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='autoupdate'
                className='mr-2'
                defaultChecked
              />
              <label htmlFor='autoupdate' className='text-sm text-ethio-light'>
                Auto-update Rules
              </label>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='logging'
                className='mr-2'
                defaultChecked
              />
              <label htmlFor='logging' className='text-sm text-ethio-light'>
                Enable Detailed Logging
              </label>
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-1'>
                Log Retention
              </label>
              <select className='w-full p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'>
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>1 year</option>
              </select>
            </div>

            <button className='px-4 py-2 bg-ethio-green text-white font-medium rounded hover:bg-ethio-green/90'>
              Apply Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage

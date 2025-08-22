export default function Features() {
  return (
    <div className='py-20 px-4'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-ethio-yellow text-center mb-16'>
          Features
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='ethio-card p-8'>
            <div className='w-16 h-16 bg-ethio-green/20 rounded-full flex items-center justify-center mb-6'>
              <i className='fas fa-shield-alt text-ethio-green text-2xl'></i>
            </div>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-4'>
              Advanced Threat Protection
            </h2>
            <p className='text-ethio-light'>
              Protect your website from SQL injection, XSS attacks, DDoS
              attempts, and other sophisticated threats with our advanced
              security algorithms.
            </p>
          </div>

          <div className='ethio-card p-8'>
            <div className='w-16 h-16 bg-ethio-red/20 rounded-full flex items-center justify-center mb-6'>
              <i className='fas fa-tachometer-alt text-ethio-red text-2xl'></i>
            </div>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-4'>
              Performance Optimization
            </h2>
            <p className='text-ethio-light'>
              Our solution is optimized for speed, ensuring that security does
              not come at the cost of performance for your Ethiopian visitors.
            </p>
          </div>

          <div className='ethio-card p-8'>
            <div className='w-16 h-16 bg-ethio-blue/20 rounded-full flex items-center justify-center mb-6'>
              <i className='fas fa-chart-bar text-ethio-blue text-2xl'></i>
            </div>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-4'>
              Comprehensive Analytics
            </h2>
            <p className='text-ethio-light'>
              Get detailed insights into traffic patterns, threat attempts, and
              security events with our intuitive dashboard.
            </p>
          </div>

          <div className='ethio-card p-8'>
            <div className='w-16 h-16 bg-ethio-yellow/20 rounded-full flex items-center justify-center mb-6'>
              <i className='fas fa-cogs text-ethio-yellow text-2xl'></i>
            </div>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-4'>
              Easy Configuration
            </h2>
            <p className='text-ethio-light'>
              Set up and manage your security settings with our user-friendly
              interface, designed for Ethiopian web administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

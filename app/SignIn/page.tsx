export default function SignIn() {
  return (
    <div className='py-20 px-4'>
      <div className='container mx-auto max-w-md'>
        <div className='ethio-card p-8'>
          <h1 className='text-3xl font-bold text-ethio-yellow text-center mb-8'>
            Sign In
          </h1>

          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-ethio-light mb-2'>
                Email Address
              </label>
              <input
                type='email'
                className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                placeholder='you@example.com'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-ethio-light mb-2'>
                Password
              </label>
              <input
                type='password'
                className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                placeholder='••••••••'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input type='checkbox' id='remember' className='mr-2' />
                <label htmlFor='remember' className='text-sm text-ethio-light'>
                  Remember me
                </label>
              </div>
              <a
                href='/forgot-password'
                className='text-sm text-ethio-yellow hover:underline'
              >
                Forgot password?
              </a>
            </div>

            <button
              type='submit'
              className='w-full py-3 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-ethio-yellow/90 transition-colors'
            >
              Sign In
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-ethio-light'>
              Don’t have an account?{' '}
              <a href='/signup' className='text-ethio-yellow hover:underline'>
                Create one
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

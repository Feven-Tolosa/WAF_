export default function SignUp() {
  return (
    <div className='py-20 px-4'>
      <div className='container mx-auto max-w-md'>
        <div className='ethio-card p-8'>
          <h1 className='text-3xl font-bold text-ethio-yellow text-center mb-8'>
            Create Account
          </h1>

          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-ethio-light mb-2'>
                Full Name
              </label>
              <input
                type='text'
                className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                placeholder='Your Name'
              />
            </div>

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

            <div className='flex items-center'>
              <input type='checkbox' id='terms' className='mr-2' />
              <label htmlFor='terms' className='text-sm text-ethio-light'>
                I agree to the Terms and Conditions
              </label>
            </div>

            <button
              type='submit'
              className='w-full py-3 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-ethio-yellow/90 transition-colors'
            >
              Create Account
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-ethio-light'>
              Already have an account?{' '}
              <a href='/login' className='text-ethio-yellow hover:underline'>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <div className='py-20 px-4'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-ethio-yellow text-center mb-16'>
          Contact Us
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-6'>
              Get in Touch
            </h2>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-10 h-10 bg-ethio-yellow/20 rounded-full flex items-center justify-center mr-4'>
                  <i className='fas fa-map-marker-alt text-ethio-yellow'></i>
                </div>
                <div>
                  <h3 className='font-bold text-ethio-yellow'>Address</h3>
                  <p className='text-ethio-light'>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-10 h-10 bg-ethio-yellow/20 rounded-full flex items-center justify-center mr-4'>
                  <i className='fas fa-phone text-ethio-yellow'></i>
                </div>
                <div>
                  <h3 className='font-bold text-ethio-yellow'>Phone</h3>
                  <p className='text-ethio-light'>+251 911 234 567</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-10 h-10 bg-ethio-yellow/20 rounded-full flex items-center justify-center mr-4'>
                  <i className='fas fa-envelope text-ethio-yellow'></i>
                </div>
                <div>
                  <h3 className='font-bold text-ethio-yellow'>Email</h3>
                  <p className='text-ethio-light'>info@ethioguard.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className='ethio-card p-8'>
            <h2 className='text-2xl font-bold text-ethio-yellow mb-6'>
              Send us a Message
            </h2>

            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-ethio-light mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-ethio-light mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-ethio-light mb-2'>
                  Message
                </label>
                <textarea
                  rows={5}
                  className='w-full p-3 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full py-3 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-ethio-yellow/90 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 px-4'>
        <div className='container mx-auto text-center'>
          <div className='max-w-4xl mx-auto'>
            <div className='w-24 h-24 mx-auto mb-8 bg-ethio-yellow rounded-2xl flex items-center justify-center'>
              <i className='fas fa-shield-alt text-ethio-dark text-4xl'></i>
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-ethio-yellow mb-6'>
              EthioGuard
            </h1>

            <p className='text-xl md:text-2xl text-ethio-light mb-8 max-w-2xl mx-auto'>
              Advanced Web Application Firewall protection with Ethiopian
              excellence
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Link
                href='/dashboard'
                className='px-8 py-4 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-ethio-yellow/90 transition-colors flex items-center justify-center'
              >
                <i className='fas fa-play-circle mr-2'></i>
                Get Started
              </Link>

              <Link
                href='/features'
                className='px-8 py-4 border border-ethio-yellow text-ethio-yellow font-bold rounded-lg hover:bg-ethio-yellow/10 transition-colors'
              >
                Learn More
              </Link>
            </div>

            <div className='animate-bounce'>
              <i className='fas fa-chevron-down text-ethio-yellow text-2xl'></i>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-4 bg-ethio-dark/50'>
        <div className='container mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-ethio-yellow text-center mb-16'>
            Why Choose EthioGuard?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='ethio-card p-8 text-center'>
              <div className='w-16 h-16 mx-auto mb-6 bg-ethio-green/20 rounded-full flex items-center justify-center'>
                <i className='fas fa-shield-alt text-ethio-green text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-ethio-yellow mb-4'>
                Advanced Protection
              </h3>
              <p className='text-ethio-light'>
                State-of-the-art security against SQL injection, XSS, DDoS, and
                other web threats
              </p>
            </div>

            {/* Feature 2 */}
            <div className='ethio-card p-8 text-center'>
              <div className='w-16 h-16 mx-auto mb-6 bg-ethio-red/20 rounded-full flex items-center justify-center'>
                <i className='fas fa-bolt text-ethio-red text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-ethio-yellow mb-4'>
                Lightning Fast
              </h3>
              <p className='text-ethio-light'>
                High-performance security that does not slow down your Ethiopian
                web applications
              </p>
            </div>

            {/* Feature 3 */}
            <div className='ethio-card p-8 text-center'>
              <div className='w-16 h-16 mx-auto mb-6 bg-ethio-blue/20 rounded-full flex items-center justify-center'>
                <i className='fas fa-chart-line text-ethio-blue text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-ethio-yellow mb-4'>
                Real-time Analytics
              </h3>
              <p className='text-ethio-light'>
                Comprehensive monitoring and reporting tailored for Ethiopian
                businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-ethio-yellow mb-2'>
                99.9%
              </div>
              <div className='text-ethio-light'>Uptime</div>
            </div>

            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-ethio-yellow mb-2'>
                10K+
              </div>
              <div className='text-ethio-light'>Protected Sites</div>
            </div>

            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-ethio-yellow mb-2'>
                24/7
              </div>
              <div className='text-ethio-light'>Support</div>
            </div>

            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-ethio-yellow mb-2'>
                0.5ms
              </div>
              <div className='text-ethio-light'>Avg. Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-ethio-dark/50'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-ethio-yellow mb-6'>
            Ready to Secure Your Website?
          </h2>

          <p className='text-xl text-ethio-light mb-8 max-w-2xl mx-auto'>
            Join thousands of Ethiopian businesses that trust EthioGuard for
            their web security needs
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/signup'
              className='px-8 py-4 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-ethio-yellow/90 transition-colors'
            >
              Start Free Trial
            </Link>

            <Link
              href='/contact'
              className='px-8 py-4 border border-ethio-yellow text-ethio-yellow font-bold rounded-lg hover:bg-ethio-yellow/10 transition-colors'
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-ethio-yellow text-center mb-16'>
            Trusted by Ethiopian Businesses
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <div className='ethio-card p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-ethio-green rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold'>AA</span>
                </div>
                <div className='ml-4'>
                  <h4 className='font-bold text-ethio-yellow'>
                    Alemayehu Teklu
                  </h4>
                  <p className='text-sm text-ethio-light'>
                    Addis Ababa E-commerce
                  </p>
                </div>
              </div>
              <p className='text-ethio-light'>
                EthioGuard has protected our online store from countless
                attacks. The peace of mind is invaluable.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className='ethio-card p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-ethio-red rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold'>DG</span>
                </div>
                <div className='ml-4'>
                  <h4 className='font-bold text-ethio-yellow'>Dawit Girma</h4>
                  <p className='text-sm text-ethio-light'>
                    Dire Dawa Tech Solutions
                  </p>
                </div>
              </div>
              <p className='text-ethio-light'>
                The real-time analytics helped us identify vulnerabilities we
                did not even know we had.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className='ethio-card p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-ethio-blue rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold'>SM</span>
                </div>
                <div className='ml-4'>
                  <h4 className='font-bold text-ethio-yellow'>Sara Mohammed</h4>
                  <p className='text-sm text-ethio-light'>Hawassa Bank</p>
                </div>
              </div>
              <p className='text-ethio-light'>
                As a financial institution, security is paramount. EthioGuard
                delivers enterprise-grade protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-16 px-4 bg-ethio-dark/50'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Start Your Security Journey Today
          </h2>

          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            Join the growing community of Ethiopian websites protected by
            EthioGuard
          </p>

          <Link
            href='/signup'
            className='px-8 py-4 bg-ethio-yellow text-ethio-dark font-bold rounded-lg hover:bg-white transition-colors inline-block'
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

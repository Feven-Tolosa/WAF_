import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='bg-ethio-dark/80 border-t border-ethio-yellow py-8 mt-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-10 h-10 rounded-lg bg-ethio-yellow flex items-center justify-center'>
                  <span className='fas fa-shield-alt text-ethio-dark'></span>
                </div>
                <h2 className='text-xl font-bold text-ethio-yellow'>
                  EthioGuard WAF
                </h2>
              </div>
              <p className='text-ethio-light mb-4 max-w-md'>
                Protecting Ethiopian web applications with advanced firewall
                technology. Our solution combines modern security with Ethiopian
                cultural heritage.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-ethio-light hover:text-ethio-yellow'
                >
                  <span className='fab fa-facebook-f'></span>
                </a>
                <a
                  href='#'
                  className='text-ethio-light hover:text-ethio-yellow'
                >
                  <span className='fab fa-twitter'></span>
                </a>
                <a
                  href='#'
                  className='text-ethio-light hover:text-ethio-yellow'
                >
                  <span className='fab fa-linkedin-in'></span>
                </a>
                <a
                  href='#'
                  className='text-ethio-light hover:text-ethio-yellow'
                >
                  <span className='fab fa-telegram'></span>
                </a>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-ethio-yellow mb-4'>
                Quick Links
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    className='text-ethio-light hover:text-ethio-yellow'
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href='/firewall'
                    className='text-ethio-light hover:text-ethio-yellow'
                  >
                    Firewall Rules
                  </Link>
                </li>
                <li>
                  <Link
                    href='/analytics'
                    className='text-ethio-light hover:text-ethio-yellow'
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href='/reports'
                    className='text-ethio-light hover:text-ethio-yellow'
                  >
                    Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href='/settings'
                    className='text-ethio-light hover:text-ethio-yellow'
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-ethio-yellow mb-4'>
                Contact Us
              </h3>
              <ul className='space-y-2'>
                <li className='text-ethio-light'>Addis Ababa, Ethiopia</li>
                <li className='text-ethio-light'>+251 911 234 567</li>
                <li className='text-ethio-light'>info@ethioguard.com</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-ethio-yellow/20 mt-8 pt-6 text-center'>
            <p className='text-ethio-light text-sm'>
              &copy; {new Date().getFullYear()} EthioGuard WAF. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

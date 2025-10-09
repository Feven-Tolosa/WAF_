'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 bg-ethio-dark/90 backdrop-blur-md border-b border-ethio-yellow'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 rounded-lg bg-ethio-yellow flex items-center justify-center'>
            <i className='fas fa-shield-alt text-ethio-dark'></i>
          </div>
          <Link href='/' className='text-xl font-bold text-ethio-yellow'>
            EthioGuard
          </Link>
          {/* <h1 className='text-xl font-bold text-ethio-yellow'>EthioGuard</h1> */}
        </div>

        <nav className='hidden md:flex space-x-8'>
          <Link
            href='/dashboard'
            className={`nav-item ${
              pathname === '/dashboard'
                ? 'text-ethio-yellow font-medium'
                : 'text-gray-400 hover:text-ethio-yellow'
            }`}
          >
            Dashboard
          </Link>
          <Link
            href='/firewall'
            className={`nav-item ${
              pathname === '/firewall'
                ? 'text-ethio-yellow font-medium'
                : 'text-gray-400 hover:text-ethio-yellow'
            }`}
          >
            Firewall
          </Link>
          <Link
            href='/analytics'
            className={`nav-item ${
              pathname === '/analytics'
                ? 'text-ethio-yellow font-medium'
                : 'text-gray-400 hover:text-ethio-yellow'
            }`}
          >
            Analytics
          </Link>
          <Link
            href='/reports'
            className={`nav-item ${
              pathname === '/reports'
                ? 'text-ethio-yellow font-medium'
                : 'text-gray-400 hover:text-ethio-yellow'
            }`}
          >
            Reports
          </Link>
          <Link
            href='/settings'
            className={`nav-item ${
              pathname === '/settings'
                ? 'text-ethio-yellow font-medium'
                : 'text-gray-400 hover:text-ethio-yellow'
            }`}
          >
            Settings
          </Link>
        </nav>

        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className='w-3 h-3 bg-ethio-red rounded-full absolute -top-1 -right-1'></div>
            <button className='p-2 rounded-lg bg-ethio-dark/70 hover:bg-ethio-dark border border-ethio-yellow/20'>
              <i className='fas fa-bell text-ethio-yellow'></i>
            </button>
          </div>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <div className='w-9 h-9 rounded-full bg-gradient-to-r from-ethio-green to-ethio-blue flex items-center justify-center'>
              <span className='font-semibold text-white'>A</span>
            </div>
            <Link href='/Admin'>
              <span className='text-sm font-medium text-ethio-light'>
                Admin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

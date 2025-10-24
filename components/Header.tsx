'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 bg-ethio-dark/90 backdrop-blur-md border-b border-ethio-yellow'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        {/* === Left: Logo === */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 rounded-lg bg-ethio-yellow flex items-center justify-center'>
            <i className='fas fa-shield-alt text-ethio-dark'></i>
          </div>
          <Link href='/' className='text-xl font-bold text-ethio-yellow'>
            EthioGuard
          </Link>
        </div>

        {/* === Center: Nav links === */}
        <nav className='hidden md:flex space-x-8'>
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/firewall', label: 'Firewall' },
            { href: '/analytics', label: 'Analytics' },
            { href: '/reports', label: 'Reports' },
            { href: '/settings', label: 'Settings' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-item ${
                pathname === href
                  ? 'text-ethio-yellow font-medium'
                  : 'text-gray-400 hover:text-ethio-yellow'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* === Right: Notifications + Auth === */}
        <div className='flex items-center space-x-4'>
          {/* Notification bell */}
          <div className='relative'>
            <div className='w-3 h-3 bg-ethio-red rounded-full absolute -top-1 -right-1'></div>
            <button className='p-2 rounded-lg bg-ethio-dark/70 hover:bg-ethio-dark border border-ethio-yellow/20'>
              <i className='fas fa-bell text-ethio-yellow'></i>
            </button>
          </div>

          {/* === Clerk Auth Section === */}
          <SignedOut>
            <Link
              href='/signin'
              className='px-4 py-2 rounded-lg bg-ethio-yellow text-ethio-dark font-semibold hover:bg-ethio-light/50 transition'
            >
              Sign In
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton
              afterSignOutUrl='/sign-out'
              appearance={{
                elements: {
                  avatarBox:
                    'w-9 h-9 border-2 border-ethio-yellow rounded-full',
                  userButtonPopoverCard:
                    'bg-ethio-dark text-ethio-light border border-ethio-yellow/20',
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default Header

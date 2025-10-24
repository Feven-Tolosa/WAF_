'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div
        className='
          w-full max-w-md p-8 rounded-xl
          bg-black/30 backdrop-blur-md border border-ethio-yellow/30
          shadow-lg
        '
      >
        <h1 className='text-3xl font-bold text-ethio-yellow text-center mb-8'>
          Welcome to EthioGuard👋
        </h1>

        <SignIn
          path='/signin'
          routing='path'
          signUpUrl='/signup'
          appearance={{
            elements: {
              card: 'bg-transparent shadow-none',
              formButtonPrimary:
                'bg-ethio-yellow text-ethio-dark font-semibold hover:bg-ethio-yellow/90 transition-colors',
              formFieldInput:
                'bg-white/80 border border-ethio-yellow/20 text-black rounded p-3 placeholder:text-gray-500',
              formFieldLabel: 'text-black font-medium',
              footerActionLink: 'text-ethio-yellow hover:underline font-medium',
            },
            variables: {
              colorText: '#000000',
              colorPrimary: '#ffcc00',
            },
          }}
        />
      </div>
    </div>
  )
}

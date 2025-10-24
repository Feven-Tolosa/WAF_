'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-ethio-dark text-white'>
      <div className='p-8 bg-black/40 rounded-xl backdrop-blur-lg border border-ethio-yellow/30 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-ethio-yellow text-center mb-8'>
          Welcome to EthioGuard👋
        </h1>

        <SignIn
          path='/sign-in'
          routing='path'
          signUpUrl='/sign-up'
          appearance={{
            elements: {
              formButtonPrimary:
                'bg-ethio-yellow text-ethio-dark font-semibold hover:bg-ethio-yellow/90 transition-colors',
              formFieldInput:
                'bg-ethio-dark/50 border border-ethio-yellow/20 text-ethio-light rounded p-3',
              formFieldLabel: 'text-ethio-light font-medium',
              footerActionLink: 'text-ethio-yellow hover:underline',
            },
            variables: {
              colorText: '#f5f5f5',
              colorPrimary: '#ffcc00',
            },
          }}
        />
      </div>
    </div>
  )
}

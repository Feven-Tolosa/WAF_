'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='py-20 px-4'>
      <div className='container mx-auto max-w-md'>
        <div className='ethio-card p-8 bg-ethio-dark/60 border border-ethio-yellow/30 rounded-xl shadow-lg backdrop-blur'>
          <h1 className='text-3xl font-bold text-ethio-yellow text-center mb-8'>
            Create Account
          </h1>

          <SignUp
            path='/sign-up'
            routing='path'
            signInUrl='/sign-in'
            appearance={{
              elements: {
                formButtonPrimary:
                  'bg-ethio-yellow text-ethio-dark font-semibold hover:bg-ethio-yellow/90 transition-colors',
                card: 'bg-transparent shadow-none',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                footerActionLink:
                  'text-ethio-yellow hover:underline font-medium',
                formFieldInput:
                  'bg-ethio-dark/50 border border-ethio-yellow/20 text-ethio-light rounded p-3',
                formFieldLabel: 'text-ethio-light font-medium',
              },
              variables: {
                colorText: '#f5f5f5',
                colorPrimary: '#ffcc00',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

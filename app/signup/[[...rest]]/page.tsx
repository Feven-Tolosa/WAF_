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
            path='/signup'
            routing='path'
            signInUrl='/signin'
            appearance={{
              elements: {
                card: 'bg-transparent shadow-none',
                formButtonPrimary:
                  'bg-ethio-yellow text-ethio-dark font-semibold hover:bg-ethio-yellow/90 transition-colors',
                formFieldInput:
                  'bg-white/80 border border-ethio-yellow/20 text-black rounded p-3 placeholder:text-gray-500',
                formFieldLabel: 'text-black font-medium',
                footerActionLink:
                  'text-ethio-yellow hover:underline font-medium',
              },
              variables: {
                colorText: '#000000',
                colorPrimary: '#ffcc00',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

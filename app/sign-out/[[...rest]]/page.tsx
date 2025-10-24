'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useClerk } from '@clerk/nextjs'

export default function SignOutPage() {
  const router = useRouter()
  const { signOut } = useClerk() // useClerk gives access to signOut

  useEffect(() => {
    signOut().then(() => {
      // redirect to home after 3 seconds
      setTimeout(() => router.push('/'), 3000)
    })
  }, [signOut, router])

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md p-8 rounded-xl bg-ethio-dark/50  backdrop-blur-md border border-ethio-yellow/30 shadow-lg text-center'>
        <h1 className='text-3xl font-bold text-ethio-yellow mb-4'>
          You have signed out
        </h1>
        <p className='text-black'>Redirecting to home...</p>
      </div>
    </div>
  )
}

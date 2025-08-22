'use client'

import { useEffect, useState } from 'react'

const VideoBackground = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div className='video-bg-container'>
      <video autoPlay muted loop playsInline>
        <source
          src={
            darkMode
              ? '../public/videos/darkMV.webm'
              : '../public/videos/darkV.webm'
          }
          type='video/webm'
        />
      </video>
    </div>
  )
}

export default VideoBackground

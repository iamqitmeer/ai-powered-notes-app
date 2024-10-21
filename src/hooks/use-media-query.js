import { useEffect, useState } from 'react'

export function useMediaQuery() {
  const [device, setDevice] = useState(null)

  const [dimensions, setDimensions] = useState(null)

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia('(max-width:640px)').matches) {
        setDevice('mobile')
      } else if (
        window.matchMedia('(min-width:640px) and (max-width:1024px)').matches
      ) {
        setDevice('tablet')
      } else {
        setDevice('desktop')
      }
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    }

    // Initial detection
    checkDevice()

    // Listener for windows resize
    window.addEventListener('resize', checkDevice)

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  }
}
import { useRef, useCallback } from 'react'

export const useSound = () => {
  const isMuted = useRef(false)

  const playSound = useCallback((soundName) => {
    if (!isMuted.current) {
      console.log(`🔊 Playing sound: ${soundName}`)
      // Nanti tambahin audio actual
    }
  }, [])

  const toggleMute = useCallback(() => {
    isMuted.current = !isMuted.current
  }, [])

  return { playSound, toggleMute, isMuted: isMuted.current }
}

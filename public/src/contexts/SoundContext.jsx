import React, { createContext, useContext, useRef } from 'react'

const SoundContext = createContext()

export const useSound = () => useContext(SoundContext)

export const SoundProvider = ({ children }) => {
  const isMuted = useRef(false)

  const playSound = (soundName) => {
    console.log(`Play sound: ${soundName}`)
  }

  return (
    <SoundContext.Provider value={{ playSound, isMuted: isMuted.current }}>
      {children}
    </SoundContext.Provider>
  )
}

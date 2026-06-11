import React, { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'

const GameContext = createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
  const { user } = useAuth()
  const [playerProgress, setPlayerProgress] = useState({ solvedCases: [], level: 1, experience: 0 })

  return (
    <GameContext.Provider value={{ playerProgress, setPlayerProgress }}>
      {children}
    </GameContext.Provider>
  )
}

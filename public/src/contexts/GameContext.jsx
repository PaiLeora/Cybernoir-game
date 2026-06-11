import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { db, doc, getDoc, setDoc, updateDoc } from '../services/firebase'

const GameContext = createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
  const { user } = useAuth()
  const [playerProgress, setPlayerProgress] = useState({
    solvedCases: [],
    currentCase: null,
    totalScore: 0,
    level: 1,
    experience: 0,
    achievements: []
  })

  useEffect(() => {
    if (user) {
      loadPlayerProgress()
    }
  }, [user])

  const loadPlayerProgress = async () => {
    if (!user) return
    
    try {
      const progressRef = doc(db, 'playerProgress', user.uid)
      const progressDoc = await getDoc(progressRef)
      
      if (progressDoc.exists()) {
        setPlayerProgress(progressDoc.data())
      } else {
        await setDoc(progressRef, playerProgress)
      }
    } catch (error) {
      console.error('Error loading progress:', error)
    }
  }

  const saveProgress = async () => {
    if (!user) return
    
    try {
      const progressRef = doc(db, 'playerProgress', user.uid)
      await updateDoc(progressRef, {
        ...playerProgress,
        lastUpdated: new Date().toISOString()
      })
    } catch (error) {
      console.error('Error saving progress:', error)
    }
  }

  return (
    <GameContext.Provider value={{ playerProgress, setPlayerProgress, saveProgress }}>
      {children}
    </GameContext.Provider>
  )
}

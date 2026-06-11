import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [dots, setDots] = useState('')
  const [loadingText, setLoadingText] = useState('Initializing System')

  const loadingMessages = [
    'Initializing System', 'Connecting to Neural Network', 'Decrypting Database',
    'Loading Evidence Files', 'Calibrating Scanner', 'Activating Cybernetic Interface',
    'Establishing Secure Connection', 'Loading Case Files', 'Almost Ready', 'Entering Cyber Noir Mode'
  ]

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length
      setLoadingText(loadingMessages[messageIndex])
    }, 2000)

    return () => {
      clearInterval(dotInterval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="relative text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-4 border-[#00d4ff]/30"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-2 rounded-full border-2 border-[#00d4ff]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#00d4ff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
              </svg>
            </div>
          </div>
        </motion.div>
        <h2 className="text-2xl font-cyber text-[#00d4ff] text-glow">
          {loadingText}<span className="inline-block w-6">{dots}</span>
        </h2>
        <div className="w-64 mx-auto mt-6">
          <div className="h-1 bg-[#0f0f1a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] rounded-full"
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6 font-mono">Tip: Connect evidence to uncover the truth</p>
      </div>
    </div>
  )
}

export default LoadingScreen

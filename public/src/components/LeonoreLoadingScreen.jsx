import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LeonoreLoadingScreen = () => {
  const [currentTech, setCurrentTech] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Connecting to Leonore Systems')

  const leonoreTeam = [
    { name: 'Dr. Elena Vance', role: 'Lead Investigator', icon: '🔬', color: '#00d4ff' },
    { name: 'Marcus "Neon" Chen', role: 'AI Specialist', icon: '🤖', color: '#00ffcc' },
    { name: 'Sarah K. Winters', role: 'Forensic Analyst', icon: '🔍', color: '#b000ff' },
    { name: 'Lt. James Rodriguez', role: 'Field Operative', icon: '⚡', color: '#ff0040' },
    { name: 'Dr. Yuki Tanaka', role: 'Data Scientist', icon: '📊', color: '#00ff88' },
    { name: 'Agent Nyx', role: 'Cyber Security', icon: '🛡️', color: '#ff00ff' }, 
    { name: 'Pai leonore', role:'Developer', icon: '🪯', color: '#ff00ff' }
  ]

  const techMessages = [
    'Initiating Leonore Quantum Core...', 'Loading Neural Interface...', 'Decrypting Case Database...',
    'Calibrating Investigation Tools...', 'Syncing with Evidence Network...', 'Activating AI Assistant...',
    'Loading Threat Assessment Module...', 'Preparing Digital Forensics Kit...', 'Establishing Secure Channel...',
    'Leonore System Online!'
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => prev >= 100 ? 100 : prev + 2)
    }, 80)

    const teamInterval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % leonoreTeam.length)
    }, 1500)

    let msgIndex = 0
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % techMessages.length
      setStatusMessage(techMessages[msgIndex])
    }, 1800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(teamInterval)
      clearInterval(msgInterval)
    }
  }, [])

  const currentMember = leonoreTeam[currentTech]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a0a2e] flex items-center justify-center z-50">
      <div className="relative z-10 max-w-md w-full mx-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.3)', '0 0 40px rgba(0,212,255,0.6)', '0 0 20px rgba(0,212,255,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#b000ff]/20 flex items-center justify-center border border-[#00d4ff]"
            >
              <span className="text-5xl font-cyber font-bold bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] bg-clip-text text-transparent">L</span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl border-2 border-[#00d4ff]"
            />
          </div>
          <h1 className="text-3xl font-cyber font-bold mt-4">
            <span className="text-[#00d4ff] text-glow">LEONORE</span>
            <span className="text-white"> TECH TEAM</span>
          </h1>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-effect p-6 mb-6 text-center"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-5xl mb-3">
              {currentMember.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white">{currentMember.name}</h3>
            <p className="text-sm" style={{ color: currentMember.color }}>{currentMember.role}</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-gray-400">Active on case</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-[#00d4ff] font-mono">{statusMessage}</span>
            <span className="text-gray-400 font-mono">{loadingProgress}%</span>
          </div>
          <div className="h-2 bg-[#0f0f1a] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d4ff] via-[#00ffcc] to-[#b000ff]"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="flex justify-center gap-4 text-[10px] font-mono">
            <span className="text-[#00d4ff]">⚡ LEONORE v2.0</span>
            <span className="text-gray-500">|</span>
            <span className="text-[#00ffcc]">🔒 SECURE LINK</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeonoreLoadingScreen

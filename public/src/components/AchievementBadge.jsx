import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const AchievementBadge = ({ title, description, unlocked }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`cyber-card text-center p-4 ${!unlocked && 'opacity-50'}`}
    >
      <Award className={`w-8 h-8 mx-auto mb-2 ${unlocked ? 'text-yellow-500' : 'text-gray-600'}`} />
      <h3 className="text-sm font-bold">{title}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </motion.div>
  )
}

export default AchievementBadge

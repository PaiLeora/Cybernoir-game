import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Award, Clock, Target } from 'lucide-react'

const CaseCard = ({ case: caseItem, isSolved }) => {
  const navigate = useNavigate()
  
  const difficultyColor = {
    Easy: 'text-green-500',
    Medium: 'text-yellow-500',
    Hard: 'text-orange-500',
    Expert: 'text-red-500'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="cyber-card cursor-pointer"
      onClick={() => navigate(`/case/${caseItem.id}`)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-cyber text-[#00d4ff]">{caseItem.title}</h3>
        {isSolved && <Award className="w-5 h-5 text-yellow-500" />}
      </div>
      <p className="text-sm text-gray-400 mb-3">{caseItem.description}</p>
      <div className="flex justify-between items-center text-xs">
        <span className={`font-mono ${difficultyColor[caseItem.difficulty]}`}>
          <Target className="w-3 h-3 inline mr-1" />
          {caseItem.difficulty}
        </span>
        <span className="text-gray-500">
          <Clock className="w-3 h-3 inline mr-1" />
          {caseItem.estimatedTime}
        </span>
      </div>
    </motion.div>
  )
}

export default CaseCard

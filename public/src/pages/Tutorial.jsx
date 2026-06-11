import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { Search, Link2, FileText, Trophy, ChevronLeft, ChevronRight } from 'lucide-react'

const Tutorial = () => {
  const [step, setStep] = useState(0)

  const steps = [
    { title: "Evidence Board", icon: <Link2 className="w-12 h-12 text-[#00d4ff]" />, content: "Drag and drop clues to connect them. Draw lines between related evidence to discover patterns." },
    { title: "Search Simulator", icon: <Search className="w-12 h-12 text-[#00d4ff]" />, content: "Use the search engine to find articles, social media posts, and documents related to the case." },
    { title: "Digital Forensics", icon: <FileText className="w-12 h-12 text-[#00d4ff]" />, content: "Analyze email conversations, chat logs, and file metadata for hidden information." },
    { title: "Solving Cases", icon: <Trophy className="w-12 h-12 text-[#00d4ff]" />, content: "When confident, submit your accusation. Wrong accusations cost points!" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="cyber-card text-center">
            <div className="mb-6">{steps[step].icon}</div>
            <h2 className="text-2xl font-cyber text-[#00d4ff] mb-4">{steps[step].title}</h2>
            <p className="text-gray-300 mb-8">{steps[step].content}</p>
            <div className="flex justify-between items-center">
              <button onClick={() => setStep(step - 1)} disabled={step === 0} className={`cyber-button ${step === 0 ? 'opacity-50' : ''}`}>
                <ChevronLeft className="w-4 h-4 inline" /> Previous
              </button>
              <div className="flex gap-2">
                {steps.map((_, idx) => <div key={idx} className={`w-2 h-2 rounded-full ${idx === step ? 'bg-[#00d4ff] w-4' : 'bg-gray-600'}`} />)}
              </div>
              <button onClick={() => setStep(step + 1)} disabled={step === steps.length - 1} className={`cyber-button ${step === steps.length - 1 ? 'opacity-50' : ''}`}>
                Next <ChevronRight className="w-4 h-4 inline" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Tutorial

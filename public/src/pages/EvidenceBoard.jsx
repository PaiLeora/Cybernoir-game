import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const EvidenceBoard = () => {
  const { caseId } = useParams()
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="cyber-card text-center">
          <h1 className="text-2xl font-cyber text-[#00d4ff]">Evidence Board - Case #{caseId}</h1>
          <p className="text-gray-400 mt-4">Drag and drop evidence here...</p>
        </div>
      </div>
    </div>
  )
}

export default EvidenceBoard

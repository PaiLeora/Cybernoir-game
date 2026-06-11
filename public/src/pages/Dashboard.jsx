import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import CaseCard from '../components/CaseCard'
import { Search, Filter } from 'lucide-react'

const cases = [
  { id: 1, title: "The Neon Nights Murder", description: "A tech CEO found dead in mysterious circumstances.", difficulty: "Easy", estimatedTime: "30 mins" },
  { id: 2, title: "The Phantom Hacker", description: "Cyber attacks targeting government systems.", difficulty: "Medium", estimatedTime: "45 mins" },
  { id: 3, title: "The Missing AI Researcher", description: "A scientist disappears without a trace.", difficulty: "Hard", estimatedTime: "60 mins" },
]

const Dashboard = () => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCases = cases.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-cyber font-bold">
            Welcome back, <span className="text-[#00d4ff]">{user?.displayName}</span>
          </h1>
          <p className="text-gray-400">Ready to solve some mysteries?</p>
        </div>
        
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="Search cases..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="cyber-input w-full pl-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map(caseItem => (
            <CaseCard key={caseItem.id} case={caseItem} isSolved={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

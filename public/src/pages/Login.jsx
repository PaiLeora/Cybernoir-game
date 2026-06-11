import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import { Trophy, Target, Zap } from 'lucide-react'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="cyber-card text-center mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] rounded-full flex items-center justify-center text-4xl font-bold text-[#0a0a0f] mb-4">
              {user?.displayName?.[0]?.toUpperCase() || 'D'}
            </div>
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-400">{user?.email}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="cyber-card text-center">
              <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs text-gray-400">Cases Solved</div>
            </div>
            <div className="cyber-card text-center">
              <Zap className="w-6 h-6 text-[#00d4ff] mx-auto mb-2" />
              <div className="text-2xl font-bold">1</div>
              <div className="text-xs text-gray-400">Level</div>
            </div>
            <div className="cyber-card text-center">
              <Target className="w-6 h-6 text-[#00ffcc] mx-auto mb-2" />
              <div className="text-2xl font-bold">0%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

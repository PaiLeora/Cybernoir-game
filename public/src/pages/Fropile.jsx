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
              {user?.displayName?.[0]?.toUpperCase() ||

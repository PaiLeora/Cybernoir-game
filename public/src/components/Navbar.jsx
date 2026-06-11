import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, User, Trophy, Home, HelpCircle } from 'lucide-react'

const Navbar = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav className="glass-effect sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-cyber font-bold">
          <span className="text-[#00d4ff]">CYBER</span>
          <span className="text-white">NOIR</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-400 hover:text-[#00d4ff] transition">
            <Home className="w-5 h-5" />
          </Link>
          <Link to="/tutorial" className="text-gray-400 hover:text-[#00d4ff] transition">
            <HelpCircle className="w-5 h-5" />
          </Link>
          <Link to="/profile" className="text-gray-400 hover:text-[#00d4ff] transition">
            <User className="w-5 h-5" />
          </Link>
          <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

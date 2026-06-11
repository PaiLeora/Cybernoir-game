import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(email, password)
    if (result.success) {
      navigate('/')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="cyber-card w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cyber font-bold">
            <span className="text-[#00d4ff]">CYBER</span>
            <span className="text-white">NOIR</span>
          </h1>
          <p className="text-gray-400 mt-2">Digital Detective Login</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="cyber-input w-full" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="cyber-input w-full" required />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="cyber-button w-full">Login</button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <Link to="/register" className="text-[#00d4ff]">Register</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login

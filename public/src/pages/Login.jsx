import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const result = await login(email, password)
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="glass-effect w-full max-w-md p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cyber font-bold">
            <span className="text-[#00d4ff]">CYBER</span>
            <span className="text-white">NOIR</span>
          </h1>
          <p className="text-gray-400 mt-2">Digital Detective Login</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="cyber-input w-full" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="cyber-input w-full" 
            required 
          />
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded p-2">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}
          <button 
            type="submit" 
            disabled={loading}
            className="cyber-button w-full disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <Link to="/register" className="text-[#00d4ff]">Register</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login

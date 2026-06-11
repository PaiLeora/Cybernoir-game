import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import LoadingScreen from './components/LoadingScreen'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Tutorial from './pages/Tutorial'
import CaseInvestigation from './pages/CaseInvestigation'
import EvidenceBoard from './pages/EvidenceBoard'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/tutorial" element={<PrivateRoute><Tutorial /></PrivateRoute>} />
        <Route path="/case/:caseId" element={<PrivateRoute><CaseInvestigation /></PrivateRoute>} />
        <Route path="/evidence/:caseId" element={<PrivateRoute><EvidenceBoard /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App

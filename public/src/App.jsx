import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import LoadingScreen from './components/LoadingScreen'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const CaseInvestigation = lazy(() => import('./pages/CaseInvestigation'))
const EvidenceBoard = lazy(() => import('./pages/EvidenceBoard'))
const Profile = lazy(() => import('./pages/Profile'))
const Tutorial = lazy(() => import('./pages/Tutorial'))

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  
  if (loading) return <LoadingScreen />
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <div className="min-h-screen bg-cyber-black bg-noise">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/case/:caseId" element={
            <PrivateRoute>
              <CaseInvestigation />
            </PrivateRoute>
          } />
          <Route path="/evidence/:caseId" element={
            <PrivateRoute>
              <EvidenceBoard />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/tutorial" element={
            <PrivateRoute>
              <Tutorial />
            </PrivateRoute>
          } />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

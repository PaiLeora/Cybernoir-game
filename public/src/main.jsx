import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { GameProvider } from './contexts/GameContext'
import { SoundProvider } from './contexts/SoundContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GameProvider>
          <SoundProvider>
            <App />
            <Toaster position="top-right" />
          </SoundProvider>
        </GameProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { GameProvider } from './contexts/GameContext'
import { SoundProvider } from './contexts/SoundContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <AuthProvider>
          <GameProvider>
            <SoundProvider>
              <App />
              <Toaster 
                position="top-right"
                toastOptions={{
                  style: {
                    background: '#1a1a2e',
                    color: '#00d4ff',
                    border: '1px solid #00d4ff',
                  },
                }}
              />
            </SoundProvider>
          </GameProvider>
        </AuthProvider>
      </DndProvider>
    </BrowserRouter>
  </React.StrictMode>
)

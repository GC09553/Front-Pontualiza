import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const container = document.getElementById('root') || document.getElementById('app')

if (!container) {
  throw new Error('Root element #root or #app was not found')
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
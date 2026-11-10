import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css'

const appElement = document.getElementById('app')

if (!appElement) {
  throw new Error('Elemento raiz #app não encontrado.')
}

const root = ReactDOM.createRoot(appElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
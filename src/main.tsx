import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

const container = document.getElementById('app')

if (!container) {
  throw new Error('Root element #app was not found')
}

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
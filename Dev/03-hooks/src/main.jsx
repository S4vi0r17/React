import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import CounterApp from './CounterApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
  </React.StrictMode>,
)

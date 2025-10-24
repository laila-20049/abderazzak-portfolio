import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // <- **important** : charge Tailwind / CSS ici

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
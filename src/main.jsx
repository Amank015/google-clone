//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateContextProvider } from './contexts/StateContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StateContextProvider>
  <Router>
    <App />
  </Router>
  </StateContextProvider>
 
)

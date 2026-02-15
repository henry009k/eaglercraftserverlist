// Import React's StrictMode for highlighting potential problems in the application
import { StrictMode } from 'react'
// Import createRoot to render the React application
import { createRoot } from 'react-dom/client'
// Import global CSS styles
import './index.css'
// Import the main App component
import App from './App.tsx'

// Create the root element and render the application
// StrictMode helps identify potential issues during development
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

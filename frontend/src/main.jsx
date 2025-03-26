import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App store={store} />
    </StrictMode>
  </BrowserRouter>
)


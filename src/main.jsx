import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Contexts/ThemeContexts.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>

  </BrowserRouter>
)

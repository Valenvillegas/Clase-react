import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactContextsProvider from './Contexts/ContactContexts'
import ContactDetailContextProvider from './Contexts/ContactDetailContext'
import ContactMesaggeScreen from './Screens/ContactMesaggeScreen/ContactMesaggeScreen'
function App() {
  return (
    <div>
      {/* contactContext config */}
      <Routes>
        <Route element={<ContactContextsProvider />}>
          <Route
            path="/" element={<HomeScreen />}
          />
          <Route path='/contact/:contact_id'
            element={<ContactDetailContextProvider />}>
            <Route
              path="/contact/:contact_id"
              element={<ContactMesaggeScreen />} 
              />
          </Route>

        </Route>
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </div>
  )
}

export default App

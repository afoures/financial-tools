import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { AppProvider } from './AppContext'

import Menu from './components/Menu'
import Home from './components/Home'
import EarlyRetirement from './components/EarlyRetirement'

const Content = (props) => (
    <main {...props} >
        <Outlet />
        {/*
        <aside>
        </aside>
        */}
    </main>
)

function App() {
  return (
      <AppProvider>
        <Menu />
        <Routes>
            <Route path='/*' element={<Content />} >
                <Route path='' element={<Home />} />
                <Route path='early-retirement' element={<EarlyRetirement />} />
            </Route>
        </Routes>
      </AppProvider>
  )
}

export default App

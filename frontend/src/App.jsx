import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => (
  <div className="min-h-screen bg-navy text-white">
    <Navbar />
    <main className="p-4">
      <Outlet />
    </main>
  </div>
)

export default App

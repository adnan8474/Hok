import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="bg-teal p-4 flex gap-4">
    <Link to="/" className="font-bold">POCTIFY AI Desk</Link>
    <Link to="/desk">Desk</Link>
    <Link to="/docs">Docs</Link>
    <Link to="/upload">Upload</Link>
  </nav>
)

export default Navbar

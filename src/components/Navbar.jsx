import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="#" class="nav-logo">Joytify</a>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mymusic">MyMusic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/playlist">Playlist</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/help">Help</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
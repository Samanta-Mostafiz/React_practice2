import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/blog"className="nav-link">Blog</NavLink>
        <NavLink to="/about"className="nav-link">About</NavLink>
        <NavLink to="/addblog"className="nav-link">Add Blog</NavLink>

      </nav>
    </div>
  )
}

export default Nav

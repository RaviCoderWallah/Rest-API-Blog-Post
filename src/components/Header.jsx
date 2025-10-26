import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>React Blog</h1>
      <nav>
        <ul className='navbar-list'>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
        </ul>
      </nav>
      <button className='new-post-btn'>New Post</button>
    </div>
  )
}

export default Header
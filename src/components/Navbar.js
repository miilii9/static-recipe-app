import React from 'react'
import { NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

// style
import './Navbar.css'


export default function NavBar() {
    const { color , changeColor } = useTheme();
  return (
      <div className='navbar' style={{background:color}}>
          <nav>
              <NavLink className='brand' to='/'>Cooking Milad</NavLink>
              <NavLink to='/create'>Create Recipe</NavLink>
          </nav>
      </div>
  )
}

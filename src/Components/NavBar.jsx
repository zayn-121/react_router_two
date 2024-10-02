import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navdiv'>
        <ul className='navul'>
           <Link to="/"> <li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div className='inputdiv'>
            <input type="text" placeholder='Search'/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default NavBar
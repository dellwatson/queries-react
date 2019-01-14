import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = ()  => {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="brand-logo">  logo</div>
        <div className="container">
          <ul className="left">
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/fav'>Favourite</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}


export default connect(null,null)(Navbar);

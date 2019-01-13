import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = ()  => {
    return (
      <div className="nav-wrapper">
        <div className="container">
          <ul>
            <li><NavLink to='/' className="left">Home</NavLink></li>
            <li><NavLink to='/fav'className="right">Favourite</NavLink></li>
          </ul>
        </div>
      </div>
    )
}


export default connect(null,null)(Navbar);

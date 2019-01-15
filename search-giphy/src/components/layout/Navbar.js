import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = (props)  => {

  const { fav } = props
  
    return (
      <nav className="nav-wrapper white">
        <div className="container black-text">
          <div className="v-brand z-depth-1">
            <ul className="left brand">Galler</ul>
            <ul className="left brand-easy">easy</ul>
          </div>
          <div className="container">
            <ul className="left ">
              <li><NavLink to='/' className="nav-home black-text" >Home</NavLink></li>
              <li><NavLink to='/favourite'className="black-text">Favourite</NavLink></li>
              <li className="black-text">{fav.length>0 ? `(${fav.length})`:null} </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    fav: state.fav.faved
  }
}

export default connect(mapStateToProps)(Navbar);

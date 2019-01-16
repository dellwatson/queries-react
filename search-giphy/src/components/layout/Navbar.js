import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = ({ fav, errFetch, errState })  => {

    return (
      <nav className="nav-wrapper white ">
        <div className="container">
            <div className="v-brand z-depth-1">
              <ul className="left brand">Galler</ul>
              <ul className="left brand-easy ">easy</ul>
              <ul className="left brand-line ">|</ul>
              <ul className="left ">
                <li><NavLink to='/' className="nav-home " >Search</NavLink></li>
                <li><NavLink to='/favourite'className="nav-fav">Favourites {fav.length>0 ? `(${fav.length})`:null} </NavLink></li>
              </ul>
            {errState?<ul className="right">{errFetch}</ul>:null}
          </div>
        </div>
      </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    fav: state.fav.faved,
    errFetch : state.show.error,
    errState : state.show.errState
  }
}

export default connect(mapStateToProps)(Navbar);

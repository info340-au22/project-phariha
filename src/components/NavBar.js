import React from 'react';
import {NavLink} from 'react-router-dom'

export function NavBar(props) {

  return (
    <nav className="header nav-bar navbar navbar-expand-md navbar-expand-lg fixed-absolute">
         <div className="fluid-container text-white">
                <ul className="navbar-nav me-auto mb-lg-0 d-inline">
                    <li className="nav-item px-3"><NavLink to="/home">Home</NavLink></li>
                    <li className="nav-item px-3"><NavLink to="/major">Major</NavLink></li>
                    <li className="nav-item px-3"><NavLink to="/posts">Posts</NavLink></li>
                </ul>
        </div>
    </nav>
  )
}
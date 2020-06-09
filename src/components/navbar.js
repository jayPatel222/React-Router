import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = ()=> {
    return (
        <nav className="nav-wrapper red draken-3">
          <div className="conatiner">
              <a href="" className="brand-logo"><Link to="/">strykr</Link></a>
              <ul className="right">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </div>
        </nav>
    )
}
export default Navbar;
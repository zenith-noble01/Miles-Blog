import React from 'react'
import "./navbar.css"
import icon from "../images/zenith.png"
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <div className="navbar__left">
               <p>Miles Blog</p>
            </div>
            <div className="navbar__center">
                <ul className="navbar__center__links">
                    <Link to="/">
                        <li className="navbar__link">Home</li>
                    </Link>
                    <li className="navbar__link">About</li>
                    <Link to="/write">
                        <li className="navbar__link">Write</li>
                    </Link>
                    <li className="navbar__link">Contact</li>
                </ul>
            </div>
            <div className="navbar__right">
               {user ?  <img src={icon} alt="" /> : (
                   <div className="miles">
                    <ul className="navbar__center__links">
                       <Link to="/login">
                           <li className="navbar__link">Login</li>
                       </Link>
                       <Link to="/register">
                           <li className="navbar__link">Register</li>
                       </Link>
                       </ul>
                   </div>
               )}
            </div>
        </div>
    )
}

export default Navbar

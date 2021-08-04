import React from 'react'
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'


const Navbar = () => {
    return (
        <div id='navigation'>

                {/* <h1>DeLange Development</h1> */}

                <Link to="About" spy={true} smooth={true} >About</Link>

                <Link to="Projects" spy={true} smooth={true} >Projects</Link>

                <Link to="Experience" spy={true} smooth={true} >Experience</Link>

                <Link to="Contact" spy={true} smooth={true} >Contact</Link>

                <Link to="Blog" spy={true} smooth={true} >Blog</Link>

            {/* <NavLink
            to='/'
            >
                Home
            </NavLink>
            <NavLink
            to='/projects'
            >
                Projects
            </NavLink>
            <NavLink
            to='/contact'
            >
                Contact
            </NavLink>
             */}
            
        </div>
    )
}

export default Navbar;

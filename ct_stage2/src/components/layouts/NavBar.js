import React from 'react'
import { Link } from 'react-router-dom'

// Nav Links
import SignedInLinks from './SignedInLinks'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h4 className="logo">cititech</h4>
            </Link>

            {/* Signed In Links */}
            <SignedInLinks />
        </nav>
    )
}

export default NavBar
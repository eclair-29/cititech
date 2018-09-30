import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'

const Nav = () => {
    return (
        <nav className="nav wrapper">
            <Link to='/'>
                <h4 className="logo">cititech</h4>
            </Link>

            <SignedInLinks />
        </nav>
    )
}

export default Nav

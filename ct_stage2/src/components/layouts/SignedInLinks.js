import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="menu">
            <li><NavLink to="/">Compose</NavLink></li>
            <li><NavLink to="/">Profile</NavLink></li>
            <li><NavLink to="/">Contacts</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="menu">
            <li><NavLink to="/compose">Compose</NavLink></li>
            <li><NavLink to="/:username">Profile</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
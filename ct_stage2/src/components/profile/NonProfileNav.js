import React from 'react'
import { NavLink } from 'react-router-dom'

const NonProfileNav = () => {
    return (
        <nav className="non-profile-nav">
            <ul className="menu">
                <li><NavLink to="/">Overview</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NonProfileNav
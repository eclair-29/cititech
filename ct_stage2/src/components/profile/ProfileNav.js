import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
    return (
        <nav className="profile-nav">
            <ul className="menu">
                <li><NavLink to="/">Overview</NavLink></li>
                <li><NavLink to="/">Sent Mails</NavLink></li>
                <li><NavLink to="/">Saves</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default ProfileNav
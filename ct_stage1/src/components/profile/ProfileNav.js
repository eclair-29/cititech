import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
    return (
        <nav className="profile-nav">
            <ul className="menu">
                <li><NavLink to='/'>Posts</NavLink></li>
                <li><NavLink to='/'>Todos</NavLink></li>
                <li><NavLink to='/'>Activities</NavLink></li>
                <li><NavLink to='/'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default ProfileNav


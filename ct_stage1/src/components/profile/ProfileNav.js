import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = ({ match }) => {
    return (
        <nav className="profile-nav">
            <ul className="menu">
                <li><NavLink to={ match.url }>Posts</NavLink></li>
                <li><NavLink to={ `${match.url}/todos` }>Todos</NavLink></li>
                <li><NavLink to={ `${match.url}/activities` }>Activities</NavLink></li>
                <li><NavLink to={ `${match.url}/about` }>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default ProfileNav


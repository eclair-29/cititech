import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions
import { signout } from '../../store/actions/authActions'

const SignedInLinks = ({ signout }) => {
    return (
        <ul className="menu">
            <li><NavLink to="/compose">Compose</NavLink></li>
            <li><NavLink to="/:username">Profile</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><a onClick={ signout }>Log Out</a></li>
        </ul>
    )
}

export default connect(null, { signout })(SignedInLinks)
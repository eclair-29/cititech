import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const SignedInLinks = ({ signout, profile }) => {
    return (
        <ul className="menu">
            <li><NavLink to='/compose'>Compose</NavLink></li>
            <li><NavLink to={ `/${profile.username}` }>Profile</NavLink></li>
            <li><a onClick={ signout }>Log Out</a></li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(SignedInLinks)
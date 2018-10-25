import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Nav Links
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = ({ auth }) => {
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <nav className="navbar">
            <Link to="/">
                <h4 className="logo">cititech</h4>
            </Link>

            {/* Auth Links */}
            { links }
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar)
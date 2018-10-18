import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

// Actions 
import { signout } from '../../store/actions/auth_actions'

const Nav = (props) => {
    const { signout, auth } = props
    const links = auth.uid ? <SignedInLinks signout={ signout } /> : <SignedOutLinks />

    return (
        <nav className="nav wrapper">
            <Link to='/'>
                <h4 className="logo">cititech</h4>
            </Link>

            {/* Nav Links */}
            { links }
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { signout })(Nav)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


// Components
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'

// Actions 
import { fetchUserProfile } from '../../store/actions/authActions'

class Profile extends Component {
    componentDidMount() {
        const username = this.props.match.params.username
        this.props.fetchUserProfile(username)
    }

    render() {
        const { auth, profile, match, user } = this.props

        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <div className="wrapper profile">
                <div className="my-profile">
                    {/* Header */}
                    <ProfileHeader 
                        profile={ profile } 
                        user={ user }
                        match={ match }
                    />

                    {/* Navs */}
                    <ProfileNav 
                        profile={ profile } 
                        user={ user }
                        match={ match }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let username = ownProps.match.params.username

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        user: state.auth.users.find(user => user.username === username)
    }
}

export default compose(
    connect(mapStateToProps, {
        fetchUserProfile
    }),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Profile)
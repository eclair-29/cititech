import React, { Component } from 'react'

// Components
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'

class Profile extends Component {
    render() {
        return (
            <div className="wrapper profile">
                {/* Header */}
                <ProfileHeader />

                {/* Navs */}
                <ProfileNav />
            </div>
        )
    }
}

export default Profile
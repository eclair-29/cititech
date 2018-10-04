import React, { Component } from 'react'

import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'

class Profile extends Component {
    render() {
        return (
            <div className="wrapper profile">
                {/* Profile Header */}
                <ProfileHeader />

                {/* Profile Navigation */}
                <ProfileNav />
            </div>
        )
    }
}

export default Profile
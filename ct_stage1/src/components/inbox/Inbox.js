import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import PostsList from '../posts/PostsList'
import Notifications from './Notifications'

class Inbox extends Component {
    render() {
        const { posts, auth, notifications } = this.props

        //  Check if the user is signed in or not
        if (!auth.uid) return <Redirect  to='/signin' />

        return (
            <div className="inbox">
                {/* Posts List */}
                <PostsList posts={ posts } />
                
                {/* Notifications */}
                <Notifications notifs={ notifications } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection: 'posts',
            orderBy: [ 'posted_at', 'desc' ] 
        },
        { 
            collection: 'notifications',
            orderBy: [ 'timestamp', 'desc' ] 
        }
    ])
)(Inbox)
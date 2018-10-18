import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import PostsList from '../posts/PostsList'
import Notifications from './Notifications'

class Inbox extends Component {
    render() {
        const { posts, auth } = this.props

        //  Check if the user is signed in or not
        if (!auth.uid) return <Redirect  to='/signin' />

        return (
            <div className="inbox">
                {/* Posts List */}
                <PostsList posts={ posts } />
                
                {/* Notifications */}
                <Notifications />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Inbox)
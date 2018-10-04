import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostsList from '../posts/PostsList'
import Notifications from './Notifications'

class Inbox extends Component {
    render() {
        const { posts } = this.props

        return (
            <div className="inbox">
                {/* Posts List */}
                <PostsList posts={ posts } />
                
                {/* Notifications */}9
                <Notifications />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Inbox)
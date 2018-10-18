import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const PostDetails = ({ post, auth }) => {
     //  Check if the user is signed in or not
     if (!auth.uid) return <Redirect  to='/signin' />

    if (post) {
        return (
            <div className="wrapper post-details">
                <div className="post-header">
                    <span className="title">{ post.title }</span>
                    <span>{ post.author_username }</span>
                </div>
                <div className="post-content">
                    <p>{ post.content }</p>
                </div>
                <div className="post-footer">
                    <span>{ moment(post.posted_at.toDate()).fromNow() }</span>
                </div>
            </div>
        )
    } else {
        return (
            <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading post...</p>
        )
    }
}

const mapStateToProps = (state, own_props) => {
    let id = own_props.match.params.id 
    let posts = state.firestore.data.posts
    let post = posts ? posts[id] : null
    
    return {
        post: post,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails)
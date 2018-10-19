import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import { Switch, Route } from 'react-router-dom'

// Routes
import UserPosts from './UserPosts'
import Todos from './Todos'
import Activities from './Activities'
import About from './About'

// Actions 
import { get_user_posts } from '../../store/actions/post_actions'

class Profile extends Component {
    componentDidMount() {
        const { posts, match } = this.props
        const user = match.params.username 

        this.props.get_user_posts(user)
        console.log(posts)
    }

    render() {
        const { profile, match, posts } = this.props

        return (
            <div className="wrapper profile">
                {/* Profile Header */}
                <ProfileHeader 
                    profile={ profile } 
                    posts={ posts }
                />

                {/* Profile Navigation */}
                <ProfileNav match={ match } />

                {/* Routes */}
                <Switch>
                    <Route exact path={ match.path } render={ props => <UserPosts { ...props } posts={ posts } /> } />
                    <Route path={ `${match.path}/todos` } component={ Todos } />
                    <Route path={ `${match.path}/activities` } component={ Activities } />
                    <Route path={ `${match.path}/about` } component={ About } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.firebase.profile,
        posts: state.posts.posts
    }
}

export default compose(
    connect(mapStateToProps, { get_user_posts }),
    firestoreConnect()
)(Profile)
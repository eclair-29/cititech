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

class Profile extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const { firestore, match  } = this.props
        const user = match.params.username

        firestore.collection('posts')
        .where('author_username', '==', user)
        .get()
        .then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())

            this.setState({
                posts: data
            })
        })
    }

    render() {
        const { profile, match } = this.props
        const { posts } = this.state

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
        posts: state.firestore.data.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect()
)(Profile)
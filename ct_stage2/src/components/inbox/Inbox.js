import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// Components 
import Breadcrumbs from './Breadcrumbs'
import Filters from './Filters'
import Notifications from './Notifications'
import Mails from '../mails/Mails'

class Inbox extends Component {
    render() {
        const { mails } = this.props

        return (
            <div className="inbox">
                {/* Breadcrumbs */}
                <Breadcrumbs />

                {/* Filters */}
                <Filters />

                <div className="wrapper">
                    <Mails mails={ mails } />
                </div>

                {/* Notifications */}
                <Notifications />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        mails: state.firestore.ordered.mails
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'mails' }
    ])
)(Inbox)
import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    return {
        mails: state.mails.mails
    }
}

export default connect(mapStateToProps)(Inbox)
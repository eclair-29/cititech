import React, { Component } from 'react'

// Components 
import Breadcrumbs from './Breadcrumbs'
import Filters from './Filters'
import Notifications from './Notifications'
import Mails from '../mails/Mails'

class Inbox extends Component {
    render() {
        return (
            <div className="inbox">
                {/* Breadcrumbs */}
                <Breadcrumbs />

                {/* Filters */}
                <Filters />

                <div className="wrapper">
                    <Mails />
                </div>

                {/* Notifications */}
                <Notifications />
            </div>
        )
    }
}

export default Inbox
import React from 'react'
import moment from 'moment'

const Notifications = ({ notifs }) => {
    return (
        <div className="notifications">
            <div className="ui segments">
                { notifs && notifs.map(notif => {
                    return (
                        <div className="ui segment" key={ notif.id }>
                            <p>{ notif.username } { notif.content }</p>
                            <span>{ moment(notif.timestamp.toDate()).fromNow() }</span>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Notifications
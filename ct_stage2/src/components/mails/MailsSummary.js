import React from 'react'
import { Link } from 'react-router-dom'

const MailsSummary = () => {
    return (
        <div className="ui card mail">
            {/* Mail header */}
            <div className="content">
                <div className="header">
                    <Link to="/">
                        <span className="subject title">1st Email from a Contact</span>
                    </Link>
                    <Link to="/">
                        <span className="recepient">from tine.o9</span>
                    </Link>
                </div>
            </div>

            {/* Timestamp */}
            <div className="extra content">
                <span className="meta">seconds ago</span>
            </div>
        </div>
    )
}

export default MailsSummary 
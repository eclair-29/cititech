import React from 'react'
import { Link } from 'react-router-dom'

const MailsSummary = ({ mail }) => {
    return (
        <div className="ui card mail">
            {/* Mail header */}
            <div className="content">
                <div className="header">
                    <Link to={ `/mails/${mail.id}` }>
                        <span className="subject title">
                            { mail.subject }
                        </span>
                    </Link>
                    <Link to={ `/${mail.authorUsername}` }>
                        <span className="recepient">
                            from { mail.authorUsername }
                        </span>
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
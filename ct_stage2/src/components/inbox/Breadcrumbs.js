import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ mail }) => {
    return (
        <div className="ui breadcrumb">
            <Link to="/" className="section">
                Inbox
            </Link>

            { mail ? (
                <div>
                    <i className="right angle icon divider"></i>
                
                    <Link to="/" className="section">
                        { mail.subject }
                    </Link>
                </div>
            ) : null }
        </div>
    )
}
export default Breadcrumbs 
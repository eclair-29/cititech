import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
    return (
        <div className="ui breadcrumb">
            <Link to="/" className="section">
                Inbox
            </Link>

            <i className="right angle icon divider"></i>
            
            <Link to="/" className="section">
                Emails
            </Link>
        </div>
    )
}
export default Breadcrumbs 
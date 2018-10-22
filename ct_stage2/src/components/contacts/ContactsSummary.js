import React from 'react'
import { Link } from 'react-router-dom'

const ContactsSummary = () => {
    return (
        <div className="ui card contact">
            {/* Contact Header */}
            <div className="content contact-content">
                <div className="contact-info">
                    <Link to="/">
                        <span className="name">Kristine Leyco</span>
                    </Link>
                    <span className="username">tine.o9</span>
                </div>
                <Link to="/" className="remove-contact-link">Remove to Contact</Link>
            </div>
        </div>
    )
}

export default ContactsSummary
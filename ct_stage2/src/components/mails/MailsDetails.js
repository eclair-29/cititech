import React, { Component } from 'react'


class MailDetails extends Component {
    render() {
        return (
            <div className="wrapper mail-details">
                {/* Mail Header */}
                <div className="mail-header">
                    <span className="subject">1st Email from Contact</span>
                    <span className="recepient">from tine.o9</span>
                </div>

                {/* Mail Content */}
                <div className="mail-content">
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam alias doloremque eius vitae obcaecati aspernatur earum eligendi, similique ipsum.
                    </p>
                </div>

                {/* Timestamp */}
                <div className="timestamp">
                    <span>seconds ago</span>
                </div>
            </div>
        )
    }
}

export default MailDetails
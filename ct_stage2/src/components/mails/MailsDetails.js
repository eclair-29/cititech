import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Breadcrumbs from '../inbox/Breadcrumbs'

class MailDetails extends Component {
    render() {
        const { mail } = this.props

        return (
            <main className="mail-container">
                {/* Breadcrumb */}
                <Breadcrumbs mail={ mail } />

                {/* Mail Contents */}
                <div className="wrapper mail-details">
                    {/* Mail Header */}
                    <div className="mail-header">
                        <span className="subject">
                            { mail.subject }
                        </span>
                        <span className="recepient">
                            from { mail.authorUsername }
                            </span>
                    </div>

                    {/* Mail Content */}
                    <div className="mail-content">
                        <p className="description">
                            { mail.content }
                        </p>
                    </div>

                    {/* Timestamp */}
                    <div className="timestamp">
                        <span>seconds ago</span>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id 

    return {
        mail: state.mails.mails.find(mail => mail.id === id)
    }
}

export default connect(mapStateToProps)(MailDetails)
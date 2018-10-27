import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

// Components
import Breadcrumbs from '../inbox/Breadcrumbs'

class MailDetails extends Component {
    render() {
        const { mail, match, auth } = this.props

        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <main className="mail-container">
                {/* Breadcrumb */}
                <Breadcrumbs 
                    mail={ mail } 
                    match={ match }
                />

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
    let mails = state.firestore.data.mails
    let mail = mails ? mails[id] : null

    return {
        mail: mail,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'mails' }
    ])
)(MailDetails)
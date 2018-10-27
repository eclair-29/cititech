import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Components
import ContactsSummary from './ContactsSummary'

class Contacts extends Component {
    render() {
        const { auth } = this.props

        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <div className="wrapper contacts">
               <ContactsSummary />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Contacts)
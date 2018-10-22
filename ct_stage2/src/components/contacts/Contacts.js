import React, { Component } from 'react'

// Components
import ContactsSummary from './ContactsSummary'

class Contacts extends Component {
    render() {
        return (
            <div className="wrapper contacts">
               <ContactsSummary />
            </div>
        )
    }
}

export default Contacts
import React from 'react'

// Components
import MailsSummary from './MailsSummary'

const Mails = ({ mails }) => {
    return (
        <div className="mails">
            { mails && mails.map(mail => {
                return <MailsSummary mail={ mail } key={ mail.id } />
            }) }
        </div>
    )
}

export default Mails 
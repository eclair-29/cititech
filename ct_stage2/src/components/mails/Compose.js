import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { composeMail } from '../../store/actions/mailsActions'

class Compose extends Component {
    state = {
        subject: "",
        recepient: "",
        content: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.composeMail(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="compose wrapper">
                {/* Compose Form */}
                <form 
                    className="ui form"
                    onSubmit={ this.handleSubmit }
                >
                    <h4>Compose a mail</h4>

                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            name="subject" 
                            onChange={ this.handleChange }
                            value={ this.state.subject }
                        />
                    </div>

                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="To:" 
                            name="recepient" 
                            onChange={ this.handleChange }
                            value={ this.state.recepient }
                        />
                    </div>

                    <div className="field">
                        <textarea
                            rows="8"
                            placeholder="Content"
                            name="content"
                            onChange={ this.handleChange }
                            value={ this.state.content }
                        >
                        </textarea>
                    </div>

                    <button
                        type="submit"
                        className="ui fluid basic blue button"
                    >
                        Send Mail
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { composeMail })(Compose)
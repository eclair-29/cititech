import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="wrapper signin">
                <form 
                    className="ui small form"
                    onSubmit={ this.handle_submit }>
                    
                    <h4>Sign In to your account</h4>

                    <div className="field">
                        <input 
                            type="email"
                            id="email" 
                            placeholder="Email"
                            onChange={ this.handle_change }
                        />
                    </div>

                    <div className="field">
                        <input 
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={ this.handle_change }
                        />
                    </div>

                    <button
                        type="submit"
                        className="ui fluid basic teal small button">
                            Continue
                    </button>
                </form>
            </div>
        )
    }
}

export default SignIn
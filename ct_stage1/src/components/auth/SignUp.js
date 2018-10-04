import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        fname: '',
        lname: '',
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
            <div className="wrapper signup">
                <form 
                    className="ui small form"
                    onSubmit={ this.handle_submit }>
                    
                    <h4>Sign Up to join the Party</h4>

                    <div className="two fields">
                        <div className="field">
                            <input 
                                type="text"
                                id="fname" 
                                placeholder="First Name"
                                onChange={ this.handle_change }
                            />
                        </div>

                        <div className="field">
                            <input 
                                type="text"
                                id="lname" 
                                placeholder="Last Name"
                                onChange={ this.handle_change }
                            />
                        </div>
                    </div>

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
                            Create Account
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUp
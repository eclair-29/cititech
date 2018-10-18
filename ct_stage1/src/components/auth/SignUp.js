import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Actions 
import { signup } from '../../store/actions/auth_actions'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: ''
    }

    handle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        this.props.signup(this.state)
    }

    render() {
        const { auth, authError } = this.props

        //  Check if the user is signed in or not
        if (auth.uid) return <Redirect  to='/' />

        return (
            <div className="wrapper signup">
                { authError ? (
                    <div className="ui red message">{  authError }</div>
                ) : null }

                <form 
                    className="ui small form"
                    onSubmit={ this.handle_submit }>
                    
                    <h4>Sign Up to join the Party</h4>

                    <div className="two fields">
                        <div className="field">
                            <input 
                                type="text"
                                id="firstName" 
                                placeholder="First Name"
                                onChange={ this.handle_change }
                            />
                        </div>

                        <div className="field">
                            <input 
                                type="text"
                                id="lastName" 
                                placeholder="Last Name"
                                onChange={ this.handle_change }
                            />
                        </div>
                    </div>

                    <div className="field">
                        <input 
                            type="text"
                            id="username" 
                            placeholder="Username"
                            onChange={ this.handle_change }
                        />
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

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, { signup })(SignUp)
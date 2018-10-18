import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

// Actions 
import { signin } from '../../store/actions/auth_actions'

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
        this.props.signin(this.state)
    }

    render() {
        const { authError, auth } = this.props

        //  Check if the user is signed in or not
        if (auth.uid) return <Redirect  to='/' />

        return (
            <div className="wrapper signin">
                { authError ? (
                    <div className="ui message red">{ authError }</div>
                ) : null }
                
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

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { signin })(SignIn)
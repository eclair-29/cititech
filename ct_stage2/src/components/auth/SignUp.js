import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Actions
import { signup } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        username: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state)
    }

    render() {
        const { authError, auth } = this.props

        if (auth.uid) return <Redirect to="/" />

        return (
            <div className="signup wrapper">
                {/* auth error message */}
                { authError ? (
                    <div className="ui red message">
                        { authError }
                    </div>
                ) : null }

                {/* Sign Up Form */}
                <form 
                    className="ui form"
                    onSubmit={ this.handleSubmit }
                >
                    <h4>Sign Up to a new account</h4>

                    <div className="two fields">
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName" 
                                onChange={ this.handleChange }
                                value={ this.state.firstName }
                            />
                        </div>

                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName" 
                                onChange={ this.handleChange }
                                value={ this.state.lastName }
                            />
                        </div>
                    </div>

                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            onChange={ this.handleChange }
                            value={ this.state.username }
                        />
                    </div>

                    <div className="field">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            onChange={ this.handleChange }
                            value={ this.state.email }
                        />
                    </div>

                    <div className="field">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={ this.handleChange }
                            value={ this.state.password }
                        />
                    </div>

                    <button
                        type="submit"
                        className="ui fluid basic blue button"
                    >Sign Up
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { signup })(SignUp)
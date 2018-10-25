import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { signin } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signin(this.state)
    }

    render() {
        const { authError } = this.props

        return (
            <div className="signin wrapper">
                {/* auth error message */}
                { authError ? (
                    <div className="ui red message">
                        { authError }
                    </div>
                ) : null }

                {/* Sign In Form */}
                <form 
                    className="ui form"
                    onSubmit={ this.handleSubmit }
                >
                    <h4>Sign In to your account</h4>

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
                    >
                        Continue
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, { signin })(SignIn)
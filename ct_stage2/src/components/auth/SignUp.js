import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
        return (
            <div className="signup wrapper">
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

export default SignUp
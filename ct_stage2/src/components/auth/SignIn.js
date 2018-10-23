import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
        return (
            <div className="signin wrapper">
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

export default SignIn
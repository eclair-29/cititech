import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Actions 
import { create_post } from '../../store/actions/post_actions'
 
class Compose extends Component {
    state = {
        title: '',
        content: ''
    }

    handle_change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handle_submit = e => {
        e.preventDefault()
        this.props.create_post(this.state)
        this.props.history.push("/")
    }

    render() {
        const { auth } = this.props

        //  Check if the user is signed in or not
        if (!auth.uid) return <Redirect  to='/signin' />

        return (
            <div className="wrapper compose">
                <form 
                    className="ui small form"
                    onSubmit={ this.handle_submit }>
                    
                    <h4>Compose email...</h4>

                    <div className="field">
                        <input 
                            type="text"
                            id="title" 
                            placeholder="Title"
                            onChange={ this.handle_change }
                        />
                    </div>

                    <div className="field">
                    <textarea 
                        rows="8"
                        id="content"
                        placeholder="Write something here"
                        onChange={ this.handle_change }>
                    </textarea>
                    </div>

                    <button
                        type="submit"
                        className="ui fluid basic teal small button">
                            Submit
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create_post: post => dispatch(create_post(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose)
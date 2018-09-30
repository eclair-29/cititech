import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
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

export default Compose
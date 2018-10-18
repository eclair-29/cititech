import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Layouts 
import Nav from './components/layouts/Nav'

// Routes 
import Inbox from './components/inbox/Inbox'
import PostDetails from './components/posts/PostDetails'
import Profile from './components/profile/Profile'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Compose from './components/posts/Compose'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />

					{/* Routes */}
					<Switch>
						<Route exact path='/' component={ Inbox } />
						<Route path='/signin' component={ SignIn } />
						<Route path='/signup' component={ SignUp } />
						<Route path='/compose' component={ Compose } />
						<Route path='/posts/:id' component={ PostDetails } />
						<Route path='/:username' component={ Profile } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Layouts
import NavBar from './components/layouts/NavBar'

// Routes
import Inbox from './components/inbox/Inbox'
import MailDetails from './components/mails/MailsDetails'
import Profile from './components/profile/Profile'
import Contacts from './components/contacts/Contacts'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Compose from './components/mails/Compose'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar />

					{/* Routes */}
					<Switch>
						<Route exact path="/" component={ Inbox } />
						<Route path="/mails/:id" component={ MailDetails } />
						<Route path="/contacts" component={ Contacts } />
						<Route path="/signin" component={ SignIn } />
						<Route path="/signup" component={ SignUp } />
						<Route path="/compose" component={ Compose } />
						<Route path="/:username" component={ Profile } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

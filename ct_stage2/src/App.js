import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Layouts
import NavBar from './components/layouts/NavBar'

// Routes
import Inbox from './components/inbox/Inbox'
import MailDetails from './components/mails/MailsDetails'
import Profile from './components/profile/Profile'
import Contacts from './components/contacts/Contacts'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar />

					{/* Routes */}
					<Switch>
						<Route exact path="/" component={ Inbox } />
						<Route path="/mail" component={ MailDetails } />
						<Route path="/profile" component={ Profile } />
						<Route path="/contacts" component={ Contacts } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

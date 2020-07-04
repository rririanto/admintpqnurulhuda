import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Admin from '../routes/admin';
import Profile from '../routes/profile';
import Users from '../routes/santris';
import BookSantri from '../routes/books'

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div class="flex flex-col min-h-screen">
				<Header />
				<main class="flex items-center justify-center mx-auto">
				<Router onChange={this.handleRoute}>
					<Admin path="/"/>
					<Users path="/santris/:id"/>
					<BookSantri path="/book/:id"/>
					<Profile path="/profile/:user"/>
				</Router>
				</main>
			</div>
		);
	}
}

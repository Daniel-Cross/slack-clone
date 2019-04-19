import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './components/firebase';
import md5 from 'md5';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			passwordMatch: true,
			error: '',
			userRef: firebase.database().ref('users'),
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	};

	isPasswordValid = ({ password, passwordMatch }) => {
		if (password.length < 6 || passwordMatch.length < 6) {
			return false;
		} else if (password !== passwordMatch) {
			return false;
		} else {
			return true;
		}
	};

	handleKeyUp = () => {
		const { password, confirmPassword } = this.state;

		if (password === confirmPassword) {
			this.setState({ passwordMatch: true });
		} else {
			this.setState({ passwordMatch: false });
		}
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		const { email, password, username } = this.state;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((createUserId) => {
				createUserId.user
					.updateProfile({
						displayName: username,
						photoURL: `https://gravatar.com/avatar${md5(createUserId.user.email)}?d=identicon`,
					})
					.then(() => {
						this.saveUser(createUserId).then(() => {
							console.log('user saved');
						});
					})
					.catch((err) => {
						console.log(err);
						this.setState({ error: err.message });
					});
				console.log(createUserId);
			})
			.catch((err) => {
				console.log(err.message);
				this.setState({ error: err.message });
			});
	};

	saveUser = (createdUser) => {
		return this.state.userRef.child(createdUser.user.uid).set({
			name: createdUser.user.displayName,
			avatar: createdUser.user.photoURL,
		});
	};

	render() {
		const { username, email, password, confirmPassword, passwordMatch, error } = this.state;
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => <App />} />
					<Route
						path="/register"
						render={() => (
							<Register
								handleInputChange={this.handleInputChange}
								handleFormSubmit={this.handleFormSubmit}
								handleKeyUp={this.handleKeyUp}
								username={username}
								email={email}
								password={password}
								confirmPassword={confirmPassword}
								passwordMatch={passwordMatch}
								error={error}
							/>
						)}
					/>
					<Route path="/login" render={() => <Login />} />
				</Switch>
			</Router>
		);
	}
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

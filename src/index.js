import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import firebase from './components/firebase';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';

const store = createStore(rootReducer, composeWithDevTools());

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
			showDropDown: false,
		};
	}

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.props.setUser(user);
				this.props.history.push('/');
			} else {
				this.props.history.push('/login');
				this.props.clearUser();
			}
		});
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
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
						photoURL: `https://ui-avatars.com/api/?name=${this.state.username}&size=32&rounded=true`,
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

	handleFormLogin = (e) => {
		const { email, password } = this.state;
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((signedInUser) => {
				console.log(signedInUser);
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					error: err.message,
				});
			});
	};

	handleDropMenu = (e) => {
		e.preventDefault();

		this.setState((e) => ({
			showDropDown: !e.showDropDown,
		}));
	};

	handleSignOut = () => {
		firebase.auth().signOut().then(() => {
			console.log('Signed out!');
		});
	};

	render() {
		const { username, email, password, confirmPassword, passwordMatch, error, showDropDown } = this.state;
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<App
							showDropDown={showDropDown}
							handleDropMenu={this.handleDropMenu}
							handleSignOut={this.handleSignOut}
						/>
					)}
				/>
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
				<Route
					path="/login"
					render={() => (
						<Login
							handleInputChange={this.handleInputChange}
							handleFormLogin={this.handleFormLogin}
							email={email}
							password={password}
							error={error}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default Root;

const RootWithAuth = withRouter(connect(null, { setUser, clearUser })(Root));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<RootWithAuth />
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();

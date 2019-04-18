import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			passwordError: 'Passwords do not match',
			passwordMatch: true,
		};
	}

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
	};

	render() {
		const { name, email, password, confirmPassword, passwordError, passwordMatch } = this.state;
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
								name={name}
								email={email}
								password={password}
								confirmPassword={confirmPassword}
								passwordError={passwordError}
								passwordMatch={passwordMatch}
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

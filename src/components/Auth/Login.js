import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Login.css';

const Login = (props) => {
	const { email, password, handleInputChange, handleFormLogin, error } = props;

	return (
		<div id="Login">
			<div className="logo">
				<i className="fas fa-meteor fa-5x" />
				<h1>Login to Kompis</h1>
			</div>
			<form className="loginForm" onSubmit={handleFormLogin}>
				{error ? <p className="passwordMatch">{error}</p> : null}

				<input
					type="email"
					placeholder="email"
					name="email"
					value={email}
					onChange={handleInputChange}
					required
				/>
				<input
					required
					type="password"
					placeholder="password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>

				<button action="submit">Login</button>
			</form>
			<Link to="/register">
				<button>Not a user? Register here</button>
			</Link>
		</div>
	);
};

export default Login;

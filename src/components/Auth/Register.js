import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Register.css';

const Register = (props) => {
	const {
		name,
		email,
		password,
		confirmPassword,
		passwordMatch,
		handleInputChange,
		handleFormSubmit,
		handleKeyUp,
	} = props;

	return (
		<div id="Register">
			<i className="fas fa-meteor fa-5x" />
			<h1>Register for Tack</h1>
			<form onSubmit={handleFormSubmit} className="registerForm">
				{!passwordMatch ? <p className="passwordMatch">Passwords do not match</p> : null}
				<input type="text" placeholder="name" name="name" value={name} onChange={handleInputChange} required />
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
					onKeyUp={handleKeyUp}
				/>
				<input
					required
					type="password"
					placeholder="confirm password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleInputChange}
					onKeyUp={handleKeyUp}
				/>
				<button action="submit">Submit</button>
			</form>
			<Link to="/login">
				<button>Already a user? Login here</button>
			</Link>
		</div>
	);
};

export default Register;

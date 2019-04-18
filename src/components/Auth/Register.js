import React from 'react';

const Register = (props) => {
	const {
		name,
		email,
		password,
		confirmPassword,
		passwordError,
		passwordMatch,
		handleInputChange,
		handleFormSubmit,
		handleKeyUp,
	} = props;
	return (
		<div id="Register">
			<i className="fas fa-meteor fa-5x" />
			<h1>Register for Tack</h1>
			{!passwordMatch ? passwordError : null}
			<form onSubmit={handleFormSubmit}>
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
		</div>
	);
};

export default Register;

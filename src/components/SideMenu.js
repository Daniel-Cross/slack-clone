import React from 'react';
import '../styles/SideMenu.css';
import { connect } from 'react-redux';

const SideMenu = (props) => {
	console.log(props.currentUser);
	const { handleDropMenu, handleSignOut, showDropDown } = props;
	return (
		<div id="SideMenu">
			<div className="icon">
				<i className="fas fa-meteor fa-3x" />
				<h2>Kompis</h2>
			</div>

			{showDropDown ? (
				<div className="dropdown">
					<button className="dropbtn" onClick={handleDropMenu}>
						User<i className="fas fa-sort-up" />
					</button>
					<div id="dropDown" className="dropDown-content">
						<p>
							Signed in as <img src={props.currentUser.photoURL} alt="avatar" />
							<strong>{props.currentUser.displayName}</strong>
						</p>
						<p>Change avatar</p>
						<p onClick={handleSignOut}>Sign out</p>
					</div>
				</div>
			) : (
				<button className="dropbtn" onClick={handleDropMenu}>
					User<i className="fas fa-sort-down" />
				</button>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SideMenu);

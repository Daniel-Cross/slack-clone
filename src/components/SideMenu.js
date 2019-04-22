import React, { Component } from 'react';
import '../styles/SideMenu.css';

class SideMenu extends Component {
	state = {
		user: this.props.currentUser,
	};

	render() {
		const { handleDropMenu, handleSignOut, showDropDown } = this.props;

		return (
			<div id="SideMenu">
				<div className="icon">
					<i className="fas fa-meteor fa-3x" />
					<h2>Kompis</h2>
				</div>

				{showDropDown ? (
					<div className="dropdown">
						<button className="dropbtn" onClick={handleDropMenu}>
							{/* <img src={this.state.user.photoURL} alt="avatar" /> */}
							{this.state.user.displayName}
							<i className="fas fa-sort-up" />
						</button>
						<div id="dropDown" className="dropDown-content">
							<p>
								Signed in as <strong>{this.state.user.displayName}</strong>
							</p>
							<p>Change avatar</p>
							<p onClick={handleSignOut}>Sign out</p>
						</div>
					</div>
				) : (
					<button className="dropbtn" onClick={handleDropMenu}>
						{/* <img src={this.state.user.photoURL} alt="avatar" /> */}
						{this.state.user.displayName}
						<i className="fas fa-sort-down" />
					</button>
				)}
			</div>
		);
	}
}

export default SideMenu;

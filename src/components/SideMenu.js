import React, { Component } from 'react';
import Channels from './Channels';
import '../styles/SideMenu.css';

class SideMenu extends Component {
	state = {
		user: this.props.currentUser,
	};

	render() {
		const { handleDropMenu, handleShowModal, handleSignOut, showDropDown, channels } = this.props;

		return (
			<div id="SideMenu">
				<div className="icon">
					<i className="fas fa-meteor fa-3x" />
					<h2>Kompis</h2>
				</div>

				{showDropDown ? (
					<div className="dropdown">
						<button className="dropbtn" onClick={handleDropMenu}>
							<img src={this.state.user.photoURL} alt="avatar" />
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
					<div className="dropdown">
						<button className="dropbtn" onClick={handleDropMenu}>
							<img src={this.state.user.photoURL} alt="avatar" />
							{this.state.user.displayName}
							<i className="fas fa-sort-down" />
						</button>
					</div>
				)}
				<Channels channels={channels} handleShowModal={handleShowModal} />
			</div>
		);
	}
}

export default SideMenu;

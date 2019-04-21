import React from 'react';
import '../styles/SideMenu.css';

const SideMenu = (props) => {
	return (
		<div id="SideMenu">
			<div className="icon">
				<i className="fas fa-meteor fa-3x" />
				<h2>Kompis</h2>
			</div>

			{props.showDropDown ? (
				<div className="dropdown">
					<button className="dropbtn" onClick={props.handleDropMenu}>
						User<i className="fas fa-sort-up" />
					</button>
					<div id="dropDown" className="dropDown-content">
						<p>
							Signed in as <strong>User</strong>
						</p>
						<p>Change avatar</p>
						<p>Sign out</p>
					</div>
				</div>
			) : (
				<button className="dropbtn" onClick={props.handleDropMenu}>
					User<i className="fas fa-sort-down" />
				</button>
			)}
		</div>
	);
};

export default SideMenu;

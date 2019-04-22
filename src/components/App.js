import React, { Component } from 'react';
import '../styles/App.css';
import SideMenu from './SideMenu';
import Header from './Header';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { showDropDown, handleDropMenu, handleSignOut, currentUser } = this.props;

		return (
			<div id="App">
				<SideMenu
					showDropDown={showDropDown}
					handleDropMenu={handleDropMenu}
					handleSignOut={handleSignOut}
					currentUser={currentUser}
				/>
				<Header />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);

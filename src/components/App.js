import React, { Component } from 'react';
import '../styles/App.css';
import SideMenu from './SideMenu';
import Header from './Header';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const {
			showDropDown,
			handleDropMenu,
			handleSignOut,
			currentUser,
			channels,
			handleShowModal,
			showModal,
		} = this.props;

		return (
			<div id="App">
				<SideMenu
					handleDropMenu={handleDropMenu}
					handleShowModal={handleShowModal}
					handleSignOut={handleSignOut}
					showDropDown={showDropDown}
					currentUser={currentUser}
					channels={channels}
					showModal={showModal}
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

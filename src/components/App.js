import React, { Component } from 'react';
import '../styles/App.css';
import SideMenu from './SideMenu';
import Header from './Header';

class App extends Component {
	render(props) {
		const { showDropDown, handleDropMenu } = this.props;

		return (
			<div id="App">
				<SideMenu showDropDown={showDropDown} handleDropMenu={handleDropMenu} />
				<Header />
			</div>
		);
	}
}

export default App;

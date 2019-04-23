import React from 'react';
import '../styles/Channels.css';

const Channels = (props) => {
	return (
		<div id="Channels">
			<i className="fas fa-exchange-alt" />
			<p>CHANNELS</p>
			({props.channels.length})
			<i className="fas fa-plus" />
			{/* {props.channels} */}
		</div>
	);
};

export default Channels;

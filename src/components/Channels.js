import React from 'react';
import '../styles/Channels.css';

const Channels = (props) => {
	const { handleShowModal } = props;
	return (
		<div id="Channels">
			<i className="fas fa-exchange-alt" />
			<p>CHANNELS</p>
			({props.channels.length})
			<i className="fas fa-plus" onClick={handleShowModal} />
			{/* {props.channels} */}
		</div>
	);
};

export default Channels;

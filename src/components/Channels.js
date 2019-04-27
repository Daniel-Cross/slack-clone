import React from 'react';
import '../styles/Channels.css';
import Modal from './Modal';

const Channels = (props) => {
	const { handleShowModal, showModal } = props;
	return (
		<div id="Channels">
			<i className="fas fa-exchange-alt" />
			<p>CHANNELS</p>
			({props.channels.length})
			<i className="fas fa-plus" onClick={handleShowModal} />
			{showModal ? <Modal showModal={showModal} /> : null}
			{/* {props.channels} */}
		</div>
	);
};

export default Channels;

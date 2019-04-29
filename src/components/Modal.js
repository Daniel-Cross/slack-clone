import React from 'react';
import '../styles/Modal.css';

const Modal = (props) => {
	return (
		<div
			id="Modal"
			style={{
				transform: props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
				opacity: props.showModal ? '1' : '0',
			}}>
			<p>I'm a pop up modal</p>
		</div>
	);
};

export default Modal;

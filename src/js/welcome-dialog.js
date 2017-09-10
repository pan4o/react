
import React from 'react';
import Fancy from './fancy-border';

function WelcomeDialog (props) {

	return (
		<Fancy color="blue">
			<h2 className="dialog-title">{props.title}</h2>
			<div className="dialog-message">
				{props.message}
			</div>

			{props.children}
		</Fancy>
	);

}


export default WelcomeDialog;



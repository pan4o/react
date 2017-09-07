
import React from 'react';
import Fancy from './fancy-border';

function WelcomeDialog () {

	return (
		<Fancy color="blue">
			<h2 className="dialog-title">Dialog</h2>
			<div className="dialog-message">
				Test
			</div>
		</Fancy>
	);

}


export default WelcomeDialog;



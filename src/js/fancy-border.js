
import React from 'react';

function Fancy (props) {

	return (
		<div className={'fancy fancy-' + props.color}>
			111
			{props.children}
		</div>
	);

}

export default Fancy;


import React from 'react';

class City extends React.Component {

	render () {
		return (
			<div>
				<img src={this.props.src} width="700" height="400" />
				<p>This is {this.props.name}</p>
			</div>
		);
	}

}

export default City;
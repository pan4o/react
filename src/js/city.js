
import React from 'react';

class City extends React.Component {

	render () {
		return (
			<div>
				<img className="city-image" src={this.props.src} width="700" height="400" />
				<p className="city-name">This is {this.props.name}</p>
			</div>
		);
	}

}

export default City;
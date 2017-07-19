
import React from 'react';

class Welcome extends React.Component {

	render() {
		return <h2 className="welcome-title">Welcome {this.props.name}</h2>
	}

}

export default Welcome;
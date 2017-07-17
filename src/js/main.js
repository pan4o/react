import React from 'react';
import HelloWorld from './hello-world';

class Main extends React.Component {

	render () {
		return (
			<div className="hello-container">
				<HelloWorld background='blue' />
			</div>
		);
	}

}

export default Main;
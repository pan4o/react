import React from 'react';
import HelloWorld from './hello-world';
import Welcome from './welcome';
import City from './city';

class Main extends React.Component {

	render () {
		return (
			<div className="hello-container">
				<HelloWorld background='blue' />
				<Welcome name="Serhii" />
				<Welcome name="Dasha" />
				<City
					src="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_510,q_75,w_1280/v1/clients/newyorkstate/dumbo_brooklyn_bridge_park_julienne_schaer_0732_fdff1de5-9486-480c-a1c7-4135d784c75f.jpg"
					name="New Yourk"
				/>
			</div>
		);
	}

}

export default Main;
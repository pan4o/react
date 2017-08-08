
import React from 'react';

class NumberList extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {

		const numbers = this.props.numbers;
		const list = numbers.map((item, i) => 
			<li key={i}>{item}</li>
		);

		return <ul>{list}</ul>

	}

}

export default NumberList;
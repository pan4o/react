
import React from 'react';
import ListItem from './listitem';

class NumberList extends React.Component {

	render () {

		const numbers = this.props.numbers;
		const list = numbers.map((item, i) => 
			<ListItem key={i} value={item} />
		);

		return <ul>{list}</ul>

	}

}

export default NumberList;
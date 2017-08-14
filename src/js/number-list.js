
import React from 'react';
import ListItem from './listitem';

class NumberList extends React.Component {

	render () {

		const numbers = this.props.numbers;

		return (
			<ul>
				{
					numbers.map((number, i) =>
						<ListItem key={i} value={number} />
					)
				}
			</ul>
		);

	}

}

export default NumberList;
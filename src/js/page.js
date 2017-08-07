
import React from 'react';
import WarningBanner from './warningbanner';


class Page extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			isWarrning: true
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle () {

		this.setState(
			prevState => ({
				isWarrning: !prevState.isWarrning
			})
		);

	}

	render () {

		return (
			<div style={{height: 100}}>
				<button onClick={this.toggle}>
					{this.state.isWarrning ? 'Hide' : 'Show'}
				</button>
				
				<WarningBanner warn={this.state.isWarrning} />
			</div>
		);

	}

}

export default Page;
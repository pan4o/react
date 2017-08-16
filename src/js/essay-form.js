
import React from 'react';

class EssayForm extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			value: 'Tell me about your favorite band'
		}

		this.styles = {
			marginTop: 10
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {

		this.setState({
			value: event.target.value
		});

	}

	handleSubmit (event) {

		console.log('info is update ' + this.state.value)

		event.preventDefault();

	}

	render () {

		return (
			<div style={this.styles}>	
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<textarea value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);

	}

}

export default EssayForm;
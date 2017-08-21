
import React from 'react';

class FlavorForm extends React.Component {

	render () {
		return (
			<form>
				<label>
					<p>Pick your favorite flavor:</p>
					<select>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}

}

export default FlavorForm;
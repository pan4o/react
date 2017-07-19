
import React from 'react';

class Avatar extends React.Component {

	render () {

		return (

			<img 
				src={this.props.user.avatarUrl} 
				alt={this.props.user.name}  
			/>

		);

	}

}

export default Avatar;
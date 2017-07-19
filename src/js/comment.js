
import React from 'react';
import Avatar from './avatar';

class Comment extends React.Component {

	render () {
		return (
			<div>
				<Avatar user={this.props.author} />
				<p className="comment-text">{this.props.text}</p>
				<p className="author-name">{this.props.author.name}</p>
			</div>
		);
	}

}

export default Comment;
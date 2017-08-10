
import React from 'react';

function Post (props) {

	const styles = {
		post: {
			backgroundColor: '#f3f3f3',
			border: '1px solid #000000',
			margin: '10px',
			float: 'left',
			padding: '10px'
		},
		postTitle: {
			color: 'red'
		}

	}

	return (
		<div style={styles.post}>
			<h2 style={styles.postTitle}>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);

}

export default Post;

import React from 'react';
import Post from './post';

function Blog (props) {

	const sidebar = (
		<ul>
			{
				props.posts.map((post) =>
					<li key={post.id}>
						<a href={post.link} target="_blank">{post.title}</a>
					</li>
				)
			}
		</ul>
	);

	const post = (
		props.posts.map((post) => 
			<Post key={post.id} content={post.content} title={post.title} />
		)
	);

	return (
		<div>
			{sidebar}
			<div>{post}</div>
		</div>
	);

}

export default Blog;
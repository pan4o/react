
import React from 'react';

function Mailbox (props) {

	const unreadMessage = props.unreadMessage,
		  ending = unreadMessage.length > 1 ? 's' : '';

	return (
		<div>
			<h1>Hello!</h1>
			{
				unreadMessage.length && 
				<h2> You have {unreadMessage.length} unread message{ending}</h2>
			}
		</div>
	);

}

export default Mailbox;
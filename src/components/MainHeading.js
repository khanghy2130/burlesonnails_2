import React from 'react';

export default function MainHeading(props) {
	return (
		<React.Fragment>
			<h1 id="temporary-alert">We are currently closed due to the pandemic. We're sorry, and we hope to see the customers again soon. Stay safe.</h1>
			<h1 id="main-heading">{props.text}</h1>
			<div id="logo"><span>B</span></div>
		</React.Fragment>
	)
}
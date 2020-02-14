import React from 'react';

export default function MainHeading(props) {
	return (
		<React.Fragment>
			<h1 id="main-heading">{props.text}</h1>
			<div id="logo"><span>B</span></div>
		</React.Fragment>
	)
}
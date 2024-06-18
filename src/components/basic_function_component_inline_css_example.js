import React from 'react';

function BasicFunctionComponentInlineCSS(){
	const headingStyles = {
		color:"white",
		backgroundColor:"orange",
		border:"2px solid black"
	}
	return(
		<div>
			<h1 style={headingStyles}>This is Function Component Inline CSS Example</h1>
		</div>
	)
}

export default BasicFunctionComponentInlineCSS;
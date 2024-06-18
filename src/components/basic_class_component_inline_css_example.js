import React,{Component} from 'react';

class BasicClassComponentInlineCSS extends Component{
	
	render(){
		let headingStyles = {
		color:"white",
		backgroundColor:"orange",
		border:"2px solid black"
	}
		return(
			<div>
				<h1 style={headingStyles}>This is Inline CSS Example</h1>
			</div>
		)
	}
}

export default BasicClassComponentInlineCSS;
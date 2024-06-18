import React,{Component} from 'react';
import './css/sample_external_styles.css';

class BasicClassComponentExternalCSS extends Component{
	
	render(){
		return(
			<div>
				<h1 className="headingStyles">This is External CSS Example</h1>
				
			</div>
		)
	}
}

export default BasicClassComponentExternalCSS;
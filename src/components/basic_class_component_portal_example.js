import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class BasicClassComponentPortal extends Component{
	
	render(){
		return ReactDOM.createPortal(
			<div>
				<h1>This is Class Component Portal Example</h1>
				
			</div>,
			document.getElementById('class-comp-portal')
		)
	}
}
export default BasicClassComponentPortal;
import React,{Component} from 'react';

class BasicClassComponentChildElementRef extends Component{
	constructor(){
		super();
		this.inputRef = React.createRef();
	}
	focusOnChildTextBox(){
		this.inputRef.current.focus();
	}
	render(){
		return(
			<div>
				Enter Data : <input type="text" ref={this.inputRef}/><br/><br/>
			</div>
		)
	}
}
export default BasicClassComponentChildElementRef;
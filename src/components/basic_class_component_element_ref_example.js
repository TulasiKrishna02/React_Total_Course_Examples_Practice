import React,{Component} from 'react';

class BasicClassComponentElementRef extends Component{
	constructor(){
		super();
		this.inputRef = React.createRef();
	}
	componentDidMount(){
		this.inputRef.current.focus();
	}
	render(){
		return(
			<div>
				<h1>This is Component Ref Example</h1>
				Enter Data : <input type="text" ref={this.inputRef}/>
			</div>
		)
	}
}
export default BasicClassComponentElementRef;
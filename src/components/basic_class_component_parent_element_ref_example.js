import React,{Component} from 'react';
import BasicClassComponentChildElementRef from './basic_class_component_child_element_ref_example';

class BasicClassComponentParentElementRef extends Component{
	constructor(){
		super();
		this.childCompRef = React.createRef();
	}
	focusOnChildComp(){
		this.childCompRef.current.focusOnChildTextBox();
	}
	render(){
		return(
			<div>
				<h1>This is Parent Component Ref Example</h1>
				<BasicClassComponentChildElementRef ref={this.childCompRef}></BasicClassComponentChildElementRef>
				<button onClick={()=>this.focusOnChildComp()}>Click to Focus</button>
			</div>
		)
	}
}
export default BasicClassComponentParentElementRef;
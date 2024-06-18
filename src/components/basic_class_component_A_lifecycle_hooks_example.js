import React,{Component} from 'react';
import BasicClassComponentBLifeCycle from  './basic_class_component_B_lifecyle_hooks_example';

class BasicClassComponentALifeCycle extends Component{
	constructor(){
		super();
		this.state={
			name:"Ramesh"
		}
		console.log('This is Component A related Constructor Method');
	}
	static getDerivedStateFromProps(){
		console.log('This is Component A getDerivedStateFromProps Method');
		return null;
	}
	componentDidMount(){
		console.log('This is Component A componentDidMount Method');
	}
	render(){
		console.log('This is Component A Related  Render Method');
		return(
			<div>
				<BasicClassComponentBLifeCycle></BasicClassComponentBLifeCycle>
			</div>
		)
	}
}

export default BasicClassComponentALifeCycle;
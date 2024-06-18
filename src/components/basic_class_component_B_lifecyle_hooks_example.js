import React,{Component} from 'react';

class BasicClassComponentBLifeCycle extends Component{
	constructor(){
		super();
		console.log('This is Component B related Constructor Method');
		this.state = {
			name:"Ramesh"
		}
	}
	static getDerivedStateFromProps(){
		console.log('This is Component B related getDerivedStateFromProps Method');
		return null;
	}
	componentDidMount(){
		console.log('This is Component B related componentDidMount  method');
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log(nextState);
		console.log('This is Component B related shouldComponentDidUpdate  method');
		return true;
	}
	getSnapshotBeforeUpdate(prevProps,prevState){
		console.log(prevState);
		console.log('This is Component B related getSnapshotBeforeUpdate  method');
		return null;
	}
	componentDidUpdate(){
		console.log('This is Component B related componentDidUpdate  method')
	}
	changeName(){
		this.setState({
			name:"Prabhas"
		})
	}
	render(){
		console.log('This is Component B Related  Render Method');
		return(
			<div>
				<h1>My name is {this.state.name}</h1>
				<button onClick={()=>this.changeName()}>Change Name</button>
			</div>
		)
	}
}

export default BasicClassComponentBLifeCycle;
/*
Notes:
======
What are lifecyclehooks?and Explain them?
=====================================
lifecycle:
===========
The loading process of a component in the browser is called a lifecycle

lifecycle hooks:
================
lifecycle hooks are pre defined methods in reactjs which are used to manipulate 
the loading(before and immediately after loading) process of a component

Below are some lifecycle hooks
==============================
i) constructor
ii) static getDerivedStateFromProps
iii)render
iv)componentDidMount
v)shouldComponentUpdate
vi)getSnapshotBeforeUpdate
vii)componentDidUpdate

Component loading Lifecycle hooks
=======================================
i)constructor:
==============
constructor method will load before loading of component and that related content

This method will call only once.

ii) static getDerivedStateFromProps:
==========================================
This mehtod will load after loading of constructor method and before loading of component and that related content.

This mehtod will call after immediately component updated(any changes made by user in the browser).
 
This method has to return whatever required or it should return null

iii)render:
===========
This method is used to display view page of the component.

This method must contain return keyword to display the view page(content with structure)

This method will call after loading of "shouldComponentUpdate" method.

It will display the latest data in view page.



iv)componentDidMount:
==========================
This method will call automatically right after loading of render method

In simple words, this method will load automatically right after loading of component and that related data

Component update related lifecycle hooks
=========================================
v)shouldComponentUpdate:
==========================
This method will load automatically after any updates in the component.

It will contain latest state data/values.

This method has to return true or false;

vi)getSnapshotBeforeUpdate:
============================

This method will call after loading of "shouldComponentUpdate" method.

This method will contain previous state data/values.

This method has to return whatever required or should return null

vii)componentDidUpdate:
=======================
This method will call after loading of "getSnapshotBeforeUpdate" method.

In simple words after component updated.
*/
import React,{Component} from 'react';

class BasicClassComponentExample extends Component{
	render(){
		return(
			<div>
				<h1>This is Basic Class Component</h1>
				<h2>This is first reactjs Class example</h2>
			</div>
		)
	}
}

export default BasicClassComponentExample;

/*Notes
=======
What is a component?
====================
A component is nothing but re-usable block of code.

A component is a combination of view and view related functionality

we have two types of components.They are

i) class component
ii) funciton component

In older version(before 2020) of reactjs dynamic data handles by class component, static data handles by function component.

But now in latest versions(from 2020 onwards) of reactjs dynamic data handles by function components with the help of hooks.

how to create class components?
================================
class components are created by using a class extending parent class called "Component"."Component" is a pre-defined class in reactjs.

First letter of class component must be Capital letter.

Every class component should have render method.In that render method we must use return statement to display our view page.

After creating class component we must export.

After Export we can import the component wherever we want in the reactjs application.

After importing, Class Component's realate class can be used as "JSX" tag to call that class component into other components.
*/
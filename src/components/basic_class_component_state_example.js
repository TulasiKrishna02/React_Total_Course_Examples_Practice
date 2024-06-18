import React,{Component} from 'react';

class BasicClassComponentState extends Component{
	constructor(){
		super();
		this.state = {
			name:"Prabhas"
		}
	}
	render(){
		return(
			<div>
				<h1>This is Class Component State Example</h1>
				<h2>My name is {this.state.name}</h2>
			</div>
		)
	}
}

export default BasicClassComponentState;

/*Notes
========
What is "state" in class component?
=================================
A "state" is an object which contains the data.The data whatever we specified in the "state" object that data can be accesible in the entire component.

In order to define a "state" object we must use "constructor" method."contstructor()" is a pre-defined method which will call automatically whenever the class is instatiated(creating object for a class).
In the "constructor" method we must use "super" keyword as a method to call parent class (Component) related "constructor" method into the current class component's "constructor" method.

We must use "this" keyword infront of "state" object in class component.

In order to manipulate "state" object data we must use "setState" method."setState" method also a pre-defined method in reactjs.

We must use "this" keyword infront of "setState" method in class component.

We must use "this" keyword infront of every user-defined method whenever we are calling in an event.
*/

import React,{Component} from 'react';

class BasicClassComponentProps extends Component{
	render(props){
		/*const name = this.props.name;
		const technology = this.props.technology;*/
		
		const {name,technology} = this.props;
		return(
			<div>
				<h1>This is Class Component Props</h1>
				<h2>My name is {name}, I am an {technology} Teacher</h2>
			</div>
		)
	}
}

export default BasicClassComponentProps;


/*
what are props and how to work with class components?
=========================================
props:
========
Props are nothing but the data which coming from parent component to child component.

In order to work with props we need to write a parameter with the name  "props"  in the class component related render method.

Then from that parameter we can assign to any variable but we must use "this" keyword infront of "props"

e.g:
=====
const name = this.props.name;
const job_role = this.props.job_role;

what is destructuring props?
===========================
destructuring is nothing but assign the props which are coming from the parent component to child component with the same variable names.

e.g:
======
Parent component
  <BasicClassComponentPropsExample name="ramesh" job_role="Reactjs Teacher"></BasicClassComponentPropsExample>
 
Note:
----------
 
  In the above line "name" and "job_role" are the props
  
  child component:
  ------------------
  const {name,job_role} = this.props;
  
Note:
----------
 In the above code we are assigning props to "name", "job_role" variables. 
*/
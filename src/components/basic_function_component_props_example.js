import React from 'react';

function BasicFunctionComponentProps(props){
	/*const name = props.name;
	const technology = props.technology;*/
	
	const {name,technology} = props;
	return(
		<div>
			<h1>This is Function Component Props</h1>
			<h2>My name {name}, I am a {technology} Teacher</h2>
		</div>
	)
}

export default BasicFunctionComponentProps;

/*
what are props and how to work with props in function component?
=========================================
props:
========
Props are nothing but the data which is coming from parent component to child component.

In order to work with props we need to write a parameter with the name preferably "props" or with any other name in the function component.

Then from that parameter we can assign to any variable

what is destructuring props?
=======================
destructuring is nothing but assign the props which are coming from the parent compont to child component with the same variable names.

e.g:
======
Parent component
  <BasicFunctionComponentPropsExample name="ramesh babu" designation="Reactjs Teacher"></BasicFunctionComponentPropsExample>
 
Note:
----------
 
  In the above line "name" and "designation" are the props
  
  child component:
  ------------------
  const {name,designation} = props;
  
Note:
----------
 In the above code we are assigning props to "name", "designation" variables. 
*/

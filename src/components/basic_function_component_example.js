import React from 'react';

function BasicFunctionComponent(){
	return(
	<div>
		<h1>This is Function Component</h1>
		<h2>This is second reactjs Class</h2>
	</div>
	)
}

export default BasicFunctionComponent;

/*Notes
=======
What is a component?
====================
A component is nothing but re-usable block of code.

A component is a combination of view and view related fuunctionality

we have two types of components.They are

i) class component
ii) funciton component

In older version(before 2020) of reactjs dynamic data handles by class component, static data handles by function component.

But now in latest versions(from 2020 onwards) of reactjs dynamic data handles by function components with the help of hooks.

how to create function component?
==================================
function components are created by using a function keyword and a name for that function.

First letter of function component must be Capital letter.

Every function component should have return statement to display our view page.

After creating function component we must export.

After Export we can import the component wherever we want in the reactjs application.

After importing, function Component's function name can be used as "JSX" tag to call that function component into other components.
*/
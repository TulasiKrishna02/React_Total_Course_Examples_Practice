import React,{useState,useEffect} from  'react';

function BasicFunctionComponentChangeTitleTwo(){
	const [count,setCount] = useState(0);
	const [name,setName]=useState('');
	useEffect(()=>{
		console.log('hi');
		document.title=`Clicked ${count} times`;
	},[count]);
	return(
		<div>
			Enter Data:<input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br/><br/>
			<button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
		</div>
	)
}

export default BasicFunctionComponentChangeTitleTwo;

/*
Notes:
=========
What are "useState" and "useEffect" hooks in reactjs?
========================================================
"useState" and "useEffect" are pre-defined hooks/methods related to function components in reactjs

useState:
==========
This hook is used to assign a dynamic value to a variable.

This hook expects two parameters

i) variable
ii) user defined method to manipulate the value of the variable dynamically.

e.g:
======
const [count,setCount] = useState(0);

Note:
======
In the above example "count" is a variable which value is "0".

"setCount" is a user defined method.This method can manipulate "count" variable value dynamically

useEffect:
==============
"useEffect" hook will call automatically whenever the function component render/loading and updated in the browser.

"useEffect" hook expects function as an arguement, an array of variable which should observed whether their values are updatated or not.
*/
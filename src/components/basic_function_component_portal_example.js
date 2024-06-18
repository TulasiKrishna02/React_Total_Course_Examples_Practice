import React from 'react';
import ReactDOM from 'react-dom';

function BasicFunctionComponentPortal(){
	return ReactDOM.createPortal(
		<div>
			<h1>This is Function Component Portal</h1>
		</div>,
		document.getElementById('function-comp-portal')
	)
}

export default BasicFunctionComponentPortal;

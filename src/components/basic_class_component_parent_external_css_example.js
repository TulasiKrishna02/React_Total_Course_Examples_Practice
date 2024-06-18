import React,{Component} from 'react';
import  BasicClassComponentChildExternalCSS from  './basic_class_component_child_external_css_example';

import './css/sample_external_styles_two.css';

class BasicClassComponentParentExternalCSS extends Component{
	
	render(){
		return(
			<div>
				<h1 className="headingStyles">This is External CSS Example</h1>
				<BasicClassComponentChildExternalCSS></BasicClassComponentChildExternalCSS>
			</div>
		)
	}
}

export default BasicClassComponentParentExternalCSS;

/*
Notes:
========
What is the difference between external css and module css?
=================================
External css:
==============
External css will apply for that particular component and automatically to it's child components also.

External css files no need to assign to any variable.Directly we can apply the css.

External css files we need to save with the extension ".css".


Note:
-------
"external.css" related classes can be inherited into child components.

Module.css:
=============
Module css will apply for that particular component Automatically we can not apply the css in the child components

Module css files we need to assign to a variable.That variable will become an object.We need to use all the classes through that object only.

Module css files we need to save with "module.css" extension.

Note:
-------
"module.css" related classes can not be inherited into child components.

*/
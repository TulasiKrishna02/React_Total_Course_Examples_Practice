import React,{Component} from 'react';
import {Consumer} from './user_context';

class BasicClassComponentF extends Component{
	
	render(){
		return(
			<Consumer>
				{
					(username)=>{
						return(
							<div>
								<h1>This is Class Component F Example</h1>
								<h2>Welcome {username}, You have registered successfully</h2>								
							</div>
						)
					}
				}
							
			</Consumer>
		)
	}
}
export default BasicClassComponentF;
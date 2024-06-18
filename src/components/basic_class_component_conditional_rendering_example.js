import React,{Component} from 'react';

class BasicClassComponentCondtionalRender extends Component{
	constructor(){
		super();
		this.state = {
			isLoggedIn : true
		}
	}
	/*render(){
		if(this.state.isLoggedIn){
			return(
				<div>
					<h1>Welcome Ramesh</h1>
				</div>
			)
		}else{
			return(
				<div>
					<h1>Welcome Guest</h1>
				</div>
			)
		}
		
	}*/
	
	/*render(){
		let message;
		if(this.state.isLoggedIn){
			message = "Welcome Ramesh";
		}else{
			message = "Welcome Guest"
		}
		return(
			<div>
				<h1>{message}</h1>
			</div>
		)
	}*/
	
	/*render(){
		let message;
		this.state.isLoggedIn?message="Welcome Ramesh":message="Welcome Guest"
		return(
			<div>
				<h1>{message}</h1>
			</div>
		)
	}*/
	
	render(){
		return(
		(this.state.isLoggedIn)&&(
			<div>
				<h1>Welcome Ramesh</h1>
			</div>
		)
	)
	}
}

export default BasicClassComponentCondtionalRender;
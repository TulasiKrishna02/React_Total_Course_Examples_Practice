import React,{Component} from 'react';

class BasicClassComponentChangeTitle extends Component{
	constructor(){
		super();
		this.state = {
			count:0
		}
	}
	
	componentDidMount(){
		//document.title = "Clicked "+this.state.count+" times";
		document.title = `Clicked ${this.state.count} times`;
	}
	changeCount(){
		this.setState({
			count:this.state.count+1
		})
	}
	componentDidUpdate(){
		document.title = `Clicked ${this.state.count} times`;
	}
	render(){
		return(
			<div>
				<button onClick={()=>this.changeCount()}>Clicked {this.state.count} times</button>
			</div>
		)
	}
}

export default BasicClassComponentChangeTitle;
import React,{Component} from 'react';

class BasicClassComponentChangeTitleTwo extends Component{
	constructor(){
		super();
		this.state={
			count:0,
			name:''
		}
	}
	componentDidMount(){
		document.title = `Clicked ${this.state.count} times`;
	}
	changeCount(){
		this.setState({
			count:this.state.count+1
		})
	}
	componentDidUpdate(prevPros,prevState){
		if(prevState.count!=this.state.count){
		console.log('method calling');
		document.title=`Clicked ${this.state.count} times`;
		}
	}
	render(){
		return(
			<div>
				Enter Data : <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/><br/><br/>
				<button onClick={()=>this.changeCount()}>Clicked {this.state.count} times</button>
			</div>
		)
	}
}

export default BasicClassComponentChangeTitleTwo;
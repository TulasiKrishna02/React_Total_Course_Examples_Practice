import React,{Component} from 'react';

class BasicClassComponentListDisplay extends Component{
	
	render(){
		var students = ["bhanupriaya","satya praveen","kumar","sreekanth","gopi"];
		var map_results=students.map((stu_name)=>{
			return <h2>{stu_name}</h2>
		});
		return(
			<div>
				<h1>This is List Display</h1>
				{map_results}
			</div>
		)
	}
}

export default BasicClassComponentListDisplay; 
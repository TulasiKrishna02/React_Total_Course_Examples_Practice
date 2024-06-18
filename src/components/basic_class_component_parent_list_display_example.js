import React,{Component} from 'react';
import BasicClassComponentChildListDisplay from './basic_class_component_child_list_display_example';
class BasicClassComponentParentListDisplay extends Component{
	
	render(){
		var studentsObj = [
			{
				"id":1,
				"firstname":"bhanu",
				"lastname":"priya",
				"email":"test@test.com"
			},
			{
				"id":2,
				"firstname":"satya",
				"lastname":"praveen",
				"email":"test2@test.com"
			},
			{
				"id":3,
				"firstname":"kumar",
				"lastname":"m",
				"email":"test3@test.com"
			},
			{
				"id":4,
				"firstname":"sreekanth",
				"lastname":"kumar",
				"email":"test4@test.com"
			},
			{
				"id":5,
				"firstname":"gopi",
				"lastname":"krishna",
				"email":"test5@test.com"
			}
		];
		var map_results = studentsObj.map((stuObj)=>{
			return <h2 key={stuObj.id}>{stuObj.firstname}</h2>
		});
		return(
			<div>
				<h1>This is List Display</h1>
				<BasicClassComponentChildListDisplay students_data={map_results}></BasicClassComponentChildListDisplay>
			</div>
		)
	}
}

export default BasicClassComponentParentListDisplay; 
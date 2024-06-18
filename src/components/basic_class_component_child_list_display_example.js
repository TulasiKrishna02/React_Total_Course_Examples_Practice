import React,{Component} from 'react';

class BasicClassComponentChildListDisplay extends Component{
	
	render(props){
		
		return(
			<div>
			{this.props.students_data}
				
			</div>
		)
	}
}

export default BasicClassComponentChildListDisplay; 
import React,{Component} from 'react';


class BasicClassComponentChildFragment extends Component{
	
	render(){
		/*return (
			<React.Fragment>
					<tr>
						<td>10</td>
						<td>Gopi</td>
						<td>Krishna</td>
						<td>test@test.com</td>
					</tr>
					<tr>
						<td>11</td>
						<td>satya</td>
						<td>praveen</td>
						<td>test2@test.com</td>
					</tr>
				
			</React.Fragment>	
			
		)*/
		
		return (
			<>
					<tr>
						<td>10</td>
						<td>Gopi</td>
						<td>Krishna</td>
						<td>test@test.com</td>
					</tr>
					<tr>
						<td>11</td>
						<td>satya</td>
						<td>praveen</td>
						<td>test2@test.com</td>
					</tr>
				
			</>	
			
		)
	}
}
export default BasicClassComponentChildFragment;
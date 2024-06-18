import React,{Component} from 'react';
import BasicClassComponentChildFragment from './basic_class_component_child_fragment_example';

class BasicClassComponentParentFragment extends Component{
	
	render(){
		return (
			<table width="100%" border="1" cellSpacing="0">
				<thead>
					<tr>
						<td>S.No</td>
						<td>Firstname</td>
						<td>Lastname</td>
						<td>E-mail</td>
					</tr>
				</thead>
				<tbody>
					<BasicClassComponentChildFragment></BasicClassComponentChildFragment>
				</tbody>
				
			</table>
		)
	}
}
export default BasicClassComponentParentFragment;
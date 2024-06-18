import React from 'react';
import {useNavigate} from 'react-router-dom'; 
import { useAuth } from './auth';

function Profile(){
	const navigate = useNavigate();
	const auth = useAuth();
	const logout = ()=>{
		auth.logout();
		navigate('/');
	}
	return(
		<div>
			<h1>This is Profile Page of {auth.user}</h1>
			<button onClick={()=>logout()}>Logout</button>
			
		</div>
	)
}

export default Profile;
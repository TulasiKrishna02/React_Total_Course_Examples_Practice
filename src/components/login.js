import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'; 
import {useAuth} from './auth';

function Login(){
	const [user,setUser] = useState('');
	const auth = useAuth();
	const navigate = useNavigate();
	const login=(user)=>{
		auth.login(user);
		navigate('/profile');
	}
	return(
		<div>
		<br/>
			Enter Username : <input type="text" value={user} onChange={(event)=>setUser(event.target.value)}/><br/>
			<button onClick={()=>login(user)}>Login</button>
		</div>
	)
}

export default Login;
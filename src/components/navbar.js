import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(){
	return(
		<div>
			<NavLink to="/">Home</NavLink> | <NavLink to="/about-me">About</NavLink> | <NavLink to="/products">Products</NavLink> | <NavLink to="/login">Login</NavLink> | <NavLink to="/profile">Profile</NavLink>
		</div>
	)
}

export default Navbar;
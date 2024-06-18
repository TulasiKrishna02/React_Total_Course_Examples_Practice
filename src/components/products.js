import React from 'react';
import {Link,Outlet} from 'react-router-dom';
function Products(){
	return(
		<div>
			<h1>This is Products Page</h1>
			
			<Link to="/products/featured-products">Featured Products</Link> | <Link to="/products/new-products">New Products</Link>
			
			<Outlet></Outlet>
		</div>
	)
}

export default Products;
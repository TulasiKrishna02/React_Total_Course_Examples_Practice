import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
//import About from './about';

import Products from './products';
import FeaturedProducts from './featuredproducts';
import NewProducts from './newproducts';

import {AuthProvider} from './auth';
import Login from './login';
import Profile from './profile';
const LazyAbout = React.lazy(()=>import('./about'));
function MainMenu(){
	return(
		<div>
		<AuthProvider>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				{/*<Route path="/about-me" element={<About></About>}></Route>*/}
				
				<Route path="/about-me" element={
					<React.Suspense>
						<LazyAbout></LazyAbout>
					</React.Suspense>
					}
				></Route>
				<Route path="/products" element={<Products></Products>}>
					<Route index element={<FeaturedProducts></FeaturedProducts>}></Route>
					
					<Route path="featured-products" element={<FeaturedProducts></FeaturedProducts>}></Route>
					<Route path="new-products" element={<NewProducts></NewProducts>}></Route>
				</Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/profile" element={<Profile></Profile>}></Route>
			</Routes>
			</AuthProvider>
		</div>
	)
}

export default MainMenu;
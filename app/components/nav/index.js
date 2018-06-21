import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const checkURL = (match, location) => {
	console.log(match);//{path: "/c", url: "/c", isExact: true, params: {…}}
	console.log(location);//{pathname: "/c", search: "", hash: "", state: undefined, key: "7nz33w"}
	console.log(location.search);// ?hello=world
	console.log(location.hash);// #/helloworld
};

//activeClassName 当前点击的页面
//Link同NavLink，但是Link没有activeClassName，所以以后就使用react-router-dom哄的NavLink就好了
//<NavLink isActive={checkURL} to="/c/?hello=world" activeClassName="blue">CCC|search</NavLink> | &nbsp;
//<NavLink isActive={checkURL} to="/c/#/helloworld" activeClassName="blue">CCC|hash</NavLink> | &nbsp;
const NavBar = () => (
	<div>
		<NavLink exact to="/" activeClassName="green" activeStyle={{fontSize:"20px"}}>Button</NavLink> | &nbsp;
		<NavLink to="/card" activeClassName="green" activeStyle={{fontSize:"20px"}}>Card</NavLink> | &nbsp;
		<NavLink to="/checkbox" activeClassName="green" activeStyle={{fontSize:"20px"}}>Checkbox</NavLink> | &nbsp;
		<NavLink to="/combo" activeClassName="green" activeStyle={{fontSize:"20px"}}>Combo</NavLink> | &nbsp;
		<NavLink to="/iconbutton" activeClassName="green" activeStyle={{fontSize:"20px"}}>IconButton</NavLink> | &nbsp;
		<NavLink to="/input" activeClassName="green" activeStyle={{fontSize:"20px"}}>Input</NavLink> | &nbsp;
		<NavLink to="/listbox" activeClassName="green" activeStyle={{fontSize:"20px"}}>Listbox</NavLink> | &nbsp;
		<NavLink to="/progress" activeClassName="green" activeStyle={{fontSize:"20px"}}>Progress</NavLink> | &nbsp;
		<NavLink to="/radio" activeClassName="green" activeStyle={{fontSize:"20px"}}>Radio</NavLink> | &nbsp;
		<NavLink to="/radiogroup" activeClassName="green" activeStyle={{fontSize:"20px"}}>radioGroup</NavLink> | &nbsp;
		<NavLink to="/slider" activeClassName="green" activeStyle={{fontSize:"20px"}}>Slider</NavLink> | &nbsp;
		<NavLink to="/textarea" activeClassName="green" activeStyle={{fontSize:"20px"}}>Textarea</NavLink> | &nbsp;
		<NavLink to="/toggle" activeClassName="green" activeStyle={{fontSize:"20px"}}>Toggle</NavLink> | &nbsp;
		<NavLink to="/tooltip" activeClassName="green" activeStyle={{fontSize:"20px"}}>Tooltip</NavLink>
	</div>
);

export default NavBar;
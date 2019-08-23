import React from 'react'
import Filter from './Filter'
import cartIcon from '../cart.png'
import Cart from './Cart'

function Navbar(props) {
	return (
	<div className="nav-bar">
	<div onClick={(e) => props.onRenderChange("CART")} className="nav-item"><img className={"icon"}alt="cart" src={cartIcon}/></div>
	<div onClick={props.onRenderChange} className="nav-item"> SHOP </div>
    <div onClick={props.onRenderChange} className="nav-item"> HOME </div>
    <div onClick={props.onRenderChange} className="nav-item">SWOP-SHOP </div>
    <div onClick={props.onRenderChange} className="nav-item">{props.logState ? "CUSTOMER" : "LOGIN"}  </div>
    
	
    <div className="dropdown-content">{props.cartItems.map(item=><Cart {...item}/>)}</div>
	</div>
	)
}

export default Navbar;

// <Filter filter={props.filter} onFilterChange={props.onFilterChange}/>
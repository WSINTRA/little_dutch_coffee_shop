import React from 'react'

function filter(props) {
	return (
	<div >
		<div className="nav-item">
		<div className="text-field">
		<input 
		onChange={(event)=>props.onFilterChange(event.target.value)} 
		value={props.filter} 
		type="text" 
		placeholder="filter products by name"
		/>
		</div></div>
	</div>
	)
}

export default filter;
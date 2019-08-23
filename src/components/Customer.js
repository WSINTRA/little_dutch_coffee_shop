import React from 'react'

function Customer(props) {
	return (
	<div className="grid-container">{props.customer.username}</div>
	)
}

export default Customer;
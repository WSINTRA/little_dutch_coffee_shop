import React from 'react'
import { Container, Message, Button } from 'semantic-ui-react'

function Receipt(props) {

console.log(props)
const items = [
  `Order created at ${props.order.purchases.created_at}`,
  `Order No:${props.order.purchases.id}`,
  `Total:$${props.order.total}`
]

	return (
	<div >
  <Container>
	<Message info >
    <Message.Header>{props.order.purchases.created_at ? "Order succesful" : "Something went wrong"}</Message.Header>
    <Message.List items={props.order.purchases.created_at ? items : props.order.purchases.name} />
    <Button onClick={() => window.print()}>Print</Button>
    <Button onClick={()=>props.clearOrderState()}>Close</Button>
  </Message>
  </Container>
	</div>
	)
}

export default Receipt;
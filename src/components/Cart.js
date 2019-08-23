import React from 'react'
import { Table,  Container, Button, Header,} from 'semantic-ui-react'
import { connect } from 'react-redux'

class Cart extends React.Component {

state = {
 
}

//Adds up all the products total prices
    
    
total =() => {
  if (this.props.cart.products.length >= 1){
    let cartTotal = this.props.cart.products.map(prod => parseFloat(prod.price))
    .reduce((sum, next) => sum + next)
    
    return cartTotal
  }
  else 
    return "0"
  
}

// changeQuantity = (id,e)=> {
//   console.log("change here", this.props.cart, id,e.target.value)
  
// }
quantity = (id) => {
  let count = 0
  this.props.cart.products.forEach(product => (product.id === id ? count++ : null) )
  return count
  //counts how many of each product are in the cart
}

uniq = () => { //only displays unique products in the map
  const unique = Array.from(new Set(this.props.cart.products.map(a => a.id)))
 .map(id => {
   return this.props.cart.products.find(a => a.id === id)
 })
 
  return unique
}
render () {  
 // console.log("Cart props", this.props.cart)
      return (
      <Container>
    
        <Header>Your Cart</Header>
  
       <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Subtotal</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {this.props.cart.products ? this.uniq().map(product=> 

                  <Table.Row key={product.id}>
                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>${Number(product.price).toFixed(2)}</Table.Cell>
                  <Table.Cell>{this.quantity(product.id)}</Table.Cell> 
                   <Table.Cell>{Number(product.price * this.quantity(product.id)).toFixed(2)}</Table.Cell>
                  </Table.Row>) : null}   

    </Table.Body>

  </Table>
  <Header floated='right'>Total ${this.props.cart.products ? Number(this.total()).toFixed(2) : null} </Header>
  <Button content="Secure Checkout" onClick={this.props.cart.products.length >= 1 ? ()=>this.props.secureCheckout(this.props.cart.products, Number(this.total()).toFixed(2)) : null} icon="lock"/>
  <Button content="Save Order" onClick={this.props.cart.products.length >= 1 ? ()=>this.props.saveOrder(this.props.cart.products) : null} icon="save"/>
</Container>
       )
}

}

const msp = state => {
    return { cart: state.cart }
}



export default connect(msp)(Cart);

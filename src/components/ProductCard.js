import React from 'react'
import { Form, Modal, Header, Button, Card, Image, } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ProductCard extends React.Component {


state = {
quantity: "0",
open: false,
}

changeQuantity=(value)=> {
this.setState({
  quantity: value.target.innerText
})
}

addCart=(product)=> {

this.props.addToCart(product)

setTimeout(() => {
  this.openModal();
}, 590);

}
openModal=()=> {
  this.setState(prevState=>{
    return{
      open: !prevState.open
    }
  })
}
render () {
//   const style = {
//   borderRadius: 0,
//   opacity: 0.7,
//   padding: '2em',
// }
// const options = [
//   { key: '1', text: '1', value: '1'},
//   { key: '2', text: '2', value: '2'},
//   { key: '3', text: '3', value: '3'},
//   { key: '4', text: '4', value: '4'},
//   { key: '5', text: '5', value: '5'},
// ]
const { product } = this.props
const { open } = this.state
	return (
	<Card link>
  <Image src={product.image} wrapped ui={false} />
	 <Card.Content style={{"background-color": "rgb(187,68,48)"}}>

      <Card.Header>{product.name}</Card.Header>
      <Card.Meta>
        <span className='date'>${product.price}</span>
      </Card.Meta>
      <Card.Description>
        {product.description}
      </Card.Description>
     
    </Card.Content>
     <Modal open={open}dimmer="inverted"trigger={<Button style={{"background-color": "rgba(187,68,48,0.2)"}} onClick={()=>this.openModal()}>Show More</Button>}>
    <Modal.Header style={{"background-color": "brown"}} >Add to cart</Modal.Header>
    <Modal.Content image >
      <Image wrapped size='medium' src={product.image} />
      <Modal.Description >
        <Header>{product.name} 20g</Header>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Form>
        <Form.Button style={{"background-color": "rgba(187,68,48,0.2)"}} onClick={()=>this.addCart(product)}>Add to cart</Form.Button></Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
	</Card>
	)
}
}
const mapDispatchToProps = dispatch => {
 return {
        addToCart: (item)=> {
              dispatch({type:"ADD_TO_CART", payload:item})
                          },
        }
      }

export default connect(null ,mapDispatchToProps)(ProductCard);
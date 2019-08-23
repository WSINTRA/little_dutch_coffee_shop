import React from 'react'
// import Customer from './Customer'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'


class AddNewProduct extends React.Component {
state = {
 name: "", 
 quantity: "" , 
 image: "", 
 price: "", 
 description: "",
 category: ""
}
onChange = (e) => {
  this.setState({
  [e.target.name]:e.target.value
  })
}

addNewProduct=(product)=>{
  fetch('https://secret-savannah-72600.herokuapp.com/api/v1/products', {
    method: "POST",
    headers: { 
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.myJWT}`
              },
              body: JSON.stringify({
                name: product.name, 
                quantity: product.quantity, 
                image: product.image, 
                price: product.price, 
                description: product.description,
                category: product.category,
             })

  }).then(res => res.json() )
  .then(response => {
  this.props.addProducts(response)
})
}

category = (e)=> {
  this.setState({
    category: e.target.innerText
  })
}




submitClicked = (details) => {
 this.addNewProduct(details)
}

render() {
  const catOptions = [ 
  {key: "AF",
   text: "Amsterdams Finest",
   value: "Amsterdams Finest"},
  {key: "BB",
   text: "Brooklyn baby",
   value: "Brooklyn baby"},
   {key: "CLC",
   text: "Cali Cup",
   value: "Cali Cup"},
   {key: "CC",
   text: "Canna Cup",
   value: "Canna Cup"},
   {key: "HG",
   text: "Homegrown small-batch",
   value: "Homegrown small-batch"},
   {key: "NS",
   text: "New Strains",
   value: "New Strains"},
   {key: "TY",
   text: "2019",
   value: "2019"}
   ];

  const { name, quantity, image, price, description, } = this.state
    return (
      <Form>
      <Form.Group>
         <Form.Field>
         <label>Name</label>
         <input name='name'onChange={(e)=>this.onChange(e)}value={name} placeholder='name' type='text' />
         </Form.Field>
         <Form.Field>
         <label>Quantity</label>
         <input name='quantity'onChange={(e)=>this.onChange(e)}value={quantity} placeholder='quantity' type='text' />
         </Form.Field>
         <Form.Field>
         <label>Image Url</label>
         <input name='image'onChange={(e)=>this.onChange(e)}value={image} placeholder='image' type='text' />
         </Form.Field>
         <Form.Field>
         <label>Price</label>
         <input name='price'onChange={(e)=>this.onChange(e)}value={price} placeholder='price' type='text' />
         </Form.Field>
         <Form.Field>
         <label>Description</label>
         <input name='description'onChange={(e)=>this.onChange(e)}value={description} placeholder='description' type='text' />
         </Form.Field>
         <Form.Field>
         <label>Category</label>
         <Dropdown name ="admin" onChange={(e)=>this.category(e)} placeholder='Category' search selection options={catOptions} />

         </Form.Field>
        
         </Form.Group>
         <Button onClick={()=>this.submitClicked(this.state)}>Submit</Button>
         
      </Form>
    );
  }
}
const mdp = dispatch => {
return {addProducts: (response)=>{
 dispatch({type:"FIRST_FETCH", payload:response})
}}
}

export default connect(null ,mdp)(AddNewProduct);
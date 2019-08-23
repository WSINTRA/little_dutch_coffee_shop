import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown, Button, Form, Message, } from 'semantic-ui-react'

class NewEployeeSignup extends React.Component {

state = {
firstName: "",
lastName: "",
email: "",
streetAddr: "",
usState: "",
telephone: "",
password: "",
confirmPass: "",
employee: true,
admin: false,
}

onChange = (e) => {
  this.setState({
  [e.target.name]:e.target.value
  })
}

dropDown = (e)=> {
  this.setState({
    usState: e.target.innerText
  })
}
admin = (e)=> {
  console.log(e.target.innerText)
  this.setState({
    admin: e.target.innerText
  })
}

render(){

const addressDefinitions = faker.definitions.address
const adminOptions = [ 
  {key: "Yes",
   text: "true",
   value: "true"},
  {key: "No",
   text: "false",
   value: "false"},]
 
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

    return (
      <React.Fragment>
      {this.props.user ? null : <React.Fragment>
      <Form error={false} success={false}>
      <Form.Group>
      <Form.Field>
      <label>First Name</label>
      <input onChange={(e)=>this.onChange(e)}name="firstName" placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input onChange={(e)=>this.onChange(e)}name="lastName"placeholder='Last Name' />
    </Form.Field>
    <Form.Input onChange={(e)=>this.onChange(e)}name="email"label='Email' placeholder='joe@schmoe.com' />
     <Message success header='Form Completed' content="Welcome, please login with your email and password" />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    </Form.Group>
    <Form.Group>
     <Form.Field>
      <label>Delivery Address</label>
      <input onChange={(e)=>this.onChange(e)}name="streetAddr"placeholder='Street Address' />
    </Form.Field>
    <Form.Field>
      <label>State</label>
      <Dropdown onChange={(e)=>this.dropDown(e)}name ="usState"placeholder='State' search selection options={stateOptions} />
    </Form.Field>
    <Form.Field>
      <label>Contact Telephone</label>
      <input onChange={(e)=>this.onChange(e)}name="telephone"placeholder='telephone' />
    </Form.Field>
     <Form.Field>
      <label>Password</label>
      <input onChange={(e)=>this.onChange(e)}name="password"type='password' placeholder='password' />
      <label>Confirm Password</label>
      <input onChange={(e)=>this.onChange(e)}name="confirmPass"type='password' placeholder='confirm password' />
    </Form.Field>
    </Form.Group>

    <label>Admin rights</label>
    <Dropdown name ="admin" onChange={(e)=>this.admin(e)} placeholder='Admin' search selection options={adminOptions} />
    <Button onClick={()=> this.props.createNewEmployee(this.state)}>Submit</Button>
  </Form>
  </React.Fragment>}</React.Fragment>
      
)
    
  }
}
  

export default NewEployeeSignup;
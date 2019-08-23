import React from 'react'
// import Customer from './Customer'
import { Button, Form, Container } from 'semantic-ui-react'

class Login extends React.Component {
state = {
  email: "",
  password: ""
}
onChange = (e) => {
  this.setState({
  [e.target.name]:e.target.value
  })
}

submitClicked = (details) => {
 this.props.login(details)
}

render() {
  const { email, password } = this.state
    return (
      <Container>
      <Form>
      <Form.Group>
         <Form.Field>
         <label>email</label>
         <input name='email'onChange={(e)=>this.onChange(e)}value={email} placeholder='email' type='text' />
         </Form.Field>
         <Form.Field>
         <label>password</label>
         <input name='password'onChange={(e)=>this.onChange(e)}value={password} placeholder='password' type='password'/>
         </Form.Field>
         </Form.Group>
         <Button onClick={()=>this.submitClicked(this.state)}>Submit</Button>
         
      </Form>
      </Container>
    );
  }
}

export default Login;
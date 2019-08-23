import React from 'react'
import { Button, Container, Form, Confirm } from 'semantic-ui-react'

class FrontPage extends React.Component {

	state = {
		detail: "",
		banner: "",
		side: "",
		video: "",
		open: false,
	}


close = () => {
 
	this.setState({ open: false }) 
	alert("Check homepage for results")
}

onChange = (e) => {
  this.setState({
  [e.target.name]:e.target.value
  })
}

submitAd = () => {
	this.setState({ open: true })
	fetch('https://secret-savannah-72600.herokuapp.com/frontad', {
    method: "POST",
    headers: { 
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.myJWT}`
              },
              body: JSON.stringify({
                detail: this.state.detail,               
                banner: this.state.banner,
                side: this.state.side,                
                video: this.state.video,               
             })

  }).then(res => res.json() )
  .then(response => {
  this.props.changeFrontPage(response)
})
}

	render () {
		return (
		<Container>
	  <Form>
    <Form.Field>
      <label>Details</label>
      <input onChange={(e)=>this.onChange(e)}name="detail" placeholder='Detail banner' />
    </Form.Field>
    <Form.Field>
      <label>Banner URL</label>
      <input onChange={(e)=>this.onChange(e)}name="banner" placeholder='Banner image url' />
    </Form.Field>
     <Form.Field>
      <label>Side Promotion URL</label>
      <input onChange={(e)=>this.onChange(e)}name="side" placeholder='Side promotion image url' />
    </Form.Field>
     <Form.Field>
      <label>Youtube video code for promo video</label>
      <input onChange={(e)=>this.onChange(e)}name="video" placeholder='eg.. UDgXOnD4HI0' />
    </Form.Field>
    
    <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} />
    <Button type='submit'onClick={this.submitAd}>Submit</Button>
  </Form></Container>
	)
	}
	
}

export default FrontPage;

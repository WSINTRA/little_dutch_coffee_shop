import React from 'react'
import Products from './Products'
import { Embed, 
  Dropdown, 
  Menu, 
  Input,
  Grid, 
  Image, 
} from 'semantic-ui-react'
import Signup from './Signup.js'
import { connect } from 'react-redux'
import Login from './Login'
import Cart from './Cart'
import Receipt from './Receipt'
import Admin from './Admin'
import dutch from './dutch.png'
import sale from './sale.png'
import cbd from './CBD.png'
import video from './video.png'
import bush from './bush.png'
import Search from './Search'

class Home extends React.Component {


    state = {
      activeItem: "home",
      searchTerm: "",
    }

    handleItemClick = (e, { name }) => {

    this.setState({ 
      activeItem: name,
      cat: e.target.getAttribute('cat')})
    }
    
    searchItem =(e)=> {
      
      this.setState({
          searchTerm: e.target.value,
          activeItem: "search",
         
      })
    }

    renderCategories = () => {
        return (this.props.categories.map(category =>
            <Dropdown.Item 
               name={"products"} 
               cat={category.category_name}
               onClick={this.handleItemClick} >
             {category.category_name}
             </Dropdown.Item>))
    }

    render() {

        const { activeItem, cat, searchTerm } = this.state
        const { secureCheckout, saveOrder, createNewEmployee } = this.props
        const EmbedExampleYouTube = () => (
  <Embed brandedUI autoplay={false}
    color='white' active="true" id={this.props.frontAd.video_url} source='youtube' />
)
        
return (

  <div className="container">
   

   <div className="header">
       <Menu inverted style={{"padding": "1em", "background-color": "brown"}}>

        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          Little Dutch Coffee
        </Menu.Item>

        <Dropdown item text='Shop'>
        <Dropdown.Menu>
        {this.renderCategories()}
        </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
         {this.props.user ? this.props.user.admin || this.props.user.employee ? 
              <Menu.Item name='admin' active={activeItem === 'admin'} onClick={this.handleItemClick}>
               Staff Menu
              </Menu.Item> : null : null}

         {this.props.user ?  <React.Fragment> 
          <Menu.Item 
          name='user' 
          active={activeItem === 'user'} 
          onClick={this.handleItemClick}>
            {this.props.user.first_name + " " + this.props.user.last_name}
          </Menu.Item>

          <Menu.Item 
          name='logout' 
          active={activeItem === 'logout'} 
          onClick={this.props.logout}>
            Logout
          </Menu.Item>

          <Menu.Item 
          name='cart' 
          active={activeItem === 'cart'} 
          onClick={this.handleItemClick}>
            Cart
          </Menu.Item>

          </React.Fragment> : <React.Fragment>  
          <Menu.Item 
          name='signup' 
          active={activeItem === 'signup'} 
          onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item 
          name='login' 
          active={activeItem === 'login'} 
          onClick={this.handleItemClick}>
            Login
          </Menu.Item>

          <Menu.Item 
          name='cart' 
          active={activeItem === 'cart'} 
          onClick={this.handleItemClick}>
            Cart
          </Menu.Item>   
          </React.Fragment>}
         
          
          <Menu.Item 
          name='help' 
          active={activeItem === 'help'} 
          onClick={this.handleItemClick}>
            Help
          </Menu.Item>


        </Menu.Menu>

      </Menu>

    </div>


   <div className="body">

       <Grid>
       <Grid.Row >
             <Grid.Column width={4}>
             <Image size="medium"src={dutch} alt="the little dutch coffee shop"/>
             <div className="padding">Online Dispensary</div>

             </Grid.Column>

             <Grid.Column width={11}>
             <Input style={{"width": "53.5vw"}}onChange={(e)=>this.searchItem(e)} className='icon' placeholder='Search...' /><br/>
               {this.props.frontAd.details ? this.props.frontAd.details.endsWith(".jpg") ? <Image src={this.props.frontAd.details} size="massive"/> : this.props.frontAd.details : null}
             </Grid.Column>
       </Grid.Row>
       </Grid>
       {activeItem === 'search' ? <Search searchTerm={searchTerm}/> : null}
       {activeItem === 'home' ? <div>
         <Grid >
          <Grid.Row>
            <Grid.Column width={4}>
             <Image src={this.props.frontAd.side_url} alt="CBD distributor" />
            </Grid.Column>
            <Grid.Column width={8}>
            {EmbedExampleYouTube()}<br/>
            <Image src={this.props.frontAd.banner_url} />
            
           </Grid.Column>
          </Grid.Row>

            <Grid.Row>
            <Grid.Column width={3}>
             
            </Grid.Column>
            <Grid.Column width={10}>
             
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
     </div> : null }

      {activeItem === 'products' ? <Products category={cat}/> : null }
      {activeItem === 'signup' ? 
      <Signup 
      user={this.props.user}
      createNewCustomer={this.props.createNewCustomer}/> : null }

      {activeItem === 'login' ? this.props.user ? 
      <div>Welcome {this.props.user.first_name}</div> : 
      <Login login={this.props.login}/>  : null }
      {activeItem === 'cart' ? this.props.order ? 
       <Receipt 
        clearOrderState={this.props.clearOrderState}
        order={this.props.order}/> : 
        <Cart saveOrder={saveOrder} 
               secureCheckout={secureCheckout}/> : null }

      {activeItem === 'admin' ? 
      this.props.user ? 
      <Admin 
      changeFrontPage={this.props.changeFrontPage}
      user={this.props.user} 
      createNewEmployee={createNewEmployee}/> : null : null}

      </div>
         
    </div>
      
      )
    }
}
const msp = state => {
    return { categories: state.category }
}

export default connect(msp)(Home);
import React from 'react'
import {Header, Icon, Table, Input, Menu,  Grid} from 'semantic-ui-react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import { connect } from 'react-redux'
import LineChart from '../LineChart'
import EmployeeSignup from './EmployeeSignup'
import AddNewProduct from './AddNewProduct'
import FrontPage from './FrontAd'

class Admin extends React.Component {
 state = { 
  activeItem: 'Daily Metrics',
  latestOrders: []
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount(){
    fetch('https://secret-savannah-72600.herokuapp.com/orders', {
    method: "GET",
    headers: {
        Authorization: `Bearer ${localStorage.myJWT}`
              },
  }).then(res => res.json() )
    .then(res=> 
      this.props.orderData(res),
      )

  }



dateConversion=(date)=> {
var event = new Date(date);

//console.log(event.toString());
// expected output: Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)
// (note: your timezone may vary)

//console.log(event.toDateString());
// expected output: Wed Jul 28 1993 
return event.toString()
  }

  orders=()=> {
    
    let orders = this.props.latestOrders
    return orders.slice(orders.length-6, orders.length).map(order=>{
     return <Table.Row>
        <Table.Cell collapsing>
          <Icon name='barcode' />Order ID:{order.id}
        </Table.Cell>
        <Table.Cell>Total Items:{order.purchases.length} Price :${order.total}</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          {this.dateConversion(order.created_at)}
        </Table.Cell>
      </Table.Row> 
    }
      
      ) 
  }



  render() {
    const { activeItem, } = this.state
    const { latestOrders,createNewEmployee, user, changeFrontPage } = this.props
  
    return (
    <React.Fragment>
         <Menu >
           <Menu.Item name='Daily Metrics' active={activeItem === 'Daily Metrics'} onClick={this.handleItemClick}>
          Daily Metrics
          
        </Menu.Item>
        <Menu.Item name='New Product' active={activeItem === 'New Product'} onClick={this.handleItemClick}>
          New Product
         
        </Menu.Item>

        <Menu.Item name='Edit Product' active={activeItem === 'Edit Product'} onClick={this.handleItemClick}>
          Edit Product
          
        </Menu.Item>

        <Menu.Item name='New Sales Feature' active={activeItem === 'New Sales Feature'} onClick={this.handleItemClick}>
          New Sales Feature
          
        </Menu.Item>
       { user.admin ? <Menu.Item name='Add Employee' active={activeItem === 'Add Employee'} onClick={this.handleItemClick}>
          Add/Remove Employee
          
        </Menu.Item>: null} 
        <Menu.Item>
          <Input icon='search' placeholder='Search Order By ID...' />
        </Menu.Item>
      </Menu>
      {activeItem === 'New Sales Feature' ? <FrontPage changeFrontPage={changeFrontPage} /> : null}
      {activeItem === 'New Product' ? <AddNewProduct/> : null}
  {activeItem === 'Add Employee' ? <EmployeeSignup createNewEmployee={createNewEmployee}/>: null}
   {activeItem === 'Daily Metrics' ? 
        
        <Grid padded>
        <Grid.Row columns={2}>
        <Grid.Column>
       <Header>Sales by Category in the last 24 hours</Header>
         <LineChart/>
        </Grid.Column>
        
        <Grid.Column>
         <Header>Most Popular Categories in last 24 hours</Header>
         <PieChart />
      
        </Grid.Column>
       
         </Grid.Row>

        <Grid.Row columns={2}>
        <Grid.Column>
        <Header>Sales Per Hour today</Header>
        <BarChart orders={latestOrders}/>
        </Grid.Column>
        
        <Grid.Column>
         <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Latest orders</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.orders()}
            </Table.Body>
           </Table>
        
        </Grid.Column>
       
         </Grid.Row>
        
         </Grid>

     : null }
</React.Fragment>
    );
  }
}
const mdp = dispatch => {
  return {
    orderData: (item)=> {
      dispatch({type:"ORDER_DATA", payload:item})
    },
  }
}
const msp = state => {
    return { latestOrders: state.latestOrders }
}

export default connect(msp,mdp)(Admin);
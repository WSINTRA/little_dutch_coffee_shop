import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home'
import Footer from './components/Footer'

const Url = 'http://localhost:3050/category'
class App extends React.Component {

state = {
   userData: null,
   frontAd: [],
}

changeFrontPage = (frontAd) => {
  this.setState({
    frontAd:frontAd
  })
}

componentDidMount() {
fetch(Url).then(res => res.json())
.then(response => {
  this.props.addProducts(response)
})
fetch("http://localhost:3050/frontad")
.then(res => res.json() )
.then(response => {
  this.setState({
    frontAd:response
  })
})

if (localStorage.myJWT) {
            fetch("http://localhost:3050/api/v1/profile", {
                method: "GET",
                headers: {
                Authorization: `Bearer ${localStorage.myJWT}`
                }
            }).then(res => {
                if (!res.ok) {
                    console.log("not logged in", res);
                }
                return res.json()
            }).then(res => {
             
              this.props.loadCart(res.user.cart)
                    this.setState({
                    userData: res.user,
                })
            })
        }

}

createNewEmployee = (customer) => {
  if (customer.password === customer.confirmPass) {
     fetch("http://localhost:3050/api/v1/users",{
      method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                first_name: customer.firstName,
                email: customer.email,
                last_name: customer.lastName,
                password: customer.password,
                street_address: customer.streetAddr,
                telephone: customer.telephone,
                state: customer.usState,
                admin: customer.admin,
                employee: customer.employee
             })
            }).then(res => {
            if (!res.ok) {
                const error = new Error(res)
                error.message = res.statusText
                error.name = res.status
                alert(error)
            }
            else {
              return res.json().then(userData => {
            alert("New Employee Created")
    } )
            } 
            })
  }
  else alert("Confirm password does not match!")
}
createNewCustomer = (customer) => {
  
  if (customer.password === customer.confirmPass) {
     fetch("http://localhost:3050/api/v1/users",{
      method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                first_name: customer.firstName,
                email: customer.email,
                last_name: customer.lastName,
                password: customer.password,
                street_address: customer.streetAddr,
                telephone: customer.telephone,
                state: customer.usState
             })
            }).then(res => {
            if (!res.ok) {
                const error = new Error(res)
                error.message = res.statusText
                error.name = res.status
                alert(error)
            }
            else {
              return res.json().then(userData => {
            localStorage.setItem("myJWT", userData.jwt)
            // this.props.loadCart(userData.cart)
            this.setState({
                userData: userData.user
            })
    } )
            } 
            })
  }
  else alert("Confirm password does not match!")
}

logout = () => {
  this.setState({
    userData: null
  })
  localStorage.clear()
}

loginSubmit = props => {
        fetch("http://localhost:3050/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                email: props.email,
                password: props.password
            })
        }).then(res => {
            if (!res.ok) {
                const error = new Error(res)
                error.message = res.statusText
                error.name = res.status
                alert(error)
            }
            else {
              return res.json().then(userData => {
            localStorage.setItem("myJWT", userData.jwt)
            this.props.loadCart(userData.auth.cart)
            this.setState({
                userData: userData.auth,
            })
    } )
            } 
            })
         }
saveOrder = (order) => {
  fetch("http://localhost:3050/api/v1/updateCart", {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.myJWT}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user: this.state.userData,
                order: order
            })
        })
}

secureCheckout = (order, price) => {

this.state.userData ? 
  fetch('http://localhost:3050/orders', {
    method: "POST",
    headers: {
        Authorization: `Bearer ${localStorage.myJWT}`,
       "Content-Type": "application/json",
                Accept: "application/json"
              },
               body: JSON.stringify({
                order: order,
                total: price,
                user: this.state.userData
               })
  }).then(res => res.json() )
  .then(purchases=> this.setState({
    order: { 
            purchases: purchases,
            total: price
          }
  }),
  this.props.clearCart() 
  ) : 
  alert("Please sign up or login to make an order.")
}

clearOrderState=()=> {
  this.setState({
    order: null
  })
}

render() {
 return (
<div className="App Site">
        <div className="Site-content">
              <div className="App-header">
              
              </div>
                    <div className="main">
                        <Home 
                          changeFrontPage={this.changeFrontPage}
                          frontAd={this.state.frontAd}
                          logout={this.logout}
                          user={this.state.userData}
                          login={this.loginSubmit}
                          secureCheckout={this.secureCheckout}
                          order={this.state.order}
                          clearOrderState={this.clearOrderState}
                          saveOrder={this.saveOrder}
                          createNewCustomer={this.createNewCustomer}
                          createNewEmployee={this.createNewEmployee}/>
                    </div>
        </div>
        <Footer />
</div>
  );
  }
 
}

const mdp = dispatch => {
  return {
    loadCart: (item)=> {
      dispatch({type:"LOAD_CART", payload:item})
    },
    addProducts: (response)=> {
      dispatch({type:"FIRST_FETCH", payload:response})
    },
    clearCart: ()=> {
      dispatch({type:"CLEAR_CART", payload:null})
    }
  }
}


export default connect(null,mdp)(App);

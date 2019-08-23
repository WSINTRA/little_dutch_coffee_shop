import React from 'react'
import ProductCard from './ProductCard'
import { connect } from 'react-redux'
import { Card, } from 'semantic-ui-react'

const search = (props) => {

console.log(props)

const productList = () => {
let search = props.categories.map(cat => cat.products.filter(product=> product.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ) )
let filtered = search.flat()
return filtered
}

return (
     <React.Fragment><Card.Group> {productList().map(product=> <ProductCard key={product.id} product={product}/>)}
     </Card.Group></React.Fragment>
	) 
}

const msp = state => {
  return { categories: state.category }
}

export default connect(msp)(search);
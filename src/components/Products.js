import React from 'react'
import ProductCard from './ProductCard'
import { connect } from 'react-redux'
import { Container, Header, Card, } from 'semantic-ui-react'
function Products(props) {

const productList = () => {
return	props.categories.filter(category=> category.category_name === props.category)
	.map(cat=> cat.products.map(product => <ProductCard key={product.id} product={product}/>))
}
	// let products = props.products.map(product => <ProductCard key={product.id} {...product} />)
	return (
	<Container>
	 <Header
    as='h2'
    content={props.category}
    subheader='All our strains are reputably sourced and licensed by the Bureau of Cannabis Control'
  />
	
	 <Card.Group> 
	 
	  {productList()}
    
     </Card.Group>
	</Container>
	)
}

const msp = state => {
  return { categories: state.category }
}

export default connect(msp)(Products);

// {category: "New Strains", categories: Array(6), dispatch: ƒ}
// Products.js:7 {category: "Canna Cup", categories: Array(6), dispatch: ƒ}
// Products.js:7 {category: "Cali Cup", categories: Array(6), dispatch: ƒ}
// Products.js:7 {category: "Brooklyn baby", categories: Array(6), dispatch: ƒ}
// Products.js:7 {category: "Amsterdams Finest", categories: Array(6), dispatch: ƒ}
// Products.js:7 {category: "Homegrown small-batch", categories: Array(6), dispatch: ƒ}
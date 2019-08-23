// PlayGround for data
import React from 'react'
import { connect } from 'react-redux'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const lineDataObject = [
{
name: "Amsterdams Finest", total: 0
},
{
name: "Brooklyn baby", total: 0
},
{
name: "Cali Cup", total: 0
},
{
name: "Canna Cup", total: 0
},
{
name: "Homegrown small-batch", total: 0
},
{
name: "New Strains", total: 0
},
]

const buildAnewObject = (categories,daily) => {
let sortedCategories = {}
categories.forEach((cat)=> {
  sortedCategories[cat.category_name] = {products:[]}
})
categories.forEach((cat)=> {
  cat.products.forEach(product=>{
    sortedCategories[cat.category_name].products.push(product.id)
  })
})
let entries = Object.entries(sortedCategories)
let lineData = {}
daily.forEach((sale)=> {
  sale.purchases.forEach((product)=> {
    for (const [strain, count] of entries) {
  count.products.forEach(num=> {
                               if (num === product.product_id){//Finds matches between daily sales and categories                        
        lineData[strain] = lineData[strain] ? lineData[strain] + 1 : 1;
        }
        
      })
     }
  })
 }
)
lineDataObject.forEach(line=>{
 if (lineData[line.name])
  line.total = lineData[line.name]
})
console.log(lineDataObject)
}

const DataWork = (props)=> {

  return (<div> {buildAnewObject(props.categories,props.daysOrders)} 
    <LineChart
        width={500}
        height={300}
        data={lineDataObject}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart></div>)
}

const msp = state => {
    return { categories: state.category, 
      orders: state.latestOrders, 
      daysOrders: state.daysOrders,
     }
}

export default connect(msp)(DataWork);

//So now I have all my orders and a list of all my products..
//Next thing to do is arrange the data so that I can get the category for each product sold.
//Iterate over every sale in the last 24 hours..


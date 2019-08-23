// PlayGround for data
import React from 'react'
import { connect } from 'react-redux'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const DataWork = (props) => {
// var today = new Date();
const dateConversion=(date)=> {
var event = new Date(date);
return event.toDateString()
  }

const hourConversion=(date)=> {
var event = new Date(date);
return event.getHours()
  }


const allDatesToToday=(orders)=> {
  var today = new Date().toDateString()
  let todaysOrders = []
  orders.forEach((order)=> {
    if (dateConversion(order.created_at) === today) {
      todaysOrders.push({...order})
      }
       }
    )

  return allOrdersByTheHour(todaysOrders)

}//This function will return all of the days orders
const allOrdersByTheHour=(todaysOrders)=> {
  const dailyData = [
  {
    name: '0', sph: 0, 
  },
  {
    name: '1', sph: 0, 
  },
  {
    name: '2', sph: 0, 
  },
  {
    name: '3', sph: 0, 
  },
  {
    name: '4', sph: 0, 
  },
  {
    name: '5', sph: 0, 
  },
  {
    name: '6', sph: 0,  
  },
   {
    name: '7', sph: 0,  
  },
   {
    name: '8', sph: 0, 
  },
   {
    name: '9', sph: 0,  
  },
   {
    name: '10', sph: 0, 
  },
   {
    name: '11', sph: 0,  
  },
   {
    name: '12', sph: 0,  
  },{
    name: '13', sph: 0, 
  },
  {
    name: '14', sph: 0, 
  },
  {
    name: '15', sph: 0, 
  },
  {
    name: '16', sph: 0, 
  },
  {
    name: '17', sph: 0, 
  },
  {
    name: '18', sph: 0, 
  },
  {
    name: '19', sph: 0,  
  },
   {
    name: '20', sph: 0,  
  },
   {
    name: '21', sph: 0, 
  },
   {
    name: '22', sph: 0,  
  },
   {
    name: '23', sph: 0, 
  },
];
  let hourCount = []
  let data = {}
 
  props.allTodaysSales(todaysOrders); //Passes the daily orders to redux
  todaysOrders.forEach((order)=> {
    hourCount.push(hourConversion(order.created_at))
  })
  for (var i = 0; i < hourCount.length; i++) {
    var num = hourCount[i];
    data[num] = data[num] ? data[num] + 1 : 1;//Sorts the sales by the hour into an object
    }
    
    dailyData.forEach((hour)=> {
      if (data[hour.name]) {
        hour.sph = data[hour.name]
      }
    })
  //Creates an object counts that has the frequency of sales in each hour.
    return dailyData
}
// let event = dateConversion(props.orders[0].created_at)
function CustomTooltip({ orders, payload, label, active }) {

  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].value} Sale/s</p>
        <p className="intro"></p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
}
return (

      <BarChart
        width={700}
        height={500}
        data={allDatesToToday(props.orders)}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <Tooltip content={<CustomTooltip orders={(props.orders)}/>}/>
        <Legend />
        <Bar yAxisId="left" dataKey="sph" fill="#8884d8" />
      </BarChart>
    );
}

const mdp = dispatch => {
  return {
    allTodaysSales: (item)=> {
    	dispatch({type:"DAILY_SALES", payload:item})
    }
  }
}


export default connect(null, mdp)(DataWork);
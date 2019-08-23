import { connect } from 'react-redux'
import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip
} from 'recharts';
import { Label } from 'semantic-ui-react'
//////////////////

class RenPieChart extends React.Component {
 
 state = {
  loading: true,
  lineDataObject: [],
 }


checkTotal =()=>{
  this.setState({
    lineDataObject: this.props.dailyData
  })
}

render() {
// const testObject = [...this.props.dailyData]


//////////////////

    const COLORS = ['Blue', 'Teal', 'red', 'orange', 'olive', 'green', 'purple'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


const { lineDataObject } = this.state


   return (
  <React.Fragment>
 <button onClick={this.checkTotal}> Check total </button>
   <div>
   <Label as='a' color='purple'>
      2019
    </Label>
    <Label as='a' color='blue'>
      Amsterdams Finest
    </Label>
    <Label as='a' color='green' >
     New Strains
    </Label>
    <Label as='a' color='olive' >
     Homegrown
    </Label>
    <Label as='a' color='teal' >
      Brooklyn Baby
    </Label>
    <Label as='a' color='red' >
     Cali Cup
    </Label>
    <Label as='a' color='orange' >
     Canna Cup
    </Label>
     
    
  </div>
 <PieChart width={400} height={400}>
        <Pie
          data={lineDataObject}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="total"
        >
          {
            lineDataObject.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          <Tooltip />
        </Pie>
      </PieChart>
       
      </React.Fragment>
    );
 }
 
}
const msp = state => {
    return { dailyData: state.dailyData
     }
}

export default connect(msp)(RenPieChart);



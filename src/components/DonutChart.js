import React from "react";
import {PieChart, Pie, Cell, Tooltip} from 'recharts';

const COLORS = [ "#0972ce", "#00C49F", "#FF8042","#f7b31f","#cf4b98"];

const DonutChartComp = (props) => {
  
    return(
        <PieChart width={250} height={250}>
          <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={90} label>
          {props.data.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
         </Pie>
         <Tooltip />
        </PieChart>
    )
}

export default DonutChartComp;
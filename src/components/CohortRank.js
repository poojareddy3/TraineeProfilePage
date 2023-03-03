import React from "react";
import { PieChart, Pie, Label} from 'recharts';
import { Grid } from "@mui/material";

const data = [
    {CohortName: 'O2ANJ', rank: 1}
];

const CohortRank = () => {
    return(
     <Grid sx={{marginTop: -10, marginBottom: 5, p: 5, display: 'flex', flexDirection: 'row'}}>
      <label>Rank in Cohort</label>
        <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%" cy="50%" innerRadius={40} outerRadius={80}
          fill="#0972ce"
          dataKey='rank'
          >
        <Label fontSize={30} fontWeight='bold' position="center">{data[0].rank}</Label>
        </Pie>
           </PieChart>
     
 
        </Grid>
   
    )
}

export default CohortRank;
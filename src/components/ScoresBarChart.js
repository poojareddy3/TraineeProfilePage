import * as React from "react";
import { Grid, Box } from "@mui/material";
import {BarChart, XAxis, YAxis, Bar, Legend, CartesianGrid, Tooltip } from "recharts";

function createData(Score, AssignmentScore, AssessmentScore) {
  return { Score, AssignmentScore, AssessmentScore };
}

const data = [
  createData('Score', 85, 93),
  createData('Score', 91, 87),
  createData('Score', 87, 89),
  createData('Score', 99, 91),
  createData('Score', 94, 82)
];

const ScoresBarChart = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row",  marginTop: 0 , p: 5}}>
    <label>Scores Bar Chart</label>
    <BarChart  width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}>
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Score" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="AssignmentScore" fill="#13629e" />
          <Bar dataKey="AssessmentScore" fill="#00C49F" />
    </BarChart>
    </Box>
  );
};
 
export default ScoresBarChart;

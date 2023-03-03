import { Box, Grid, ListItem, List, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import PieChartComp from "./PieChart";

const AssignmentsScores = [
  {
    name: "React Assignment",
    value: 85,
  },
  {
    name: "Selenium Assignment",
    value: 91,
  },
  {
    name: "SQL Assignment",
    value: 87,
  },
  {
    name: "DOTNET Assignment",
    value: 99,
  },
  {
    name: "Python Assignment",
    value: 94,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "lightsteelblue",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: 'black',
  fontWeight: 'bold'
}));

const Assignments = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row",  marginTop: 0 , p: 5}}>
      <label style={{ padding: 5 }}>Assignment Scores</label>
      <PieChartComp data={AssignmentsScores} />
      <Grid
        container
        spacing={1}
        sx={{
          marginLeft: 20,
          marginTop: 5,
          border: 1,
          borderColor: "black",
          maxWidth: 400,
          maxHeight: 160,
          overflow: "auto",
          color: "black",
        }}
      >
        <Grid item xs={12}>
          <Item>List Of Assignments</Item>
        </Grid>
       <List>
          {AssignmentsScores.map((i) => {
            return <ListItem>{i.name}</ListItem>;
          })}
        </List>
      
      </Grid>
      
    </Box>
  );
};

export default Assignments;

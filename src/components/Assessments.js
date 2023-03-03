import React from "react";
import {
  Box,
  ListItem,
Paper,
  Grid,
  Typography,
  List,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DonutChartComp from "./DonutChart";

const AssessmentScores = [
  {
    name: "React Quiz",
    value: 93,
  },
  {
    name: "Python Exam",
    value: 87,
  },
  {
    name: "Selenium Exam",
    value: 89,
  },
  {
    name: "SQL Quiz",
    value: 91,
  },
  {
    name: "DOTNET Quiz",
    value: 82,
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

const Assessments = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", p: 5, marginTop: -3 }}>
      <label style={{ padding: 5 }}>Assessment Scores</label>
      <DonutChartComp data={AssessmentScores} />
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
        {/* <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
          List Of Assessments
        </Typography> */}
        <List>
          {AssessmentScores.map((i) => {
            return <ListItem>{i.name}</ListItem>;
          })}
        </List>
      </Grid>
    </Box>
  );
};

export default Assessments;

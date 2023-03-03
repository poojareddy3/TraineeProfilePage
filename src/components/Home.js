import { Grid, Typography } from "@mui/material";
import React from "react";
import Assessments from "./Assessments";
import Assignments from "./Assignments";
import Attendence from "./Attendence";
import CohortRank from "./CohortRank";
import ScoresBarChart from "./ScoresBarChart";

const Home = () => {
    return(
        <>
        <Grid>
        <Typography sx={{fontSize: 50}}>Trainee Data</Typography>
        <h3  style={{fontSize: 30, color: '#cf4b98', margin: 0}}>Amy Tyler</h3>
        <h5  style={{fontSize: 20, color: '#cf4b98', margin: 0}}>O2A NJ Cohort</h5>
        </Grid>
        <Grid sx={{marginBottom: -10, marginTop: 0, display: 'flex', flexDirection: 'row'}}>
         <CohortRank />
         </Grid>
        <br></br>
        <Assignments />
        <Assessments />
        <Grid sx={{display: 'flex', flexDirection: 'row', marginRight: -5, marginBottom: 10, marginTop: 5}}>
        <ScoresBarChart />
        <Attendence />
        </Grid>
        </>
    )
}

export default Home;
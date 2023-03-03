import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, session_am_pm, attendence) {
    return { date, session_am_pm, attendence };
}

const rows = [
    createData('02/15/2023','AM','On-Time'),
    createData('02/11/2023','PM','Absent'),
    createData('02/20/2023','PM','Late'),
    createData('02/18/2023','AM','Excused'),
    createData('02/06/2023','AM','On-Time')
]

const Attendence = () => {
    return(
    <TableContainer 
    // component={Paper}
     sx={{marginLeft: 5, border: 0}}>
      <Table sx={{ width: 350, height: 300, border: 1}} aria-label="simple table">
        <TableHead sx={{backgroundColor: 'lightsteelblue'}}>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Session</TableCell>
            <TableCell align="right">Attendence</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell align="center">{row.session_am_pm}</TableCell>
              <TableCell align="center">{row.attendence}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

  export default Attendence;
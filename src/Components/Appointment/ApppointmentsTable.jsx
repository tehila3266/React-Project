import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import meetingStore from '../../Store/meetingStore';

// function createData(Id, serviceType, dateType, clientName, clientPhone, clientEmail) {
//   return { Id, serviceType, dateType, clientName, clientPhone, clientEmail };
// }




export default function BasicTable() {


  // const validDate = (dateTime) => {
  //   const today = new Date();
  //   const meetingDate = new Date(dateTime);

  //   const timeDiff = meetingDate.getTime() - today.getTime();
  //   const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //   if (diffDays < 0)
  //     return 'green'  //עבר
  //   else
  //     if (diffDays === 1) {
  //       return 'red'; //היום
  //     } else if (diffDays <= 7) {
  //       return 'orange'; //השבוע
  //     }
  //     else if (diffDays >= 7) {
  //       return 'non'; // עתיד

  //     }
  // }




  return (
    <TableContainer component={Paper} sx={{ justifyContent: 'center', maxWidth: 800, maxHeight: 400, overflow: 'auto' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">serviceType</TableCell>
            <TableCell align="right">dateTime</TableCell>
            <TableCell align="right"> clientName</TableCell>
            <TableCell align="right">clientPhone</TableCell>
            <TableCell align="right">clientEmail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {meetingStore.appointmentsArr.map((meeting) => (//לעבור בMAP על מערך פגישות מהסטור
            <TableRow
              key={meeting.clientName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            //className={validDate(meeting.dateTime)}
            >
              {/* {console.log("meeting in TableCell:",{...meeting})} */}
              {/* <TableCell sx={{ backgroundColor: validDate(meeting.dateTime) }} className={validDate(meeting.dateTime)} align="right">{meeting.id}  </TableCell> */}
              <TableCell align="right">{meeting.serviceType}</TableCell>
              <TableCell align="right">{meeting.dateTime}  </TableCell>
              <TableCell align="right">{meeting.clientName}</TableCell>
              <TableCell align="right">{meeting.clientPhone}</TableCell>
              <TableCell align="right">{meeting.clientEmail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
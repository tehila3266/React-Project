import * as React from 'react';
import { observer } from "mobx-react-lite";
import BasicTable from '../Appointment/ApppointmentsTable';
// import meetingStore from '../../Store/meetingStore';
// import AddAppointment from '../Appointment/addAppoimtment';
  

const ShowAppointments =(observer(()=>{
  


return(<>
<h2>Appointments Table</h2>
<BasicTable></BasicTable>
 



 </>)       
}))
export default ShowAppointments
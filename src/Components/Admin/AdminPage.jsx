
import * as React from 'react';
//import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
import {observer} from "mobx-react-lite";

import ShowBusinessData from '../BusinessData/showBusinessData';
// import ShowAppointments from '../Appointment/appointment';
// import ShowServices from "../Services/showServices";
import EditBussinesData from '../BusinessData/EditBussinesData';

import mainStore from "../../Store/mainStore";
import { useNavigate } from 'react-router-dom';
import serviseStore from '../../Store/serviseStore';
import {useState} from 'react';

// import { Login } from "@mui/icons-material";
const AdminPage =(observer(()=>{

//   const showDetails=()=>
//   {
//      mainStore.tempBusinnessData
//   }
    // const [isShowServices,setIsShowServices] = useState(false);

const navServices = useNavigate();

const navAppointment = useNavigate();

const [isClickEdit,setIsClickEdit]= useState(true);
//const [clickServices,setClickServices]= useState(false);
// const [clickAppointments,setClicAppointments]= useState(false);


    const hadleServices=()=>{
      //ServicesStore.isClickServices= true; // !ServicesStore.isClickServices;
     // ServicesStore.isAdmin=true;  //!serviseStore.isAdmin;
     //  navServices('/admin/services') 
    //  console.log("befor-ClickServices:",clickServices);
    //  console.log("befor-clickAppointments:",clickAppointments);

    //  setClickServices(true);
    //  { clickAppointments && setClicAppointments(false) };
    //  {clickServices &&  navServices('/admin/services') };
    //  {serviseStore.isClickServices = true}

    //  console.log("after- ClickServices:",clickServices);
    //  console.log("after- clickAppointments:",clickAppointments);
    navServices('/admin/services') ;
     {serviseStore.isClickServices = true}
     }

    const hadleAppointments=()=>{

    // // meetingStore.isClickAppointment=true;//!meetingStore.isClickAppointment;
    // console.log("befor- ClickAppointmentsss:",clickAppointments);
    // console.log("befor- clickServicesssss:",clickServices);

    // setClicAppointments(true);
    //  {clickServices &&  setClickServices(false) }//  והכפתור של הסרביסים הוא טרו אז נהפןך אותו.  אם לחצתי  על פגישןת
    //   {clickAppointments && navAppointment('/admin/appointments') }

    //  console.log("after- ClickAppointmentsss:",clickAppointments);
    //  console.log("after- clickServicesssss:",clickServices);
    navAppointment('/admin/appointments')
    }

    const handleEditBussinesData=()=>{
      setIsClickEdit(false);
      mainStore.isClickBussinesData=!mainStore.isClickBussinesData;
    }
return(<>
 <div><ShowBusinessData/></div>  

    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="medium" onClick={hadleServices}> services</Button> 
        <Button variant="outlined" size="medium" onClick={hadleAppointments} > meetings</Button>
       {isClickEdit && <Button variant="outlined" size="medium" onClick={handleEditBussinesData} > edit</Button>}
        

        {/* <Fab color="secondary" onClick={handleEditBussinesData}  >
        <EditIcon />  
      </Fab> */}
           
           {/* { ServicesStore.isClickServices &&  navServices('/admin/services') } <ShowServices></ShowServices>  */}
            {/* {meetingStore.isClickAppointment && navAppointment('/admin/appointments')} < ShowAppointments></ShowAppointments> */}
           {mainStore.isClickBussinesData && <EditBussinesData></EditBussinesData>}
     {/* {clickAppointments && navAppointment('/admin/appointments')} */}
           
      </div>
      
    </Box>
</>)
}))

export default AdminPage


import {observer} from "mobx-react-lite";
//import Login from '../LogIn/LogIn';
import mainStore from '../../Store/mainStore';
import ShowServices from '../Services/showServices';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ShowBusinessData from "../BusinessData/showBusinessData";
//import meetingStore from '../Services/showServices';
import AddAppointment from '../Appointment/addAppoimtment';
import {useState} from 'react';
import LogIn from "../LogIn/LogIn";
import meetingStore from "../../Store/meetingStore";
import Alert from '@mui/material/Alert';
//import Ccccc from '../Appointment/stam';

const User =(observer(()=>{


    const nav = useNavigate();

const [isAddAppointment,setIsAddAppointment]=useState(false);

const [ShowMeetingAdd,setShowAppointmentAdd]=useState(true);



    function handleLogin(){
      mainStore.isClickLogIn= !mainStore.isClickLogIn;
    }
    
     function handleClickAddAppointment()
     {
      setShowAppointmentAdd(false);
      setIsAddAppointment(true);
      meetingStore.isSameDate=false;

     }   

    return(<>
    {/* <Ccccc/> */}
          <ShowBusinessData/>
         <Button variant="outlined"  onClick={handleLogin}>log in</Button>
         { mainStore.isClickLogIn && <LogIn/>}
         {<div><ShowServices/></div>}
        {ShowMeetingAdd &&
        
       // <Stack spacing={1}>
         // <Skeleton variant="rectangular" width={210} height={60}>
            <Button variant="outlined" color="secondary" onClick={handleClickAddAppointment}> add meeting </Button>
            
         //</> </Skeleton>
       // </Stack>
     }
        
        
        
        
         {isAddAppointment && <AddAppointment></AddAppointment>} 
         
</>)
}))

export default User

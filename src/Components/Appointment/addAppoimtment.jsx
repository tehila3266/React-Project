import './meetings.css';
import { observer } from "mobx-react-lite";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
//import ServicesStore from '../../Store/serviseStore';
import meetingStore from "../../Store/meetingStore";
import Alert from '@mui/material/Alert';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const AddAppointment=(observer(()=>{

  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

//const [id,setId]=useState('');
// const [serviceType,setServiceType]=useState('');
// const [dateTime,setDateTime]= useState('');
// const [name,setName]= useState('');
// const [phone,setPhone]=useState('');
// const [email,setEmail]= useState('');
 
const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    
    const handleValidation = () => {
      const formFields = {...fields};
      const formErrors = {};
      let formIsValid = true;
  
    

       //Name
       if(!formFields["clientName"]){
        formIsValid = false;
        formErrors["clientName"] = "cannot be empty";
      }
  
      if(typeof formFields["clientName"] !== "undefined"){
        if(!formFields["clientName"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          formErrors["clientName"] = "only letters";
        }       
      }
   
      //Phone
        if(!formFields["clientPhone"]){
        formIsValid = false;
        formErrors["clientPhone"] = "cannot be empty";
       }

       if(typeof formFields["clientPhone"] !== "undefined"){
         if(!formFields["clientPhone"].match(/^[0-9]+$/)){
          formIsValid = false;
          formErrors["clientPhone"] = "only numbers";
          }       
        }


      //Email
      if(!formFields["clientEmail"]){
        formIsValid = false;
        formErrors["clientEmail"] = "email Cannot be empty";
      }
  
      if(typeof formFields["clientEmail"] !== "undefined"){
        let lastAtPos = formFields["clientEmail"].lastIndexOf('@');
        let lastDotPos = formFields["clientEmail"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formFields["clientEmail"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["clientEmail"].length - lastDotPos) > 2)) {
          formIsValid = false;
          formErrors["clientEmail"] = "email is not valid";
        }
      }     

      setErrors(formErrors)
      return formIsValid;
    }
    
    const handleChange = (field, value) => {
      setFields({...fields,[field]: value}) 
    }
    

    const contactSubmit = (e) => {
      e.preventDefault();
      if(handleValidation()){
         meetingStore.appointmentsArr.map((meeting)=>{
          if(dateTime ==meeting.dateTime)
             alert("there is exist appointment in the same");
         })
          alert("Form submitted");
      }else{
        alert("Form has errors.")
      }
    }
const saveNewAppointment=(e)=>{
  const { serviceType,  clientName, clientPhone, clientEmail,dateTime } = fields
  console.log("all the variable field:", { serviceType,  clientName, clientPhone, clientEmail,dateTime });
  console.log("fields:",{...fields});
  contactSubmit(e);
  //לטפל בשליחה
 // console.log("save new meeting:" ,{serviceType,dateTime,name,phone,email});

  meetingStore.addAppointments(serviceType,  clientName, clientPhone, clientEmail,dateTime);
  
  /* meetingStore.count, */
  {meetingStore.isSameDate ? <Alert severity="error">Appointment is not available!</Alert> : ' '}

  //console.log( "meetingStore.count" ,meetingStore.count);
  handleClose();

}


return(<>
<React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      add meeting
      </Button>
      {console.log("click-dialog:"+open)}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form'
        }}
      >
        <DialogTitle>Add New Appointment</DialogTitle>
        <DialogContent >

        {/* {/* <TextField autoFocus  margin="dense" id="id" name="idMeeting" label="Id"  type="text"  variant="outlined" color="secondary" value={id} onChange={(e)=>setId(e.target.value)}/> */}
        {/* <br/>  */}
        <TextField autoFocus  margin="dense" id="Type" name="Type" label="ServiceType"  type="text"  variant="outlined" color="secondary" value={fields["serviceType"] || ""}  onChange={(e)=>handleChange('serviceType', e.target.value)}/>
         <br/> 
        <TextField autoFocus  margin="dense" id="Name" name="Name" label="Name"  type="text "  variant="outlined" color="secondary" value={fields["clientName"] || ""}  onChange={(e)=>handleChange('clientName', e.target.value)}  />
         <br/>
        <span className="error">{errors["clientName"]}</span>
         <br/> 
        <TextField autoFocus  margin="dense" id="Phone" name="Phone" label="Phone"  type="text "  variant="outlined" color="secondary" value={fields["clientPhone"] || ""} onChange={(e)=>handleChange('clientPhone', e.target.value)}/>
         <br/>
          <span className="error">{errors["clientPhone"]}</span>
        <br/>
        <TextField autoFocus  margin="dense" id="Email" name="Email" label="Email"  type="Email "  variant="outlined" color="secondary" value={fields["clientEmail"] || ""}  onChange={(e)=>handleChange('clientEmail', e.target.value)}/>
         <br/>
          <span className="error">{errors["clientEmail"]}</span>
        <br/>
         <TextField autoFocus  margin="dense" id="dateTime" name="dateTime"  label="dateTime" type="datetime-local"  variant="outlined" color="secondary" value={fields["dateTime"] || ""} focused  onChange={(e)=>handleChange('dateTime', e.target.value)}/> 
         
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider> */}
  

        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
          <Button color="secondary"  onClick={saveNewAppointment} >save</Button>
        </DialogActions>
      </Dialog>
     
    </React.Fragment>
</>)
}))
export default AddAppointment
import * as React from 'react';
import { observer } from "mobx-react-lite";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import ServicesStore from '../../Store/serviseStore';

const AddService=(observer(()=>{

  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

// const [name,setName]=useState('');
// const [price,setPrice]=useState('');
// const [duration,setDuration]= useState('');
// const [description,setDescription]= useState('');

const [fields, setFields] = useState({});
const [errors, setErrors] = useState({});
//const temp=false;
const handleValidation = () => {
  const formFields = {...fields};
  const formErrors = {};
   let formIsValid = true;
  //  temp=true;

  //Name
  if(!formFields["name"]){
    formIsValid = false;
    // temp=false;
    formErrors["name"] = "Cannot be empty";
  }

  if(typeof formFields["name"] !== "undefined"){
    if(!formFields["name"].match(/^[a-zA-Z]+$/)){
      formIsValid = false;
      // temp=false;
      formErrors["name"] = "Only letters";
    }       
  }

  //Price
  if(!formFields["price"]){
    formIsValid = false;
    // temp=false;
    formErrors["price"] = "cannot be empty";
  }

  if(typeof formFields["price"] !== "undefined"){
    if(!formFields["price"].match(/^[0-9]+$/)){
      formIsValid = false;
      // temp=false;
      formErrors["price"] = "enter only numbers";
    }
  }     

    //Description
    if(!formFields["description"]){
      formIsValid = false;
      // temp=false;
      formErrors["description"] = "Cannot be empty";
    }
  
    if(typeof formFields["description"] !== "undefined"){
      if(!formFields["description"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        // temp=false;
        formErrors["description"] = "Only letters";
      }       
    }

//  //Durartion
//  if(!formFields["duration"]){
//   formIsValid = false;
//   formErrors["duration"] = "cannot be empty";
// }

// if(typeof formFields["duration"] !== "undefined"){
//   if(!formFields["duration"].match(/^[a-zA-Z]+$/)){
//     formIsValid = false;
//     formErrors["duration"] = "Only letters";
//   }       
// }


     //Description
     if(!formFields["description"]){
      formIsValid = false;
      // temp=false;
      formErrors["description"] = "Cannot be empty";
    }
  
    if(typeof formFields["description"] !== "undefined"){
      if(!formFields["description"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        // temp=false;
        formErrors["description"] = "only letters";
      }       
    }

  setErrors(formErrors)
  return formIsValid;
}

const handleChange = (field, value) => {
  setFields({
    ...fields,
    [field]: value
  })
}

const contactSubmit = (e) => {
  e.preventDefault();
  if(handleValidation()){
    alert("Form submitted");
  }else{
    alert("Form has errors.")
  }
}

const saveNewService=(e)=>{
  contactSubmit(e);
  console.log("saveNewService");
  ServicesStore.addService({...fields})//,formFields["price"],formFields["duration"],formFields["description"]});
  handleClose();
}


return(<>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      add service
      </Button>
      {console.log("click-dialog:"+open)}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',   
        }}
      >
        <DialogTitle>Add New Service</DialogTitle>
        <DialogContent >
    
          <TextField   margin="dense" id="name" name="name" label="Service name"  type="text"  variant="outlined" value={fields["name"]} onChange={(e)=>handleChange('name',e.target.value)}/>
         <br/>
            <span className="error">{errors["name"]}</span>
         <br/>
          <TextField autoFocus  margin="dense" id="price" name="price" label="Price"  type="text"  variant="outlined" value={fields["price"]} onChange={(e)=>handleChange('price', e.target.value)} />
          <br/>
          <span className="error">{errors["price"]}</span>
          <br/>
          {/* <TextField autoFocus  margin="dense" id="duration" name="duration" label="Duration"  type="time"  variant="outlined" value={fields["duration"]}  onChange={(e)=>handleChange('duration', e.target.value)} /> */}
          <br/>
          {/*  {formIsValid &&  <span className="error">{errors["duration"]}</span>}  */}
          <br/>
          <TextField autoFocus  margin="dense" id="description" name="description" label="Description"  type="text "  variant="outlined" value={fields["description"]} onChange={(e)=>handleChange('description', e.target.value)} />
          <br/>
           <span className="error">{errors["description"]}</span>             
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveNewService} >save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
</>)
}))
export default AddService
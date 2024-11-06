import { observer } from "mobx-react-lite";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import mainStore from "../../Store/mainStore";


const EditBussinesData=(observer(()=>{

  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

const [names,setName]=useState(mainStore.tempBusinessData.name);
const [address,setAddress]=useState(mainStore.tempBusinessData.address);
const [phone,setPhone]= useState(mainStore.tempBusinessData.phone);
const [owner,setOwner]= useState(mainStore.tempBusinessData.owner);
const [logo,setLogo]= useState(mainStore.tempBusinessData.logo);
const [description,setDescription]= useState(mainStore.tempBusinessData.description);


const  saveBusinessData=()=>{
{  console.log("names:",names)}
//  {console.log("saveBusinessData")}
  mainStore.saveDetails({names,address,phone,owner,logo,description});
  {  console.log("names:",names)}

  // MainStore.getBusinessData();
  handleClose();
}


    return(<>
     {/* <h1>Edit me</h1> */}
     <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} >
       edit me
      </Button>
      {console.log("click-dialog:"+open)}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Business Data</DialogTitle>

        <DialogContent >
          <TextField autoFocus  margin="dense" id="name" name="name" label="Bussines name"  type="text"  variant="outlined"  defaultValue={names}  onChange={(e)=> setName(e.target.value)}/>
          <br/>
          <TextField autoFocus  margin="dense" id="address" name="price" label="Bussines address"  type="text" variant="outlined"  defaultValue={address}  onChange={(e)=>setAddress(e.target.value)} />
          <br/>
          <TextField autoFocus  margin="dense" id="phone" name="Bussines phone" label="Bussines phone"  type="text "   variant="outlined" defaultValue={phone}  onChange={(e)=>setPhone(e.target.value)} />               
          <br/>
          <TextField autoFocus  margin="dense" id="owner" name="Bussines owner" label="Bussines owner"  type="text "   variant="outlined" defaultValue={owner}  onChange={(e)=>setOwner(e.target.value)} />               
          <br/>
          <TextField autoFocus  margin="dense" id="logo" name="Bussines logo" label="Bussines logo"  type="text "   variant="outlined" defaultValue={logo}  onChange={(e)=>setLogo(e.target.value)} />               
          <br/>
          <TextField autoFocus  margin="dense" id="description" name="Bussines description" label="Bussines description"  type="text "   variant="outlined"  defaultValue={description}  onChange={(e)=>setDescription(e.target.value)} />               
          
        </DialogContent>

        <DialogActions>
          {console.log(names)}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveBusinessData} >save</Button>
        </DialogActions>
        
      </Dialog>
    </React.Fragment>

    

    
    </>)
}));
export default EditBussinesData



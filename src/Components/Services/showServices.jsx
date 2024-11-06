import ServicesStore from "../../Store/serviseStore"
import { observer } from "mobx-react-lite";

import * as React from 'react';
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useState} from 'react';
import AddService  from "./addService";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import serviseStore from "../../Store/serviseStore";
// import ShowBusinessData from "../BusinessData/showBusinessData";
// import AdminPage from "../Admin/AdminPage";


const ShowServices = (observer(() => {

const [isAddService,setIsAddService]=useState(false);

const [showServiceAdd,setShowServiceAdd]=useState(true);


function handleClickAdd(){
  setShowServiceAdd(false);
  setIsAddService(true);
}


function ifShowButton(){
   if(serviseStore.isClickServices){
    return(<>  {showServiceAdd && <Button variant="outlined" href="" onClick={handleClickAdd}>  add service </Button> }
                 {/* {console.log("isAddService:"+isAddService)} */}
</>)
   }
}



    return (<div className="servicesCard">
      

       {/* {console.log("נכנס להצגת שירותים")}  */}
   {/* {ServicesStore.servicesArr.map(s =>
    { <Box key={s.id}
       sx={{  display: 'flex', flexWrap: 'wrap', '& > :not(style)': {  m: 1,   width: 300,  height: 300, }, }}  >
       <Paper elevation={3}><div>name: {s.name},
       price: {s.price},
       duration: {s.duraitoin}
       </div> </Paper> 
    </Box> })}*/}
  { ServicesStore.servicesArr.map(s=>
  <div style={{float:"left"}}>
    <Card sx={{ maxWidth: 345 ,margin:1.5, border:1, width:250, height:250 ,borderColor:'secondary'}} key={s.id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {s.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>name:{s.name}
          <br/>
          duration:{s.duratoin} 
          <br/>
          price:{s.price}
          <br/>
          description:{s.description}
          </div>

        </Typography>
      </CardContent>
    </Card>
    </div>
  )}
    {ifShowButton()}
    {isAddService && <AddService></AddService>}
      
    </div>)
}))
export default ShowServices
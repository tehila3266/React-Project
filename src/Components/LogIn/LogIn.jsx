
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState} from 'react';
import MainStore from '../../Store/mainStore';
import {observer} from "mobx-react-lite";

import Alert from '@mui/material/Alert';
//import AdminPage from '../Admin/AdminPage';
import { useNavigate } from 'react-router-dom';

 const LogIn=(observer(()=>{


const [name,setName] = useState('');
const [password,setPassword] = useState('');
const nav = useNavigate();

const handleLogIn =()=>{
     MainStore.checkLogin({name,password});
     setName(' ');
     setPassword(' ');//לבדוק למה לא מוחק את האותיות
}

    return(<>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic1" label="User name" variant="outlined"  onChange={(e)=>{setName(e.target.value)}}/>
      <TextField id="outlined-basic2" label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
      <Button onClick={handleLogIn} > Log In</Button>
    </Box>
    {!MainStore.degel && <Alert severity="error">The user name and the password are worng, please try again!</Alert>}
    {MainStore.isLogin && nav('/admin')}
     
    </>)
}))
export default  LogIn





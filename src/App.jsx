
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminPage from './Components/Admin/AdminPage';
import User from './Components/User/userPage';
import ServicesStore from './Store/serviseStore';
//import MainStore from './Store/mainStore;'
import { useEffect } from 'react'
//import LogIn from './Components/LogIn/LogIn';
import ShowServices from './Components/Services/showServices';
import ShowAppointments from './Components/Appointment/appointment';
import MainStore from './Store/mainStore';


function App() {

  // <select value={myCar} onChange={handleChange}>
  //       <option value="Ford">Ford</option>
  //       <option value="Volvo">Volvo</option>
  //       <option value="Fiat">Fiat</option>
  //     </select>

  
  useEffect(()=>{
    console.log("use effect")
    ServicesStore.initData();
    MainStore.initBusinessData();
   },[]);
   
  return (<>
  <CssBaseline /> 
    <BrowserRouter>
      <Routes >
        <Route  path="/" element={<User/>} />
      {/* <Route  path="/login" element={<LogIn/>} /> */}
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/admin/services' element={<><AdminPage/><ShowServices/></>} />
        <Route path='/admin/appointments' element={<><AdminPage/><ShowAppointments ></ShowAppointments></>} />
        {/* <Route path="/weather" element={<Weather />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/users/:userId/orders/:orderId" element={<UserOrders />} />
        <Route path="/weather2" element={<WeatherInfo/>} /> */}
      </Routes> 
       
    </BrowserRouter> 




   {/* <LogIn/> */}
</> )
}

export default App



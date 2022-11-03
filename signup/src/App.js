import './App.css'
import Homepage from "./components/homepage/homepage.js"
import AdminHomepage from "./components/home_admin/home_admin.js"
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import Dashboard from "./components/dashboard/dashboard.js"
import AdminDashboard from "./components/admin_dash/admin_dash.js"
import CheckThreshold from "./components/checkthreshold/checkthreshold.js"
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { useState } from 'react'

function App() {

  const [ user, setLoginUser] = useState({})
  
  return (
    <div className="App">
      
      <Routes>
        
          <Route path="/"
            element={
              user && user._id ? (<Homepage setLoginUser={setLoginUser} />): (<Navigate replace to={"/login"} />)
            }
          />
          <Route path="/adminhome"
            element={
              user && user._id ? (<AdminHomepage setLoginUser={setLoginUser} />): (<Navigate replace to={"/login"} />)
            }
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
            
          <Route path="/dashboard"  element={
              user && user._id ? (<Dashboard setLoginUser={setLoginUser} />): (<Navigate replace to={"/login"} />)
            }/>
          <Route path="/AdminDashboard" element={
              user && user._id ? (<AdminDashboard setLoginUser={setLoginUser} />): (<Navigate replace to={"/login"} />)
            }/>
          <Route path="/register" element={<Register />}/>
          <Route path="/checkthreshold" element={
              user && user._id ? (<CheckThreshold setLoginUser={setLoginUser} />): (<Navigate replace to={"/login"} />)
            }/>
           
        
      </Routes>
    </div>
  );
}

export default App;
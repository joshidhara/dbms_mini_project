import './App.css'
import Homepage from "./components/homepage/homepage.js"
import AdminHomepage from "./components/home_admin/home_admin.js"
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import Dashboard from "./components/dashboard/dashboard.js"
import AdminDashboard from "./components/admin_dash/admin_dash.js"
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
            
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/register" element={<Register />}/>
            
           
        
      </Routes>
    </div>
  );
}

export default App;
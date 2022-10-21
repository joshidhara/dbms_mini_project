import './App.css'
import Homepage from "./components/homepage/homepage.js"
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import Dashboard from "./components/dashboard/dashboard.js"
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
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
            
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/register" element={<Register />}/>
            
           
        
      </Routes>
    </div>
  );
}

export default App;
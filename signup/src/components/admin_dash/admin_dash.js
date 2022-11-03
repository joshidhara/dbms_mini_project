import React, {useState} from "react"
import "./admin_dash.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

const AdminDashboard = ({setLoginUser}) => {
    const location=useLocation()
    console.log(location.state)

    
    return (
        <div className="AdminDashboard">
            <h1>Welcome to dashboard</h1>
            <h2>Your query </h2>
            <table border = "1">
        <tr>
            <th>orderNo</th>
            <th>orderDate</th>
            <th>arrivalTime</th>
            <th>cost</th>
            <th>username</th>
         </tr>
         <tr>
            <td>{location.state.order1.orderNo}</td>
            <td>{location.state.order1.orderDate}</td>
            <td>{location.state.order1.arrivalTime}</td>
            <td>{location.state.order1.cost}</td>
            <td>{location.state.order1.username}</td>
         </tr>
         
         
      </table>
        


            
        </div>
    )
}

export default AdminDashboard
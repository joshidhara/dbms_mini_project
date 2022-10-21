import React, {useState} from "react"
import "./dashboard.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Dashboard = () => {
    const location=useLocation()
    console.log(location.state)

    
    return (
        <div className="dashboard">
            <h1>Welcome to dashboard</h1>
            <h2>Your query </h2>
            <table border = "1">
        <tr>
            <th>Componentname</th>
            <th>Category</th>
            <th>Diameter</th>
            <th>Thickness</th>
            <th>Quantity</th>
            <th>Power</th>
            <th>Length</th>
         </tr>
         <tr>
            <td>{location.state.component1.componentname}</td>
            <td>{location.state.component1.category}</td>
            <td>{location.state.component1.diameter}</td>
            <td>{location.state.component1.thickness}</td>
            <td>{location.state.component1.quantity}</td>
            <td>{location.state.component1.power}</td>
            <td>{location.state.component1.length}</td>
         </tr>
         
         
      </table>
        


            
        </div>
    )
}

export default Dashboard
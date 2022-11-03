import React, {useState} from "react"
import "./dashboard.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Dashboard = ({setLoginUser}) => {

    const location=useLocation()
    console.log(location.state.component1)
    const [users, setUsers] = useState(location.state.component1)
    const renderUsers = () => {
        return users.map(({_id, componentname,category,diameter, thickness, quantity, power,length,__v}) => {
          return <tr key={componentname} >
          <td >{_id}</td>
          <td >{componentname}</td>
          <td >{category}</td>
          <td >{diameter}</td>
          <td >{thickness}</td>
          <td >{quantity}</td>
          <td >{power}</td>
          <td >{length}</td>
          <td >{__v}</td>
        </tr>
        })
      }
    const renderHeader = () => {
        return <tr>
          {console.log(Object.keys(location.state.component1[0]).filter((key)=> key==='componentname'))}
          {Object.keys(location.state.component1[0]).map(key => <th>{key}</th>)}
          
        </tr>
      }
    if((location.state.component1 instanceof Array))
    {return (
      
        <div className="dashboard">
            <h1>Welcome to dashboard</h1>
            <h2>Your query </h2>
            <table>
              <thead>
                {renderHeader()}
              </thead>
        
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
      

      
            
        </div>
    )}
    else
    {return(
      <div className="dashboard">
         <h1>Welcome to dashboard</h1>
          <h2>Your query </h2>
          <table>
            <tr>
            <th>id</th>
            <th>Componentname</th>
            <th>category</th>
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
}

export default Dashboard
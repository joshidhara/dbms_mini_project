import React, {useState} from "react"
import "./home_admin.css"  //yet to create 
import axios from "axios"  
import { useNavigate } from "react-router-dom"

const AdminHomepage = ({setLoginUser}) => {
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        operation:"",
        orderNo:"",
        orderDate:"",
        arrivalTime:"",
        cost:"",
        username:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const orderquery = () => {
        axios.post("http://localhost:4000/orderquery", user)
        .then(res => {
            
            const order1=res.data
            console.log("came back to order post")
            console.log(res.data)
            //console.log(res.data)
            if(user.operation==='search')
           {
            alert("press ok to go to dashboard")
            navigate("/AdminDashboard",{
                state:{order1}

            })
           }
           else
           {
            alert(res.data.message)
            navigate("/adminhome") //to same page ie the route you defined
           }
        })
    }
    return (
        <div className="homepage">
            <h2>Hello Welcome to Homepage</h2>
            <input type="text" name="operation" value={user.operation} onChange={handleChange} placeholder="Do you wan to (search/add/remove)"></input>
            <input type="text" name="orderNo" value={user.orderNo} onChange={handleChange} placeholder="Enter orderNo "></input>
            <input type="text" name="orderDate" value={user.orderDate} onChange={handleChange} placeholder="Enter orderDate of component"></input>
            <input type="text" name="arrivalTime" value={user.arrivalTime} onChange={handleChange}  placeholder="Enter arrivalTime" ></input>
            <input type="text" name="cost" value={user.cost} onChange={handleChange}  placeholder="Enter cost" ></input>
            <input type="text" name="username" value={user.username} onChange={handleChange}  placeholder="Enter username" ></input>
            
            <div className="button" onClick={orderquery}>Run query</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default AdminHomepage
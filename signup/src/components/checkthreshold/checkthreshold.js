import React, {useState} from "react"
import "./checkthreshold.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CheckThreshold = ({setLoginUser}) => {
    const navigate = useNavigate();
    
    const [ user, setUser] = useState({
        threshold:0,
        categ:""
    })
    
    
     
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const check = () => {
        axios.post("http://localhost:4000/checkthresh", user)
        .then(res => {
            
            const component1=res.data
            //console.log(res.data)
            if(user.operation==='search')
           
            alert("press ok to go to dashboard")
            navigate("/dashboard",{
                state:{component1}

            })
           
         
        })
    }
    return (
        <div className="checkthreshold">
            <h2>Welcome to database checking System</h2>
            <input type="number" name="threshold" value={user.threshold} onChange={handleChange} placeholder="Enter threshold value"></input>
            <input type="text" name="categ" value={user.categ} onChange={handleChange} placeholder="Enter category"></input>
            <div className="button" onClick={check}>Run query</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default CheckThreshold
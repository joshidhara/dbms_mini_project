import React, {useState} from "react"
import "./homepage.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Homepage = ({setLoginUser}) => {
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        operation:"",
        componentname:"",
        category:"",
        diameter:"",
        thickness:"",
        quantity:"",
        power:"",
        length:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const query = () => {
        axios.post("http://localhost:4000/query", user)
        .then(res => {
            
            const component1=res.data
            //console.log(res.data)
            if(user.operation==='search')
           {
            alert("press ok to go to dashboard")
            navigate("/dashboard",{
                state:{component1}

            })
           }
           else
           {
            alert(res.data.message)
            navigate("/")
           }
        })
    }
    return (
        <div className="homepage">
            <h2>Hello Welcome to Homepage</h2>
            <input type="text" name="operation" value={user.operation} onChange={handleChange} placeholder="Do you wan to (search/add/remove)"></input>
            <input type="text" name="componentname" value={user.componentname} onChange={handleChange} placeholder="Enter component name"></input>
            <input type="text" name="category" value={user.category} onChange={handleChange} placeholder="Category of component"></input>
            <input type="text" name="diameter" value={user.diameter} onChange={handleChange}  placeholder="Enter diameter (optional)" ></input>
            <input type="text" name="thickness" value={user.thickness} onChange={handleChange}  placeholder="Enter thickness (optional)" ></input>
            <input type="text" name="quantity" value={user.quantity} onChange={handleChange}  placeholder="Enter quantity (optional)" ></input>
            <input type="text" name="power" value={user.power} onChange={handleChange}  placeholder="Enter power (optional)" ></input>
            <input type="text" name="length" value={user.length} onChange={handleChange}  placeholder="Enter length (optional)" ></input>
            
            <div className="button" onClick={query}>Run query</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
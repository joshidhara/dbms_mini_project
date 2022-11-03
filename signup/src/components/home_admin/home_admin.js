import React, {useState} from "react"
import "./home_admin.css"  //yet to create 
import axios from "axios"  
import { useNavigate } from "react-router-dom"

import styled from "styled-components"
const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  width:6em;
  height:1em;
  margin-bottom: 0.8em;
  padding: 1em 1em 1em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #2e2f2f;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #2e2f2f;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;
const options = ["search", "add", "delete"];
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
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    
    const onOptionClicked = value => () => {
        user.operation=value;
        setIsOpen(false);
      };
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
            <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {user.operation || "Operation🔽"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
            <input type="text" name="orderNo" value={user.orderNo} onChange={handleChange} placeholder="Enter orderNo "></input>
            <input type="text" name="cost" value={user.cost} onChange={handleChange}  placeholder="Enter cost" ></input>
            <input type="text" name="username" value={user.username} onChange={handleChange}  placeholder="Enter username" ></input><br/> 
            <label for="explicit-label-name">
             order date : 
            <input type="date" name="orderDate" value={user.orderDate} onChange={handleChange} ></input>
            </label>
            <br/><label for="explicit-label-name">
            Expected arrival date : 
            <input type="date" name="arrivalTime" value={user.arrivalTime} onChange={handleChange}   ></input>
            </label>
            
            <div className="button" onClick={orderquery}>Run query</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default AdminHomepage
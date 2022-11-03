import React, {useState} from "react"
import "./homepage.css"
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
const options = ["search", "add", "delete","check threshold"];
const Homepage = ({setLoginUser}) => {
    const navigate = useNavigate();
    
    const [ user, setUser] = useState({
        operation:"",
        componentname:"",
        category:"",
        diameter:"",
        thickness:"",
        quantity:0,
        power:"",
        length:""
    })
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    
    const onOptionClicked = value => () => {
        user.operation=value;
        setIsOpen(false);
        if(user.operation==="check threshold")
        {
            navigate("/checkthreshold")
        }
        
      };
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
            {/* <input type="text" name="operation" value={user.operation} onChange={handleChange} placeholder="Do you wan to (search/add/remove)"></input> */}
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
            <input type="text" name="componentname" value={user.componentname} onChange={handleChange} placeholder="Enter component name"></input>
            <input type="text" name="category" value={user.category} onChange={handleChange} placeholder="Category of component"></input>
            <input type="text" name="diameter" value={user.diameter} onChange={handleChange}  placeholder="Enter diameter (optional)" ></input>
            <input type="text" name="thickness" value={user.thickness} onChange={handleChange}  placeholder="Enter thickness (optional)" ></input>
            <input type="number" name="quantity" value={user.quantity} onChange={handleChange}  placeholder="Enter quantity (optional)" ></input>
            <input type="text" name="power" value={user.power} onChange={handleChange}  placeholder="Enter power (optional)" ></input>
            <input type="text" name="length" value={user.length} onChange={handleChange}  placeholder="Enter length (optional)" ></input>
            
            <div className="button" onClick={query}>Run query</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
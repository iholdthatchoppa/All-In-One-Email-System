import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

  
    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setListOfUsers(response.data);
      });
    }, []);
    
    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: loginUsername, 
        password: loginPassword
      })
        .then((response) => {
          console.log(response.data);
          console.log('success')
        })
        .catch((error) => {
          console.error("Error logging in: ", error);
        });
    };

  //post function
    const createUser = () => {
      Axios.post("http://localhost:3001/createUser", {
        name,
        username,
        email,
        password
      }).then((response) => {
        setListOfUsers([
          ...listOfUsers,
          {
            name,
            username,
            email,
            password
          },
        ]);
       }).catch((error) => {      //catches error
        console.error("Error in creAting user: ", error);
       });
     };

     return (
        <div className="container">  
          <div className="userDisplay">
            {listOfUsers.map((user) => {
            })}
          </div>
          <div>
          <form id="user-form">
          <h2>Please enter the following fields</h2>
            <input 
              type="text"
              //id="Name" Don't know the significance
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input 
              type="text"
             // id="Username"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="email"
              //id="Email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
            type="password"
            //id="Password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            />
          
          <button onClick={createUser} type="submit">Create Account</button>

          
         <div className = "container">
          <h2>Login</h2>
          <input
          type="text"
          placeholder="Username"
          onChange={(event) => setLoginUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button onClick={login} type="submit"> Login </button>
       
           </div>  
            </form>
          </div>
        </div>
    
    
       );
    }
    export default App;
    
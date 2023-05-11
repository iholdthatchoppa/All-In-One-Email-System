import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

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
     }).catch((error) => {
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
        <input 
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        />
        
        <button onClick={createUser}> CreateUser </button>
      </div>
    </div>


   );
}
export default App;

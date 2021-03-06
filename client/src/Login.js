import React, { useState , useEffect} from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const FORM= styled('form')`
  background-color: #1F2833;
  border-top: 1px solid #13cbd2;
  border-right: 2px solid #13cbd2;
  border-bottom: 2px solid #13cbd2;
  border-left: 1px solid #13cbd2;
  border-radius:8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
`
const Btn = styled("Button")`
color:#13cbd2;
border: 1px solid black;
background-color: #0b0c10;
cursor: pointer;`
function Login({ setUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
   
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user);})
  //     }
  //   });
  // }, []);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user.username);
          console.log(user.id);
          setUser(user)
          history.push(`/`)
        });
      }
    });
   
  }
  

  return (
    <>
      <div className="signup">
        <h1>Login</h1>
        <FORM onSubmit={handleSubmit}>
          
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Btn type="submit">Login</Btn>
        </FORM>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const FORM= styled('form')`
  background-color: #404040;
  border: 1px solid #13cbd2;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
`
function Login({ setUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
          setUser(user)
          history.push('/')
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
          <button type="submit">Login</button>
        </FORM>
      </div>
    </>
  );
}

export default Login;

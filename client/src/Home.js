import React, { useState } from "react";
import styled from "styled-components";

function Home({ user, setUser}) {
  
    if (user){
      fetch("/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        
      }).then((r) => {
        if (r) {
          r.json().then((user)=>user);
        }
      });
      
        return (
          <div>
            <h1>Welcome, {user.username} !</h1>
            
          </div>
          );
        }
      
    else{
      return <h1>Please Login or Sign Up</h1>;
    }
  

    
  }
  
  export default Home;
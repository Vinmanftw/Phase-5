import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function CurRoutine({ user, setUser,routineId, routine, setRoutine }) {
  
    // fetch specific Routine home screen 
    // get request must be serialized with everything needed for the screen
    // Welcome back <Username>          (Create account) (Log in) 
    // (Monday- Chest day)
    // (Tuesday)
    // (wednesday)
    // (thursday)
    // (friday)
    // 
    console.log(routine);
    if(routine){
      return (
        <div>
          <h1>{routine.title}</h1>
        </div>
      );
    }
    else
    {
      <div>
        <h1>No Routine Found</h1>
      </div>
    }
      
    
      
       
        
}
      
    
    

    
    

  
export default CurRoutine;

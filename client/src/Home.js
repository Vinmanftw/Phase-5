import React, { useState } from "react";
import styled from "styled-components";

import {useHistory, Link} from "react-router-dom"
function Home({ user, setUser,routineId, setRoutineId, handleRoutine, routine, setRoutine }) {
  let history = useHistory();
  function handleRoutine(e) {
    //debugger;
    const routineId = e.target.value;
    setRoutineId(routineId)
    console.log(e.target.value)
    console.log(routineId)
    fetch(`/Routine/${e.target.value}`).then((r) => {
      if (r.ok) {
        r.json().then((routine)=>{
          setRoutine(routine);
          history.push(`/week`)
        });
      }
    });
  }
  
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
      
        
      
      // for each routine that belongs to user create a button 
      // that will set the routine equal to the value of the button 
      // just clicked then send user to current User
      function mapRoutines(){
        if (user.routines){
          return user.routines.map((routine) => (
          <button 
           value={routine.id}
           key={routine.id}
           onClick={handleRoutine} 
           >
             {routine.title}
           </button>))
        }
      }
      return (
        <div>
          <h1>Welcome, {user.username} !</h1>
          <h1>Select a routine</h1>
          <div>
            {mapRoutines()}
          </div>
        </div>
      );
    } 
    else{
      return <h1>Please Login or Sign Up</h1>;
    }
  

    
}
  
export default Home;
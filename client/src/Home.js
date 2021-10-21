import React, { useState,useEffect, useRouteMatch,useParams } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom";
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`

function Home({ user, setUser,routineId, setRoutineId, routine, setRoutine }) {
  
  let history = useHistory();
  
  
  function handleRoutine(e) {
    //debugger;
    const routineId = e.target.value;
    setRoutineId(routineId)
    console.log(e.target.value)
    console.log(routineId)
    fetch(`/Routine/${e.target.value}`,{credentials:'include'}).then((r) => {
      if (r.ok) {
        r.json().then((routine)=>{
          setRoutine(routine);
          history.push(`/week/${routineId}/`)
        });
      }
    });
  }
  
    if (user){
      
      
        
      
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
        <HomeDiv>
          <h1>Welcome, {user.username} !</h1>
          <h1>Select a routine</h1>
          <div>
            {mapRoutines()}
          </div>
        </HomeDiv>
      );
    } 
    else{
      return (
        <HomeDiv>
          <h1>Please Login or Sign Up</h1>
        </HomeDiv>
      
      );
    }
  

    
}
  
export default Home;
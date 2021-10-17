import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
const Week = styled("div")`
display: flex;
flex-flow: column;
width: 30%;
justify-content: center;`
function CurRoutine({ user, setUser,routineId, routine, setRoutine, dayId,setDayId, day ,setDay }) {
  
    // fetch specific Routine home screen 
    // get request must be serialized with everything needed for the screen
    // Welcome back <Username>          (Create account) (Log in) 
    // (Monday- Chest day)
    // (Tuesday)
    // (wednesday)
    // (thursday)
    // (friday)
    // 
    let history = useHistory();
    function handleDay(e) {
      
      const dayId = e.target.value;
      setDayId(dayId)
      console.log(e.target.value)
      console.log(dayId)
      fetch(`/Workout/${e.target.value}`).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day);
            history.push(`/workout`)
          });
        }
      });
    }
    function mapDays(){

      if (routine.days){
        return routine.days.map((day) => (
        <button 
         value={day.id}
         key={day.id}
         onClick={handleDay} 
         >
           {`${day.dotw} - ${day.title}`}
         </button>))
      }
    }
    console.log(routine);
    if(routine){
      return (
        <div>
          <h1>{routine.title}</h1>
          <Week>
            {mapDays()}
          </Week>
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

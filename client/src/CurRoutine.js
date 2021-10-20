import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`
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
    console.log(user)
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
            console.log(day);
            history.push(`/week/${routine.id}/workout/${day.id}`)
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
    if (user){
      
      if(routine){
        return (
          <HomeDiv>
            <h1>{routine.title}</h1>
            <Week>
              {mapDays()}
            </Week>
          </HomeDiv>
        );
      }
      else
      {
        return(
          <HomeDiv>
             <h1>No Routine Found</h1>
          </HomeDiv>
        )
        
      }
    }
    else
    {
      return(
        <HomeDiv>
          <h1>No user Found</h1>
        </HomeDiv>
      )
      
    }
      
    
      
       
        
}
      
    
    

    
    

  
export default CurRoutine;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import WorkoutCard from "./WorkoutCard"
const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
`







function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay }) {
  
  
  function mapWorkouts(){
    if (day.workouts){
      return day.workouts.map((workout) => (
      <WorkoutCard workout={workout} key={workout.id}/>
      ))
    }
  }
    
    console.log(day);
    if(routine){
      return (
        <div>
          <h1>{day.title}</h1>
          <CardContainer>
            {mapWorkouts()}
          </CardContainer>
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
      
    
    

    
    

  
export default CurDay;

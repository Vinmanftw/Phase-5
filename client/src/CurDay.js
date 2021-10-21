import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import WorkoutCard from "./WorkoutCard"
import WorkoutList from "./WorkoutList"
const View = styled("div")`
display: flex;
flex-flow: row;
justify-content: center;
`
const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
max-width: 900px;
`
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`






function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay,dayId, setDayId}) {
  
  
  
  

    function mapWorkouts(){
      if (day.workouts){
        return day.workouts.map((workout) => (
        <WorkoutCard workout={workout} dayId={dayId} key={workout.id}/>
        ))
      }
    }
    
    
    if(user){
      if(routine){
        return (
        <View>
          <div>
            <h1>{day.title}</h1>
            <CardContainer>
              {mapWorkouts()}
            </CardContainer>
          </div>
          <WorkoutList dayId={dayId}/>
        </View>
        );
      }
      else{
        return(
          <HomeDiv>
            <h1>No Routine Found</h1>
          </HomeDiv>
      )
      }
    }
    else
    {
      return (
        <HomeDiv>
          <h1>No Routine Found</h1>
        </HomeDiv>
      )     
    }    
}
      
    
    

    
    

  
export default CurDay;

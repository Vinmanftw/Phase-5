import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import WorkoutCard from "./WorkoutCard"
import WorkoutList from "./WorkoutList"
const View = styled("div")`
display: flex;
flex-flow: row;
justify-content: center;
gap:30px;
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



const UsersWorkouts = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
max-width: 900px;
`
const SelectCardContainer = styled('div')`
display: flex;
flex-flow: column;
justify-content: center;
max-width: 900px;`
const Nav = styled("div")`
display: flex;
flex-flow: row;
justify-content: flex-start;
`
const WorkoutsToChoose = styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
width:400px;
max-width: 900px;
`





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
          <UsersWorkouts>
            <Nav>
              <h1>{day.title}</h1>
            </Nav>
            <CardContainer>
              {mapWorkouts()}
            </CardContainer>
              
            
          </UsersWorkouts>
          <WorkoutsToChoose>
            
            
            
            <SelectCardContainer>
              <WorkoutList dayId={dayId}/>
            </SelectCardContainer>
            
          </WorkoutsToChoose>
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

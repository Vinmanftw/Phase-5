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
justify-content: flex-start;
max-width: 900px;
`
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`



const UsersWorkouts = styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
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
  
  const [loadCards, setLoadCards] = useState(null);
  const [workoutArrayLength, setWorkoutArrayLength] = useState(day.workouts.length)
  const [curDay, setCurDay] = useState(day);
  const [workoutIdToDelete, setWorkoutIdToDelete] = useState(null);
    useEffect(()=>{
      if(workoutArrayLength !== curDay.workouts.length) {
        fetch(`/GetDayData/${day.id}`,{credentials:'include'}).then((r) => {
          if (r.ok) {
            r.json().then((day)=>{
              setCurDay(day);
              // console.log(day);
              console.log(day.workouts.length);
              setWorkoutArrayLength(day.workouts.length);
              
            });
          }
        });
      }
      if(workoutIdToDelete !== null) {
        fetch(`/DeleteCardData/${workoutIdToDelete}`, {
          method: 'DELETE' 
        })
        fetch(`/GetDayData/${day.id}`,{credentials:'include'}).then((r) => {
          if (r.ok) {
            r.json().then((day)=>{
              setCurDay(day)
              // console.log(day);
              console.log(day.workouts.length);
              setWorkoutArrayLength(day.workouts.length);
            });
          }
        });
             
      
       setWorkoutIdToDelete(null);
      }
    },[setWorkoutArrayLength])

    
    if (curDay){
      function mapWorkouts(){
        if (curDay.workouts){
          return curDay.workouts.map((workout) => (
            <WorkoutCard workoutIdToDelete={workoutIdToDelete} setWorkoutIdToDelete={setWorkoutIdToDelete} setCurDay={setCurDay} day={day} workout={workout} workoutArrayLength={workoutArrayLength} setWorkoutArrayLength={setWorkoutArrayLength} dayId={dayId} loadCards={loadCards} setLoadCards={setLoadCards} key={workout.id}/>
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
                <WorkoutList dayId={dayId} day={day} curDay={curDay} setCurDay={setCurDay} workoutArrayLength={workoutArrayLength}setWorkoutArrayLength={setWorkoutArrayLength} setLoadCards={setLoadCards}/>
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
    
    
    
    
}
      
    
    

    
    

  
export default CurDay;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;`

const Card = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
border: 1px black solid;`
const TopRow = styled("div")`
display: flex;
flex-flow: column;
width:100%;
`
const SetsRow = styled("div")`
display: flex;
flex-flow: row;
border: 1px red solid;
`

const SetReps = styled("div")`
display: flex;
flex-flow: column;

`
const Set = styled("div")`
display: flex;
flex-flow: column;
`
const Prior = styled("h1")`

`
const Now = styled("input")`
display: flex;`
const Reps = styled("input")`
display: flex;`

// function mapSets(){
//   return workout.workout_sets.map((set) => (
//    <SetReps>
//      <Set>
//       <Prior>0.0lbs</Prior>
//        <Now 
//           type="integer"
//           id="weight"
//           autoComplete="off"
//           value={""}
//           // onChange={(e) => setNow(e.target.value)}
//         />
//       </Set>
//       {/* gap */}
//       <Reps
//         type="integer"
//         id="weight"
//         autoComplete="off"
//         value={""}
//         // onChange={(e) => setNow(e.target.value)}
//       />
//     </SetReps>
//   ))
// }

function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay }) {
  
  function mapWorkouts(){
    if (day.workouts){
      return day.workouts.map((workout) => (
      <Card key={workout.id}>
        <TopRow>
         <h1>{workout.name}</h1>
        </TopRow>
        <SetsRow>
          {"Add more sets"}
        </SetsRow>
      </Card>))
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

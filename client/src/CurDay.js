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







function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay }) {
  
  const [active,setActive] = useState(false)
  const [name,setName] = useState(null)
  const [primary,setPrimary] = useState(null)
  const [secondary, setSecondary] = useState(null)
  const [secondary2, setSecondary2] = useState(null)
  const [secondary3, setSecondary3] = useState(null)
  const [secondary4, setSecondary4] = useState(null)

    function mapWorkouts(){
      if (day.workouts){
        return day.workouts.map((workout) => (
        <WorkoutCard workout={workout} active={active}  setName={setName} setPrimary={setPrimary} setSecondary={setSecondary} setSecondary2={setSecondary2} setSecondary3={setSecondary3} setSecondary4={setSecondary4}  name={name} primary={primary} secondary={secondary} secondary2={secondary2} secondary3={secondary3} secondary4={secondary4}setActive={setActive} key={workout.id}/>
        ))
      }
    }
    
    console.log(day);
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
          <WorkoutList active={active} setName={setName} setPrimary={setPrimary} setSecondary={setSecondary} setSecondary2={setSecondary2} setSecondary3={setSecondary3} setSecondary4={setSecondary4}setActive={setActive}/>
        </View>
        );
      }
      else{
        return(
          <div>
            <h1>No Routine Found</h1>
          </div>
      )
      }
    }
    else
    {
      return (
        <div>
          <h1>No Routine Found</h1>
        </div>
      )     
    }    
}
      
    
    

    
    

  
export default CurDay;

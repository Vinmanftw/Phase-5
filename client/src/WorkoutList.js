import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import Workout from "./Workout"

const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
`

function WorkoutList({active, setActive,setName, setPrimary, setSecondary, setSecondary2, setSecondary3, setSecondary4,}) {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
   
        fetch("/WorkoutList").then((r) => {
          if (r.ok) {
            r.json().then((workouts) => {setWorkouts(workouts);
              console.log(workouts);})
          }
        });
      }, []);

    function mapWorkouts(){
        if (workouts){
          return workouts.map((workout) => (
          <Workout workout={workout} active={active} setActive={setActive}setName={setName} setPrimary={setPrimary} setSecondary={setSecondary} setSecondary2={setSecondary2} setSecondary3={setSecondary3} setSecondary4={setSecondary4} key={workout.id}/>
          ))
        }
    }
    return (
        <CardContainer>
            {mapWorkouts()}
        </CardContainer>
    )
}

export default WorkoutList

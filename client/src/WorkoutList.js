import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import Workout from "./Workout"

const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
`

function WorkoutList({dayId}) {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
   
        fetch("/WorkoutList").then((r) => {
          if (r.ok) {
            r.json().then((workouts) => {setWorkouts(workouts);
              console.log(workouts);})
          }
        });
    }, []);

    const distinct = (value,index,self) => {
      return self.indexOf(value) === index;
    }

    function mapWorkouts(){
        if (workouts){
          const result = Array.from(new Set(workouts.map(w=>w.name)))
          .map(name => {
            return {
              
              id: workouts.find(s => s.name === name).id,
              name: name,
              primary_muscle: workouts.find(s => s.name === name).primary_muscle,
              secondary_muscle_1: workouts.find(s => s.name === name).secondary_muscle_1,
              secondary_muscle_2: workouts.find(s => s.name === name).secondary_muscle_2,
              secondary_muscle_3: workouts.find(s => s.name === name).secondary_muscle_3,
              secondary_muscle_4: workouts.find(s => s.name === name).secondary_muscle_4
            };
          });
          console.log(result);
          return result.map((workout) => (
          <Workout workout={workout} dayId={dayId} key={workout.id}/>
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

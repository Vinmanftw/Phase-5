import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import Workout from "./Workout"

const NavigationContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;`

const Display = styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
width:400px;
background-color: white;
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
const H1= styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
width:400px;
background-color: white;
`

const CardContainer = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
width: 100%;
`
const Btn = styled("button")`
display: flex;
flex-flow: column;
justify-content: center;
width: 100%;
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
          
          return result.map((workout) => (
          <Workout workout={workout} dayId={dayId} key={workout.id}/>
          ))
        }
    }
    return (
        <CardContainer>
          <Nav>
              <h1>Search bar</h1>
          </Nav>
            
            
          <SelectCardContainer>
            {mapWorkouts()}
          </SelectCardContainer>
            
          
          
            
        </CardContainer>
    )
}

export default WorkoutList

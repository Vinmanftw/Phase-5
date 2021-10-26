import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
import Workout from "./Workout"
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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
justify-content: flex-start;
width: 100%;
`
const Btn = styled("button")`
display: flex;
flex-flow: column;
justify-content: center;
width: 100%;
`
const Select = styled('select')`
width:100%;
margin-left:1%;
font-size: 20px;
color:#13cbd2;
background-color:#404040;
border-radius: 4px;
border: 1px solid #13cbd2;
text-align: center;
margin-bottom: 6.5%;`



function WorkoutList({dayId, workouts, setWorkouts, day, curDay, setCurDay,setLoadCards,workoutArrayLength,setWorkoutArrayLength}) {
    
    
    const [search, setSearch] = useState("all");
    const [curResult,setCurResult] = useState([]);
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
          const result = Array.from(new Set(workouts.map(w=>w.name)))
          .map(name => {
            return {
              
              id: workouts.find(s => s.name === name).id,
              name: name,
              primary_muscle: workouts.find(s => s.name === name).primary_muscle,
              youtube_id: workouts.find(s => s.name === name).youtube_id,
              video_start_time: workouts.find(s => s.name === name).video_start_time,
              secondary_muscle_1: workouts.find(s => s.name === name).secondary_muscle_1,
              secondary_muscle_2: workouts.find(s => s.name === name).secondary_muscle_2,
              secondary_muscle_3: workouts.find(s => s.name === name).secondary_muscle_3,
              secondary_muscle_4: workouts.find(s => s.name === name).secondary_muscle_4

            };
          });
          if(search === "all"){
            return (
              <InfiniteScroll dataLength={result.length}
                height={750}
                className="workoutList">
                {result.map((workout) => ( 
                  <Workout 
                  workout={workout}
                  day={day}
                  curDay={curDay} 
                  setCurDay={setCurDay} 
                  workoutArrayLength={workoutArrayLength} 
                  setWorkoutArrayLength={setWorkoutArrayLength} 
                  dayId={dayId} 
                  setLoadCards={setLoadCards} 
                  key={workout.id}
                  />
                  ))}
              </InfiniteScroll>
            )
           
          }
          else{
            const filteredWorkouts = result.filter((workout)=>{
              if(search === workout.primary_muscle){
                return true;
              }
              else{
                return false;
              }

            })
            
            return (
              <InfiniteScroll dataLength={filteredWorkouts.length}
                height={750}>
                {filteredWorkouts.map((workout) => ( 
                  <Workout 
                  workout={workout}
                  day={day}
                  curDay={curDay} 
                  setCurDay={setCurDay} 
                  workoutArrayLength={workoutArrayLength} 
                  setWorkoutArrayLength={setWorkoutArrayLength} 
                  dayId={dayId} 
                  setLoadCards={setLoadCards} 
                  key={workout.id}
                  />
                  ))}
              </InfiniteScroll>
            )
          }
        }
    }

    return (
        <CardContainer>
          <Nav>
            <Select onChange={(e) => setSearch(e.target.value)} PrimaryMuscle="primary_muscle" id="primary_muscle">
              <option value="all">All</option>
              <option value="Chest">Chest</option>
              <option value="Legs">Legs</option>
              <option value="Back">Back</option>
              <option value="Arms">Arms</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Abs/Obliques">Abs/Obliques</option>

            </Select>
          </Nav>
          
            
          
            {mapWorkouts()}
          
            
          
          
            
        </CardContainer>
    );

}


export default WorkoutList

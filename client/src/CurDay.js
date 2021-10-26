import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import WorkoutCard from "./WorkoutCard"
import WorkoutList from "./WorkoutList"
import Form from "./Form"
import {useHistory} from "react-router-dom"
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
width: 900px;

`
const SelectCardContainer = styled('div')`
display: flex;
flex-flow: column;
justify-content:flex-start;

max-width: 900px;`
const Nav = styled("div")`
display: flex;
flex-flow: row;
justify-content: center;
width:920px;

gap:1%;
`
const WorkoutsToChoose = styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
width:450px;
max-width: 900px;
`
const WeekButton = styled("button")`

width:20%;
font-size: 20px;
color:#13cbd2;
background-color:#404040;
border-radius: 4px;
border: 1px solid #13cbd2;
text-align: center;

margin-bottom: 3%;
`
const DaySelect = styled("Select")`

width:79%;
font-size: 20px;
color:#13cbd2;
background-color:#404040;
border-radius: 4px;
border: 1px solid #13cbd2;
text-align: center;
margin-bottom: 3%;
`

const FormButton = styled("button")`


font-size: 20px;
color:#13cbd2;



text-align: center;


`
const H2 = styled("h2")`
font-size: 20px;
color:#13cbd2;
`
const Instructions = styled("div")`
margin:0 auto;
width:40%;
text-align:center;`




function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay,dayId, setDayId}) {
  let history = useHistory();
  const [loadCards, setLoadCards] = useState(null);
  const [workoutArrayLength, setWorkoutArrayLength] = useState(day.workouts.length)
  const [curDay, setCurDay] = useState(day);
  const [curDayId, setCurDayId] = useState(day.dotw);
  const [workoutIdToDelete, setWorkoutIdToDelete] = useState(null);
  const [toggleForm, setToggleForm] = useState(false);
  const [workouts, setWorkouts] = useState([]);
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
    function handleOnChange(e){
      e.preventDefault();
      const dayId = parseInt(e.target.value);
      console.log(dayId)
      setDayId(dayId)
      fetch(`/GetDayData/${dayId}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day)
            setCurDay(day)
            console.log(dayId)
            console.log(day);
            console.log(day.workouts.length);
            setWorkoutArrayLength(day.workouts.length);
            
            
                  
            
          });
        }
      });
      history.push(`/week/${routineId}/workout/${dayId}/`)
      fetch(`/GetDayData/${dayId}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day)
            setCurDay(day)
            console.log(dayId)
            console.log(day);
            console.log(day.workouts.length);
            setWorkoutArrayLength(day.workouts.length);
            
          });
        }
      });
      
    }
    
    
    if (curDay){
      function mapWorkouts(){
        if (curDay.workouts){
          return (
            <InfiniteScroll dataLength={curDay.workouts.length}
              height={750}
              className="myWorkouts">
              {curDay.workouts.map((workout) => (
                <WorkoutCard 
                  workoutIdToDelete={workoutIdToDelete} 
                  setWorkoutIdToDelete={setWorkoutIdToDelete} 
                  setCurDay={setCurDay} 
                  day={day} 
                  workout={workout} 
                  workoutArrayLength={workoutArrayLength} 
                  setWorkoutArrayLength={setWorkoutArrayLength} 
                  dayId={dayId} 
                  loadCards={loadCards} 
                  setLoadCards={setLoadCards} 
                  key={workout.id}
                />
              ))}
              {toggleForm?
                  <div>
                    <Form workouts={workouts} setWorkouts={setWorkouts} dayId={dayId} day={day} curDay={curDay} setCurDay={setCurDay} workoutArrayLength={workoutArrayLength} setWorkoutArrayLength={setWorkoutArrayLength} setToggleForm={setToggleForm} toggleForm={toggleForm}/>
                  </div>
                  :
                  <Instructions>
                    <H2>Add workouts already added from the right or add <FormButton onClick={()=>{setToggleForm(true)}}>a new workout</FormButton></H2>
                    
                  </Instructions>}
            </InfiniteScroll>
          )
        }
      }
      if(user){
        if(routine){
          return (
          <View>
            <UsersWorkouts>

              <Nav>
                <WeekButton onClick={()=>{history.push(`/week/${routineId}/`)}}>Week</WeekButton>
                <DaySelect onChange={handleOnChange}Dotw="dotw" id="dotw">
                  <option value={day.id}>Current Day: {day.dotw} {day.title !== 'Click To Edit'?"- "+day.title:''}</option>
                  <option value={routine.days[0].id}>{routine.days[0].dotw} {routine.days[0].title !== 'Click To Edit'?"- "+routine.days[0].title:''}</option>
                  <option value={routine.days[1].id}>{routine.days[1].dotw} {routine.days[1].title !== 'Click To Edit'?"- "+routine.days[1].title:''}</option>
                  <option value={routine.days[2].id}>{routine.days[2].dotw} {routine.days[2].title !== 'Click To Edit'?"- "+routine.days[2].title:''}</option>
                  <option value={routine.days[3].id}>{routine.days[3].dotw} {routine.days[3].title !== 'Click To Edit'?"- "+routine.days[3].title:''}</option>
                  <option value={routine.days[4].id}>{routine.days[4].dotw} {routine.days[4].title !== 'Click To Edit'?"- "+routine.days[4].title:''}</option>
                  <option value={routine.days[5].id}>{routine.days[5].dotw} {routine.days[5].title !== 'Click To Edit'?"- "+routine.days[5].title:''}</option>
                  <option value={routine.days[6].id}>{routine.days[6].dotw} {routine.days[6].title !== 'Click To Edit'?"- "+routine.days[6].title:''}</option>
                </DaySelect>
              </Nav>
              
              {mapWorkouts()}
              {console.log(routine)}
              {console.log(routine.days)}
              {console.log(routine.days[1])}
             
              
              
                
              
            </UsersWorkouts>
            <WorkoutsToChoose>
              
              
              
              <SelectCardContainer>
                <WorkoutList workouts={workouts} setWorkouts={setWorkouts} dayId={dayId} day={day} curDay={curDay} setCurDay={setCurDay} workoutArrayLength={workoutArrayLength}setWorkoutArrayLength={setWorkoutArrayLength} setLoadCards={setLoadCards}/>
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

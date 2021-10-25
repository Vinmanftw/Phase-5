import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
const FORM= styled('form')`
  background-color: #404040;
  border: 1px solid black;
  border-radius:20px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 900px;
  
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
`
const Select = styled('select')`
    display: flex;
    justify-self: center;
    width:94%;
    font-size: 18px;
    color:#13cbd2;
    background-color:#333333;
    border-radius: 4px;
    border: 1px solid black;
    text-align: center;
    margin:0 auto;
    margin-top: 8%;
    margin-bottom: 5%;
`

const InputContainer = styled("div")`
display: flex;
flex-flow: column;
margin: 0 auto;
text-align: center;
justify-center: center;
max-width: 900px;
` 


const InputName = styled('input')`
width: 100%;
border: 1px solid black;
border-radius:4px;
padding:5px;
`
const LabelDiv = styled('div')`
display:flex;
flex-flow: column;
justify-content: flex-start;
width:40%;
margin-bottom: 5%;
border: 1px solid black;
border-radius: 4px;
background-color:#555555;

`
const LabelDivv = styled('div')`
display:flex;
flex-flow: column;
justify-content: flex-start;
width:40%;
margin-bottom: 5%;

`
const Space = styled('div')`
display:flex;
flex-flow: column;
justify-content: flex-start;
width:30%;
margin-bottom: 5%;

`
const LabelDivvv = styled('div')`
display:flex;
flex-flow: column;
justify-content: flex-start; ;
width:20%;
margin-bottom: 5%;

`
const TitleAndCancel = styled('div')`
display:flex;
flex-flow: row;
justify-content: flex-end;
width:90%;
margin: 0;
padding: 0;

`
const Label = styled('label')`
display: flex;
margin-top: 5%;
margin-left: 3%;
margin-right: 3%;

`
const UpdateButton = styled("button")`

width:40%;



border:1px black solid;
background-color: green;
color: black;
border-radius: 5px;
`
const CancelButton = styled("button")`



width:10%;

border:1px black solid;
background-color: red;
color: black;
border-radius: 5px;
`
const H1 = styled("h1")`
font: 25px Caveat;
margin: 0;
padding: 0;
`
const TopRow = styled("div")`
display: flex;
flex-flow: row;
width:99%;
margin-left: 1%;
justify-content: flex-start;
`
const BottomRow = styled("div")`
display: flex;
flex-flow: row;
width:98%;
margin-left: 1%;
gap:1%;
justify-content: flex-start;

`
const ButtonRow = styled("div")`
display: flex;
flex-flow: row;
width:98%;
margin-left: 1%;
gap:1%;
justify-content: center;
`
function Form({workouts ,setWorkouts ,setToggleForm , toggleForm,dayId, day, curDay, setCurDay,workoutArrayLength,setWorkoutArrayLength}) {
  const history = useHistory();
  const [name,setName] = useState('')
  const [primary,setPrimary] = useState('Chest')
  const [secondary, setSecondary] = useState('')
  const [secondary2, setSecondary2] = useState('')
  const [secondary3, setSecondary3] = useState('')
  const [secondary4, setSecondary4] = useState('')
  


  function handleSubmit(e) {
    e.preventDefault();
    // setName(name);
    // setPrimary(primary);
    // setSecondary(secondary);
    // setSecondary2(secondary2);
    // setSecondary3(secondary3);
    // setSecondary4(secondary4);
    setToggleForm(false);
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
    fetch("/CreateWorkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        primary_muscle: primary,
        secondary_muscle_1: secondary,
        secondary_muscle_2: secondary2,
        secondary_muscle_3: secondary3,
        secondary_muscle_4:secondary4
      }),
    })   
    .then((r) => {
      if (r.ok) {
        r.json().then((workout) => {
            console.log(workout);
            fetch("/WorkoutList").then((r) => {
                if (r.ok) {
                  r.json().then((workouts) => {setWorkouts(workouts);
                    console.log(workouts);})
                }
            });
        });
      }
    });
    
  }

  return (
    <InputContainer>
      
      <FORM onSubmit={handleSubmit}>
            <TitleAndCancel>
                <H1>Add New Workout</H1>
            </TitleAndCancel>
            <TopRow>
              <LabelDivv>
                <Label htmlFor="name">Workout Name*</Label>
                <InputName
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </LabelDivv>
              
            </TopRow>
            <BottomRow>
            <LabelDiv>
              <Label htmlFor="primary_muscle">Primary Muscle Group Required*</Label>
              <Select onChange={(e) => setPrimary(e.target.value)} PrimaryMuscle="primary_muscle" id="primary_muscle">
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs/Obliques">Abs/Obliques</option>
              </Select>
            </LabelDiv>

          
          
            <LabelDiv>
              <Label htmlFor="secondary_muscle_1">1st Secondary Muscle Group</Label>
              <Select onChange={(e) => setSecondary(e.target.value)} SecondayMuscle="secondary_muscle_1" id="secondary_muscle_1">
                <option value=''>None</option>
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs/Obliques">Abs/Obliques</option>
              </Select>
            </LabelDiv>
           
            <LabelDiv>
              <Label htmlFor="secondary_muscle_2">2nd Secondary Muscle Group</Label>
              <Select onChange={(e) => setSecondary2(e.target.value)} SecondaryMuscle2="secondary_muscle_2" id="secondary_muscle_2">
                <option value=''>None</option>
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs/Obliques">Abs/Obliques</option>
              </Select>
            </LabelDiv>
         


            <LabelDiv>
              <Label htmlFor="secondary_muscle_3">3rd Secondary Muscle Group</Label>
              <Select onChange={(e) => setSecondary3(e.target.value)} SecondaryMuscle3="secondary_muscle_3" id="secondary_muscle_3">
                <option value=''>None</option>
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs/Obliques">Abs/Obliques</option>
              </Select>
            </LabelDiv>
            <LabelDiv>
              <Label htmlFor="secondary_muscle_4">4th Secondary Muscle Group</Label>
              <Select onChange={(e) => setSecondary4(e.target.value)} SecondaryMuscle4="secondary_muscle_4" id="secondary_muscle_4">
                <option value=''>None</option>
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs/Obliques">Abs/Obliques</option>
              </Select>
            </LabelDiv>
            </BottomRow>
        <ButtonRow>
            <UpdateButton type="submit">Add Workout</UpdateButton>
            <CancelButton onClick={() =>(setToggleForm(false))}>Cancel</CancelButton>
        </ButtonRow>

        
      </FORM>

    </InputContainer>
  );
}

export default Form;

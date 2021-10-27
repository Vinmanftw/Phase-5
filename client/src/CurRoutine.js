import React, { useEffect, useState, useParams } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`
const Week = styled("div")`
display: flex;
flex-flow: column;
width: 45%;
justify-content: center;
`
const Row = styled("div")`
display: flex;
flex-flow: row;
justify-content:flex-start;
gap:10px;`
const ButtonInputDiv= styled('div')`
display: flex;
flex-flow: row;
border:1px solid black;
width:100%;
border-radius:5px;
background-color:#13cbd2;
margin-top:10%;
padding-top:1.5%;
padding-bottom:1.5%;`

const DayButton= styled('button')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:0;
text-align:Center;
width:47.5%;
`
const TitleButton= styled('button')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:0;
text-align:center;
width:47.5%;
`
const DayInput= styled('input')`
color: black;
font-size:20px;
border-radius:5px;
background-color:#13cbd2;
border:1px solid black;
text-align:center;
width:47.5%;
`
const Edit = styled('button')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:1px solid black;
text-align:center;
width:7%;`
const CenterButton = styled('button')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:0;
text-align:center;
width:5%;`
const H1 = styled('h1')`
font-size:40px;
margin:0;
color:#13cbd2;
background-color:#404040;
border-radius: 8px;
border: 1px solid #13cbd2;
padding-bottom:1%;
padding-left:1.5%;
padding-right:1.5%;
`     
      
function CurRoutine({ user, setUser,routineId, routine, setRoutine, dayId,setDayId, day ,setDay }) {
  
    // fetch specific Routine home screen 
    // get request must be serialized with everything needed for the screen
    // Welcome back <Username>          (Create account) (Log in) 
    // (Monday- Chest day)
    // (Tuesday)
    // (wednesday)
    // (thursday)
    // (friday)
    // 
    const [toggleEdit,setToggleEdit] = useState(false)
    const [currentValue,setCurrentValue] = useState('')
    function handleChange(e){
      e.preventDefault();
      setCurrentValue(e.target.value)
      const newTitle = e.target.value;
      console.log(newTitle)
      console.log(parseInt(e.target.className.slice(-2)))
      const curDayId = parseInt(e.target.className.slice(-2));
      console.log(curDayId);
      
      fetch(`/UpdateDayData/${curDayId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.target.value
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((day) => {
            console.log(day)
            fetch(`/Routine/${routineId}`,{credentials:'include'}).then((r) => {
              if (r.ok) {
                r.json().then((routine)=>{
                  setRoutine(routine);
                  
                });
              }
            });
            
            
            
            
          });
        }
      });
      fetch(`/Workout/${curDayId}`).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day);
            console.log(day);
            
          });
        }
      });
    }
    console.log(user)
    let history = useHistory();
    function handleDay(e) {
      
      const dayId = e.target.value;
      setDayId(dayId)
      console.log(e.target.value)
      console.log(dayId)
      fetch(`/Workout/${e.target.value}`).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day);
            console.log(day);
            history.push(`/week/${routineId}/workout/${dayId}/`)
          });
        }
      });
    }
    
    function mapDays(){
      const sorter = {
        // "sunday": 0, // << if sunday is first day of week
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
      }
      routine.days.sort(function sortByDay(a, b) {
        let day1 = a.dotw.toLowerCase();
        let day2 = b.dotw.toLowerCase();
        return sorter[day1] - sorter[day2];
      });
      
      
      // console.log(routine.days.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
      if (routine.days){
        return routine.days.map((day) => (
          
         <ButtonInputDiv key={day.id}>
          <DayButton
          value={day.id}
          onClick={handleDay} 
          >
            {`${day.dotw}`}
          </DayButton>
          <CenterButton>-</CenterButton>
          {toggleEdit? 
            <DayInput
            type="text"
            id="title"
            className={day.id}
            onChange={handleChange}
            />
          :
          <TitleButton
          value={day.id}
          key={day.id}
          onClick={handleDay} 
          >
            {`${day.title}`}
          </TitleButton>
          }
         </ButtonInputDiv>
         ))
      }
    }
    
    if (user){
      
      if(routine){
        return (
          <HomeDiv>
            <Row>
              <H1>{routine.title}</H1>
              <Edit onClick={()=>setToggleEdit(!toggleEdit)}>✏️</Edit>
            </Row>
            <Week>
              {mapDays()}
            </Week>
          </HomeDiv>
        );
      }
      else
      {
        return(
          <HomeDiv>
             <h1>No Routine Found</h1>
          </HomeDiv>
        )
        
      }
    }
    else
    {
      return(
        <HomeDiv>
          <h1>No user Found</h1>
        </HomeDiv>
      )
      
    }
      
    
      
       
        
}
      
    
    

    
    

  
export default CurRoutine;

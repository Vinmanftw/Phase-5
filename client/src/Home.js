import React, { useState,useEffect, useRouteMatch,useParams } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom";
const Column = styled("div")`
margin-top:5%;
display: flex;
flex-flow: row;
justify-content:center;
gap:1%;`
const Row = styled("div")`
display: flex;
flex-flow: row;
justify-content:center;
gap:1%;`
const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`
const AddButton = styled('button')`
color: black;
font-size:30px;
border:1px solid black;
border-radius:5px;
background-color:#13cbd2;
border:0;
text-align:center;
width:100%;

`
const Week = styled("div")`
display: flex;
flex-flow: column;
width: 45%;
justify-content: center;
`
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
width:100%;
`
const DayInput= styled('input')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:1px solid black;
text-align:center;
width:100%;
`
const Edit = styled('button')`
color: black;
margin:0 auto;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:1px solid black;
text-align:center;
width:20%;`
const CenterButton = styled('button')`
color: black;
font-size:30px;
border-radius:5px;
background-color:#13cbd2;
border:0;
text-align:center;
width:5%;`
const H1 = styled('h1')`
width:80;
font-size:40px;
margin:0 auto;
color:#13cbd2;
background-color:#404040;
border-radius: 8px;
border: 1px solid #13cbd2;
text-align: center;
padding-bottom:1.5%;
padding-left:1.5%;
padding-right:1.5%;
`
function Home({ user, setUser,routineId, setRoutineId, routine, setRoutine }) {
  
  let history = useHistory();
  const [toggleEdit,setToggleEdit] = useState(false)
  function handleChange(e){
    e.preventDefault();
    const newTitle = e.target.value;
    console.log(newTitle)
    console.log(parseInt(e.target.className.slice(-2)))
    const curRoutineId = parseInt(e.target.className.slice(-2));
    console.log(curRoutineId);
    
    fetch(`/UpdateRoutine/${curRoutineId}`, {
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
          fetch("/me",{credentials:'include'}).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setUser(user);
                
                
              })
            }
          });
          
          
          
          
        });
      }
    });
    
  }
  function handleRoutine(e) {
    //debugger;
    const routineId = e.target.value;
    setRoutineId(routineId)
    console.log(e.target.value)
    console.log(routineId)
    fetch(`/Routine/${e.target.value}`,{credentials:'include'}).then((r) => {
      if (r.ok) {
        r.json().then((routine)=>{
          setRoutine(routine);
          history.push(`/week/${routineId}/`)
        });
      }
    });
  }
  
  
    if (user){
        function handleCreateRoutine(e){
          
          e.preventDefault();
          fetch('/CreateRoutine', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: `${user.username} Routine`,
              user_id: user.id
            }),
          })   
          .then((r) => {
            if (r.ok) {
              r.json().then((Routine) => {
                  console.log(Routine)
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Monday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Tuesday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Wednesday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Thursday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Friday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Saturday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch('/CreateDay', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      dotw: `Sunday`,
                      title: 'Edit With ✏️',
                      routine_id: Routine.id
                    }),
                  })   
                  .then((r) => {
                    if (r.ok) {
                      r.json().then((day) => {
                          console.log(day)
                      });
                    }
                  });
                  fetch("/me",{credentials:'include'}).then((r) => {
                    if (r.ok) {
                      r.json().then((user) => {
                        setUser(user);
                        
                        
                      })
                    }
                  });
                //////////////////////////////////////////////////////////////////////////////////////////////// 
              });
            }
          });
          
          ///Run Rerender Fetches here///
         
        }
     
      
      // for each routine that belongs to user create a button 
      // that will set the routine equal to the value of the button 
      // just clicked then send user to current User
      function mapRoutines(){
        if (user.routines){
          return user.routines.map((routine) => (
          
            <ButtonInputDiv key={routine.id}>
              {toggleEdit? 
                <DayInput
                type="text"
                id="title"
                className={routine.id}
                onChange={handleChange}
                />
              :
              <TitleButton
              value={routine.id}
              
              onClick={handleRoutine} 
              >
                {routine.title}
              </TitleButton>
              }
              </ButtonInputDiv>
            
          
          ))
        }
      }
      return (
        <HomeDiv>
          <h1>Welcome, {user.username}!</h1>
          
          <Column>
            
            <Week>
              <H1> Select A Routine </H1>
              <Edit onClick={()=>setToggleEdit(!toggleEdit)}>✏️</Edit>
                {mapRoutines()}
                {user.routines?
                  user.routines.length<4? 
                    <ButtonInputDiv>
                      <AddButton onClick={handleCreateRoutine}>
                        Add New Routine
                      </AddButton>
                    </ButtonInputDiv>
                :''
                
                :''}
                
            </Week>
            
          </Column>
        </HomeDiv>
      );
    } 
    else{
      return (
        <HomeDiv>
          <h1>Please Login or Sign Up</h1>
        </HomeDiv>
      
      );
    }
  

    
}
  
export default Home;
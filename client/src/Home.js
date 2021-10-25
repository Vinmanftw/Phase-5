import React, { useState,useEffect, useRouteMatch,useParams } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom";
const Column = styled("div")`
display: flex;
flex-flow: column;
justify-content:flex-start;
gap:1%;`

const HomeDiv = styled('div')`
max-width:900px;
margin: 0 auto;`
const AddButton = styled('button')`
width: 20%;`
function Home({ user, setUser,routineId, setRoutineId, routine, setRoutine }) {
  
  let history = useHistory();
  
  
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
                      title: 'Click To Edit',
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
          <button 
           value={routine.id}
           key={routine.id}
           onClick={handleRoutine} 
           >
             {routine.title}
           </button>))
        }
      }
      return (
        <HomeDiv>
          <h1>Welcome, {user.username} !</h1>
          <h1>Select a routine</h1>
          <Column>
            <div>
              {mapRoutines()}
            </div>
            {user.routines.length<4? 
            <AddButton onClick={handleCreateRoutine}>
              Add New Workout Routine
            </AddButton>
            :''}
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
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
const FORM= styled('form')`
  background-color: #1F2833;
  border: 1px solid #13cbd2;
  border-top: 1px solid #13cbd2;
  border-right: 2px solid #13cbd2;
  border-bottom: 2px solid #13cbd2;
  border-left: 1px solid #13cbd2;
  border-radius:8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
`
const Btn = styled("Button")`
color:#13cbd2;
border: 1px solid black;
background-color: #0b0c10;
cursor: pointer;`
/* 
#0b0c10
#1F2833
#C5C6C7
#66FCF1
#45A29E


*/
function SignUp({ setUser }) {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMale, setIsMale]= useState("Male");
  const [age, setAge]= useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        is_male: isMale,
        age,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                      title: 'Edit With ??????',
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
                  fetch("/me").then((r) => {
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
          
          history.push('/')
        });
      }
    });
  }

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <FORM onSubmit={handleSubmit}>
        <div className="info">
          <div className="row1">
            <div className="LI">
              <label htmlFor="first_name">First name*</label>
              <input
                type="text"
                id="first_name"
                autoComplete="off"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="LI" id="last">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                autoComplete="off"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

          </div>
          <div className="row2">
            <div className="LI">
              <label htmlFor="is_male">Gender:</label>
              <select onChange={(e) => setIsMale(e.target.value)} Gender="is_male" id="cars">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
            </select>
            </div>
            <div className="space"></div>
            <div className="LI">
              <label htmlFor="age">Age:</label>
              <input
                type="integer"
                id="age"
                autoComplete="off"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>


        </div>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation*</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <Btn type="submit">Sign Up</Btn>
      </FORM>
    </div>
  );
}

export default SignUp;

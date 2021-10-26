import React, { useEffect, useState, useParams, useRouteMatch } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import CurRoutine from "./CurRoutine";
import CurDay from "./CurDay";

function App() {
  const [user, setUser] = useState(null);
  const [routineId, setRoutineId] = useState(null);
  const [routine,setRoutine] = useState(null);
  const [dayId, setDayId] = useState(null);
  const [day,setDay] = useState(null);



  
  
  let path = document.location.pathname;
  useEffect(() => {
    console.log(path);
    console.log(routineId)
    if(path.includes("/week/")){
      let search = path.substring(path.indexOf('/week/'), path.lastIndexOf('/'))
      let val = search.match(/\d+/)[0];
      console.log(val);
      fetch(`/Routine/${val}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((routine)=>{
            setRoutine(routine);
            setRoutineId(val)
          });
        }
      });
    }
    if(path.includes("/workout/")){
      let searchSub = path.substring(path.indexOf('/workout/'), path.lastIndexOf('/'))
      let value = searchSub.match(/\d+/)[0];
      console.log(value);
      fetch(`/Workout/${value}`).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setDay(day);
            console.log(day);
            setDayId(value)
          });
        }
      });
    }
    

    fetch("/me",{credentials:'include'}).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          
          
        })
      }
    });


  }, [routineId,setDayId, dayId]);
  
  
  
  
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path={`/week/${routineId}/workout/${dayId}/`}>
              <CurDay user={user} setUser={setUser} routineId={routineId} routine={routine} setRoutine={setRoutine} dayId={dayId} setDayId={setDayId} day={day} setDay={setDay}/>
            </Route>
            <Route path={`/week/${routineId}/`}>
              <CurRoutine user={user} setUser={setUser} routineId={routineId} routine={routine} setRoutine={setRoutine} dayId={dayId} setDayId={setDayId} day={day} setDay={setDay}/>
            </Route>
            <Route path={`/`}>
              <Home user={user} setUser={setUser} routineId={routineId} setRoutineId={setRoutineId} routine={routine} setRoutine={setRoutine} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser}/>
            </Route>
            <Route path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route path="/">
              <Home user={user} setUser={setUser} routineId={routineId} setRoutineId={setRoutineId} routine={routine} setRoutine={setRoutine}/>
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;


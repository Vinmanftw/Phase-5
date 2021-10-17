import React, { useEffect, useState } from "react";
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
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)});
      }
    });
  }, [setRoutineId]);
  
  
  
  
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/week">
              <CurRoutine user={user} setUser={setUser} routineId={routineId} routine={routine} setRoutine={setRoutine} dayId={dayId} setDayId={setDayId} day={day} setDay={setDay}/>
            </Route>
            <Route path="/workout">
              <CurDay user={user} setUser={setUser} routineId={routineId} routine={routine} setRoutine={setRoutine} day={day} setDay={setDay}/>
            </Route>
            <Route path="/">
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


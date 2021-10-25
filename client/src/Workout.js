import React,{useState, useEffect} from 'react'
import styled from 'styled-components'



const H1 = styled("h1")`

font-size:13px;

border-radius: 5px;

padding:.5%;
`
const VideoDiv = styled("div")`
width:40%;
padding:.5%;
height: 150px;
`
const TitleDiv = styled("div")`
width:70%;
padding:.5%;
`
const PrimaryMuscleDiv = styled("div")`
width:30%;
padding:.5%;
display: flex;
flex-flow: row;
justify-content: flex-end;
`

const Card = styled("div")`
display: flex;
flex-flow: column;
justify-content: flex-start;
border: 1px black solid;
border-radius: 20px;
background-color: #404040;
margin-bottom: 2%;
padding-bottom: 2%;
width:100%;
`
const TopRow = styled("div")`
display: flex;
flex-flow: row;
width:98%;
margin-left: 1%;
`

const SetsRow = styled("div")`
display: flex;
flex-flow: row;
margin-left: 1%;
width: 99%;
gap:1%;
`
const Btn = styled("button")`
width: 50%;
margin-left:25%;

`
function Workout({workout, day,curDay,setCurDay,dayId, setLoadCards,workoutArrayLength,setWorkoutArrayLength}) {
    const [name,setName] = useState(workout.name)
    const [primary,setPrimary] = useState(workout.primary_muscle)
    const [secondary, setSecondary] = useState(workout.secondary_muscle_1)
    const [secondary2, setSecondary2] = useState(workout.secondary_muscle_2)
    const [secondary3, setSecondary3] = useState(workout.secondary_muscle_3)
    const [secondary4, setSecondary4] = useState(workout.secondary_muscle_4)
    const [workoutId, setWorkoutId] = useState(null)


    function handleButton(e){
        e.preventDefault();
        setName(name);
        setPrimary(primary);
        setSecondary(secondary);
        setSecondary2(secondary2);
        setSecondary3(secondary3);
        setSecondary4(secondary4);
        
        
        fetch("/CreateWorkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            day_id: dayId,
            primary_muscle: primary,
            secondary_muscle_1: secondary,
            secondary_muscle_2: secondary2,
            secondary_muscle_3: secondary3,
            secondary_muscle_4:secondary4
          }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((newWorkout) => {
              setWorkoutArrayLength(workoutArrayLength);
              setLoadCards(true)
              console.log(newWorkout);
              setWorkoutId(newWorkout.id);
              console.log(newWorkout.id);
              console.log(workoutId);
              fetch("/AddSet", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  workout_id: newWorkout.id, 
                  prior_weight: 0,
                  now_weight: 0,
                  reps: 0
                }),
              })
              .then((r) => {
                if (r.ok) {
                  r.json().then((newSet) => {console.log(newSet);
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
                  });
                }
              });
              
            }
            );
          }
        });
        
    }
    
    
   
    
    
    
        
        return (
          <Card key={workout.id}>
            <TopRow>
             <TitleDiv>
                <H1>{workout.name}</H1>
             </TitleDiv>
             <PrimaryMuscleDiv>
              <H1>{workout.primary_muscle} Workout</H1>
             </PrimaryMuscleDiv>
            </TopRow>
            <VideoDiv>
                 
            </VideoDiv>
            <Btn onClick={handleButton} >
             Add
            </Btn>
            
          </Card>  
        )
    
    
    
    
    
}

export default Workout
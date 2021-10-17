// //get request to meal 
import React,{useState} from 'react'
import styled from 'styled-components'
import SetCard from './SetCard'

const SetReps = styled("div")`
display: flex;
flex-flow: column;

`
const Set = styled("div")`
display: flex;
flex-flow: column;
`
const Prior = styled("h1")`

`
const Now = styled("input")`
display: flex;`
const Reps = styled("input")`
display: flex;`
const Card = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
border: 1px black solid;
border-radius: 20px;
background-color: #404040;
margin-bottom: 2%;`
const TopRow = styled("div")`
display: flex;
flex-flow: column;
width:99%;
margin-left: 1%;
`
const SetsRow = styled("div")`
display: flex;
flex-flow: row;
margin-left: 1%;
width: 99%;
gap:1%;
`


function WorkoutCard({workout}) {
    
    const [workoutData, setWorkoutData] = useState(null)
    const [runFetch,setRunFetch] = useState(false)
    
    
    if(runFetch === false){
        fetch(`/Cards/${workout.id}`).then((r) => {
            if (r.ok) {
              r.json().then((workout)=>{
                setWorkoutData(workout);
                console.log(workout);
                setRunFetch(true);
              });
            }
        });
        
    }
    
    
    if(workoutData){
        function mapSets(){
            if (workoutData.workout_sets){
                return workoutData.workout_sets.map((set) => (
                <SetCard set={set} workout={workout} key={set.id}/>
                ))
            }    
        }
        return (
            <Card key={workout.id}>
            <TopRow>
             <h1>{workout.name}</h1>
            </TopRow>
            <SetsRow>
              {mapSets()}
            </SetsRow>
          </Card>  
        )
    }
    else{
        return(
            <div>
                <h1>loading...</h1>

            </div>
        )
    }
    
    
    
    
}

export default WorkoutCard
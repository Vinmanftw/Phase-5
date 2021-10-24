// //get request to meal 
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import SetCard from './SetCard'

const SetReps = styled("div")`
display: flex;
flex-flow: column;

`
const AddOrDelete = styled("div")`
display: flex;
flex-flow: column;
justify-content:center;
`
const H1 = styled("h1")`

font-size:20px;
border:1px black solid;
border-radius: 5px;
width:100%;
padding:.5%;
`
const VideoDiv = styled("div")`
width:40%;
padding:.5%;
`
const TitleDiv = styled("div")`
width:40%;
padding:.5%;
`
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
flex-flow: row;
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
const UpdateButton = styled("button")`
margin:auto;
font-size:20px;

text-align: center;

border:1px black solid;
background-color: green;
color: black;
border-radius: 5px;
`

function WorkoutCard({day,dayId,setDayId, workout,active,setActive,name, setName, primary,setPrimary,secondary, setSecondary,secondary2, setSecondary2,secondary3, setSecondary3,secondary4, setSecondary4}) {
    
    const [workoutData, setWorkoutData] = useState(null)
    const [runFetch,setRunFetch] = useState(false)
    const [runUpdate, setRunUpdate] = useState(false)
    const [idToDelete, setIdToDelete] = useState(null)
    const [curArrayLength, setCurArrayLength] = useState(null)
    
    // when one of those values change for one of the sets then run
    // function onChange(){
    //   //update
    //   if(curSets.current_weight !== 0){
    //     setPrior(curSets.prior_weight)
    //   }
    //   setNow(0)
    //   setReps(curSets.cur_reps)
    //   fetch(`/UpdateCard/${curSets.id}`,{
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       prior_weight:prior,
    //       reps
    //     }),
    //   })
    //   .then((r) => {
    //     if (r.ok) {
    //       r.json().then((sets)=>(console.log(sets)));
    //     }
    //   });      
    // }
    function handleAddSet(e){
      e.preventDefault();
      if(curArrayLength <6){
        fetch("/AddSet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workout_id: workout.id, 
            prior_weight: 0,
            reps: 0
          }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((newSet) => {console.log(newSet);
            }
            );
          }
        });
      }
    }
    function handleDeleteSet(e){
      e.preventDefault();
      fetch(`/GetCardData/${workout.id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((newSet) => {console.log(newSet);
            console.log(newSet.sets);
            console.log(newSet.sets[newSet.sets.length - 1].id);
            setCurArrayLength(newSet.sets.length)
            if(newSet.sets.length > 1){
              setIdToDelete(newSet.sets[newSet.sets.length - 1].id)
            }
          });
        }
      });
    }
  
    
    useEffect(() => {
      if(idToDelete !== null){
        fetch(`/DeleteSet/${idToDelete}`, {
          method: "DELETE",
          
        });
        setIdToDelete(null);
      }
    },[idToDelete]);
    
   
    useEffect(() => {
        fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
            if (r.ok) {
              r.json().then((workout)=>{
                setWorkoutData(workout);
                // console.log(workout);
                console.log(workout.sets.length);
                setCurArrayLength(workout.sets.length);
                setRunFetch(true);
              });
            }
        });
    
    },[workout.sets]);
    
    if(workoutData){
        function mapSets(){
            if (workoutData.sets){
                return workoutData.sets.map((set) => (
                  // set={id:set.id,prior_weight: set.prior_weight, current_weight: 0, cur_reps: set.reps},
                  // take set object and turn it into =>
                  // { id: set.id , current_weight: set.prior_weight, prior_weight: 0, previous reps: set.reps}
                    
                <SetCard set={set} workout={workout} runUpdate={runUpdate} setRunUpdate={setRunUpdate}  key={set.id}/>
                ))
            }    
        }
        return (
          <Card key={workout.id}>
            <TopRow>
             <TitleDiv>
                <H1>{workout.name}</H1>
             </TitleDiv>
             <VideoDiv></VideoDiv>
             
            </TopRow>
            
            <SetsRow>
              {mapSets()}
              <AddOrDelete>
                {curArrayLength<6?<button onClick={handleAddSet}>+</button>:''}
                {curArrayLength>1?<button onClick={handleDeleteSet}>-</button>:''}
              </AddOrDelete>
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
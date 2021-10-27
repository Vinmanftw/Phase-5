// //get request to meal 
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import SetCard from './SetCard'

const SetReps = styled("div")`
display: flex;
flex-flow: column;
`
const AddOrDeleteRow = styled("div")`
display: flex;
flex-flow: row;
justify-content:flex-end;
self-align:flex-end;
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
const UpdateDeleteDiv = styled("div")`
display: flex;
flex-flow: row;
justify content: flex-end;
width:20%;
padding:.5%;
`
const Reps = styled("input")`
display: flex;
`
const Card = styled("div")`
display: flex;
flex-flow: column;
justify-content: center;
border: 1px black solid;
border-radius: 20px;
background-color: #404040;
margin-bottom: 2%;
`
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
const VideoRow = styled("div")`
display: flex;
flex-flow: row;
margin-left: 1%;
width: 99%;
justify-content: center;
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
const DeleteButton = styled("button")`
margin:auto;
font-size:20px;
text-align: center;
border:1px black solid;
background-color: red;
color: black;
border-radius: 5px;
`
const VidBox = styled("iframe")`
width: 60%;
aspect-ratio: 16 / 9;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 2%;      
`
const Details = styled("div")`
margin-left: 1%;
display: flex;
flex-flow: column;    
width: 38%;
`
const Table = styled("table")`
font-family: arial, sans-serif;
border-collapse: collapse;
width: 99%;
`
const H2 = styled("h2")`
margin: 2 auto;
text-align:center;
`
const Td = styled("td")`
font-size:15px;
border: 3px solid black;
text-align: left;
padding: 4px;
color: black;
background-color:#13cbd2;
`
const TdRight = styled("td")`
border: 3px solid black;
text-align: center;
padding: 4px;
color: black;
background-color:#13cbd2;
`
function WorkoutCard({day,workoutIdToDelete,setWorkoutIdToDelete,dayId,setCurDay,setDayId,workoutArrayLength,setWorkoutArrayLength,handleDeleteCard,loadCards,setLoadCards,workout,active,setActive,name, setName, primary,setPrimary,secondary, setSecondary,secondary2, setSecondary2,secondary3, setSecondary3,secondary4, setSecondary4}) {
    const [workoutData, setWorkoutData] = useState(workout)
    const [runFetch,setRunFetch] = useState(false)
    const [runUpdate, setRunUpdate] = useState(false)
    const [idToDelete, setIdToDelete] = useState(null)
    const [curArrayLength, setCurArrayLength] = useState(null)
    const [updateSets, setUpdateSets] = useState(false)
    const [videoView, setVideoView] = useState(false)
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
            now_weight: 0,
            reps: 0
          }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((newSet) => {console.log(newSet);
              fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
                if (r.ok) {
                  r.json().then((workout)=>{
                    setWorkoutData(workout);
                    // console.log(workout);
                    setCurArrayLength(workout.sets.length);
                    setRunFetch(true);
                  });
                }
              });
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
          r.json().then((newSet) => {
            setCurArrayLength(newSet.sets.length)
            if(newSet.sets.length > 1){
              setIdToDelete(newSet.sets[newSet.sets.length - 1].id)
            }
          });
        }
      });
    }
    // function handleUpdateCard(e){
    //   e.preventDefault();     
    // }
    useEffect(() => {
      fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((workout)=>{
            setWorkoutData(workout);
            // console.log(workout);
            setCurArrayLength(workout.sets.length);
            setRunFetch(true);
          });
        }
      });
    },[])
    function handleDeleteCard(e){
      e.preventDefault();
      setWorkoutIdToDelete(workout.id)
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
      fetch(`/DeleteCardData/${workout.id}`, {
        method: 'DELETE', 
      })
      fetch(`/GetDayData/${day.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((day)=>{
            setCurDay(day)
            // console.log(day);
            setWorkoutArrayLength(day.workouts.length);
          });
        }
      });
    }
    useEffect(() => {
      if(workoutIdToDelete){
        fetch(`/DeleteCardData/${workoutIdToDelete}`, {
          method: 'DELETE', 
        })
        fetch(`/GetDayData/${day.id}`,{credentials:'include'}).then((r) => {
          if (r.ok) {
            r.json().then((day)=>{
              setCurDay(day)
              // console.log(day);
              setWorkoutArrayLength(day.workouts.length);
            });
          }
        });    
        setWorkoutIdToDelete(null);
      } 
    },[])
    useEffect(() => {
      if(loadCards === true) {
        fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
          if (r.ok) {
            r.json().then((workout)=>{
              setWorkoutData(workout);
              // console.log(workout);
              setCurArrayLength(workout.sets.length);
              setRunFetch(true);
            });
          }
        });
        setLoadCards(false);
      }
      if(idToDelete !== null){
        fetch(`/DeleteSet/${idToDelete}`, {
          method: "DELETE",          
        });
        setIdToDelete(null);
      }
      fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((workout)=>{
            setWorkoutData(workout);
            // console.log(workout);
            setCurArrayLength(workout.sets.length);
            setRunFetch(true);
          });
        }
      });
    },[idToDelete]);
    
    
   
    useEffect(() => {
      if(workoutIdToDelete !== null){
        fetch(`/GetCardData/${workout.id}`,{credentials:'include'}).then((r) => {
            if (r.ok) {
              r.json().then((workout)=>{
                setWorkoutData(workout);
                // console.log(workout);
                setCurArrayLength(workout.sets.length);
                setRunFetch(true);
              });
            }
        });
      }
    },[workout.sets]);
    
    if(workoutData){
        function mapSets(){
            if (workoutData.sets){
                return workoutData.sets.map((set) => (
                  // set={id:set.id,prior_weight: set.prior_weight, current_weight: 0, cur_reps: set.reps},
                  // take set object and turn it into =>
                  // { id: set.id , current_weight: set.prior_weight, prior_weight: 0, previous reps: set.reps}
                <SetCard set={set}  workout={workout} runUpdate={runUpdate} setRunUpdate={setRunUpdate}  key={set.id}/>
                ))
            }    
        }
        return (
          <Card key={workout.id}>
            <TopRow>
             <TitleDiv>
                <H1 onClick={() =>{setVideoView(false)}}>{workout.name}</H1>
             </TitleDiv>
             <VideoDiv>
               <H1 onClick={()=>{setVideoView(true)}}>Video & Details</H1>
             </VideoDiv>
             <UpdateDeleteDiv>
               <DeleteButton onClick={handleDeleteCard}>Delete</DeleteButton>
             </UpdateDeleteDiv>
            </TopRow>
          {videoView?
            <VideoRow>
              <VidBox src={`https://www.youtube.com/embed/${workout.youtube_id}${workout.video_start_time?"?start="+workout.video_start_time:``}`}>
                video isn't supportes
              </VidBox>
              <Details>
                <H2>{workout.name} Details:</H2>
                <Table>
                  <tr>
                    <Td>YouTube Video ID</Td>
                    <TdRight>{workout.youtube_id}</TdRight>
                  </tr>
                  <tr>
                    <Td>Video Start Time</Td>
                    <TdRight>{workout.video_start_time} seconds</TdRight>
                  </tr>
                  <tr>
                    <Td>Primary Muscle Group</Td>
                    <TdRight>{workout.primary_muscle}</TdRight>
                  </tr>
                  <tr>
                    <Td>1st Secondary Muscle Group</Td>
                    <TdRight>{workout.secondary_muscle_1}</TdRight>
                  </tr>
                  <tr>
                    <Td>2nd Secondary Muscle Group</Td>
                    <TdRight>{workout.secondary_muscle_2}</TdRight> 
                  </tr>
                  <tr>
                    <Td>3rd Secondary Muscle Group</Td>
                    <TdRight>{workout.secondary_muscle_3}</TdRight>
                  </tr>
                  <tr>
                    <Td>4th Secondary Muscle Group</Td>
                    <TdRight>{workout.secondary_muscle_4}</TdRight>
                  </tr>
                </Table>
              </Details>
            </VideoRow>
            :
            <SetsRow>
              <AddOrDeleteRow>
                <AddOrDelete>
                  {curArrayLength<6?<button onClick={handleAddSet}>+</button>:''}
                  {curArrayLength>1?<button onClick={handleDeleteSet}>-</button>:''}
                </AddOrDelete>
              </AddOrDeleteRow>
              {mapSets()}          
            </SetsRow> 
          }
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
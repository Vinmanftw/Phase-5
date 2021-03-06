import React,{useState, useEffect} from 'react'
import styled from 'styled-components'



const H1 = styled("h1")`
border-left:1px solid #13cbd2;;
border-bottom:2px solid #13cbd2;
border-right:2px solid black;
border-top:1px solid black;
background-color:#404040;
font-size:13px;

border-radius: 5px;

padding:.5%;
`
const VideoDiv = styled("div")`
display: flex;
flex-flow: row;
justify-content:center;
width:100%;



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
border-top: 2px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
border-radius: 20px;
background-color: #2e2e2e;
margin-bottom: 2%;
padding-bottom: 2%;
width:96%;
margin-left:2%;
`
const TopRow = styled("div")`
display: flex;
flex-flow: row;
width:98%;
margin-left: 1%;
`
const Img = styled("img")`
border: 1px black solid;
border-radius:4px;`
const SetsRow = styled("div")`
display: flex;
flex-flow: row;
margin-left: 1%;
width: 99%;
gap:1%;
`
const VidBox = styled("iframe")`
    
width: 96%;
aspect-ratio: 16 / 9;
border-top: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
border-radius: 10px;
  
`
const Btn = styled("button")`
width: 50%;
margin-top: 1.5%;
margin-left:25%;
background-color: #13cbd2;
border-top: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
border-radius: 4px;


`
function Workout({workout, day,curDay,setCurDay,dayId, setLoadCards,workoutArrayLength,setWorkoutArrayLength}) {
    const [name,setName] = useState(workout.name)
    const [primary,setPrimary] = useState(workout.primary_muscle)
    const [youtubeId,setYoutubeId] = useState(workout.youtube_id)
    const [videoStartTime,setVideoStartTime] = useState(workout.video_start_time)
    const [secondary, setSecondary] = useState(workout.secondary_muscle_1)
    const [secondary2, setSecondary2] = useState(workout.secondary_muscle_2)
    const [secondary3, setSecondary3] = useState(workout.secondary_muscle_3)
    const [secondary4, setSecondary4] = useState(workout.secondary_muscle_4)
    const [workoutId, setWorkoutId] = useState(null)


    function handleButton(e){
        e.preventDefault();
        setName(name);
        setPrimary(primary);
        setYoutubeId(youtubeId);
        setVideoStartTime(videoStartTime);
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
            youtube_id: youtubeId,
            video_start_time: videoStartTime,
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
              <VidBox src={`https://www.youtube.com/embed/${workout.youtube_id}${workout.video_start_time?"?start="+workout.video_start_time:``}`}>
                video isn't supportes
              </VidBox>
            </VideoDiv>
            <Btn onClick={handleButton} >
             Add
            </Btn>
            
          </Card>  
        )
    
    
    
    
    
}

export default Workout
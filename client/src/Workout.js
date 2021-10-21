import React,{useState, useEffect} from 'react'
import styled from 'styled-components'



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
function Workout({workout, dayId}) {
    const [name,setName] = useState(workout.name)
    const [primary,setPrimary] = useState(workout.primary_muscle)
    const [secondary, setSecondary] = useState(workout.secondary_muscle_1)
    const [secondary2, setSecondary2] = useState(workout.secondary_muscle_2)
    const [secondary3, setSecondary3] = useState(workout.secondary_muscle_3)
    const [secondary4, setSecondary4] = useState(workout.secondary_muscle_4)


    function handleButton(e){
        debugger;
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
            r.json().then((newWorkout) => {console.log(newWorkout);
              
              
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
                <H1>{workout.primary_muscle}</H1>
             </TitleDiv>
             
             
            </TopRow>
            <VideoDiv>
                 
             </VideoDiv>
            <button onClick={handleButton} >
             Add
            </button>
            
          </Card>  
        )
    
    
    
    
    
}

export default Workout
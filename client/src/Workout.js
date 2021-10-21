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
function Workout({workout, setName, setPrimary, setSecondary, setSecondary2, setSecondary3, setSecondary4, setActive}) {

    function handleButton(e){
        debugger;
        e.preventDefault();
        setActive(true);
        setName(workout.name)
        setPrimary(workout.primary_muscle)
        setSecondary(workout.secondary_muscle_1)
        setSecondary2(workout.secondary_muscle_2)
        setSecondary3(workout.secondary_muscle_3)
        setSecondary4(workout.secondary_muscle_4)
        
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
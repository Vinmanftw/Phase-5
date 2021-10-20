import React,{useState, useEffect} from 'react'
import styled from 'styled-components'


const SetReps = styled("form")`
display: flex;
flex-flow: column;
width: 12%;
text-align: center;

gap:1%;
`
const Set = styled("div")`
display: flex;
flex-flow: column;
background-color: #2e2e2e;
width: 100%;
padding-top:9%;
padding-bottom:9%;
text-align: center;
align-items: center;


`
const PriorDiv = styled("div")`
display: flex;
text-align: center;
background-color: white;
aspect-ratio: 4/3;
width:81%;
margin: auto;
border:1px #13cbd2 solid;
`

const Prior = styled("h1")`
text-align: center;
width:56%;
margin: auto;
border: 0px;
font-size:25px;
color: black;
font-family: Arial;
`
const NowDiv = styled("div")`
display:flex;
flex-flow: row;
background-color: white;
margin-top:9%;
width:80%;


font-size: 25px;
border: none;
border:1px #13cbd2 solid;
font-family: Arial;
`
const Metric = styled("h1")`
font-size: 25px;
font-family: Arial;
width:44%;
text-align: left;
color:black;
`
const One = styled("div")`
width: 4%;
`
const Now = styled("input")`
text-align: center;
background-color: white;

width:56%;

aspect-ratio: 4/3;
font-size: 25px;
border: none;

font-family: Arial;
`
const RepsDiv = styled("div")`
display:flex;
flex-flow: row;
margin-top:9%;
margin-bottom:9%;
width:98%;
border:1px black solid;
background-color: #2e2e2e;
color: #13cbd2;
border-radius: 5px;
aspect-ratio: 25/5;

`

const Reps = styled("input")`
font-family: Arial;

width:40%;
text-align: right;
border:none;
font-size:12px;
border-radius: 5px;
background-color: #2e2e2e;
color: #13cbd2;

`
const MetricReps = styled("h1")`
font-family: Arial;
font-size: 12px;
width:56%;
text-align: left;
margin:auto;
color: #13cbd2;
`
const UpdateButton = styled("button")`
margin:auto;
font-size:12px;

text-align: center;

border:1px black solid;
background-color: green;
color: black;
border-radius: 5px;
`



function SetCard({ set, runUpdate, setRunUpdate, workout, handleUpdate }) {
    const [prior, setPrior] = useState(set.prior_weight);
    const [now, setNow] = useState(0.0);
    const [runFetch, setRunFetch] = useState(true);
    const [reps, setReps] = useState(set.reps);
    const [curSet,setCurSet] = useState(set);

    function handleConfirm(e){
      e.preventDefault();
      
      
      setPrior(now);
      
      setReps(reps);
      fetch(`/UpdateSet/${curSet.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prior_weight:prior,
          reps
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((set) => {
            console.log(set)
            
            
            
          });
        }
      });
      fetch(`/Sets/${curSet.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((set)=>{
            setCurSet(set);
            console.log(set);
            setPrior(set.prior_weight);
          });
        }
      });
      
    }
    if(runFetch){
      fetch(`/Sets/${set.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((set)=>{
            setCurSet(set);
            console.log(set);
            setPrior(set.prior_weight);
            setReps(set.reps)
          });
        }
      });
      setRunFetch(false);
    }

    
    

    
    
    
    return (
          <SetReps onSubmit={handleConfirm}>
            <Set>
              <PriorDiv><Prior>{set.prior_weight}</Prior><Metric>lbs</Metric></PriorDiv>
              <NowDiv>
                <Now 
                  type="integer"
                  id="now"
                  autoComplete="off"
                  value={now}
                  onChange={(e) => setNow(e.target.value)}
                />
                <Metric>lbs</Metric>
              </NowDiv>
            </Set>
            {/* gap */}
            <RepsDiv>
              <Reps
                type="integer"
                id="reps"
                autoComplete="off"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
              <One></One>
               
              <MetricReps>reps</MetricReps>
            </RepsDiv>
            <UpdateButton type="submit" >Update</UpdateButton>
          </SetReps>
  )
}

export default SetCard
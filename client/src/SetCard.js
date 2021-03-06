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
background-color: #0b0c10;
width: 100%;
padding-top:9%;
padding-bottom:9%;
text-align: center;
align-items: center;


`
const PriorDiv = styled("div")`
display: flex;
text-align: center;
background-color: #66FCF1;
aspect-ratio: 4/3;
width:81%;
margin: auto;
// border:1px #13cbd2 solid;
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
background-color: #45A29E;
margin-top:9%;
width:80%;
padding-top:1.11px;
padding-bottom:1.11px;
padding-left: 0.545px;
padding-right: 0.545px;
font-size: 25px;
border: none;

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
background-color: #45A29E;

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
border-top: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
background-color: #404040;
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
background-color: #404040;
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
font-size: 12px;
margin-top:9%;
margin-bottom:9%;
margin-left:1%;
width:98%;
border-top: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
background-color: green;
color: black;
border-radius: 5px;
aspect-ratio: 25/5;
`



function SetCard({ set, updateSets,setUpdateSets,runUpdate, setRunUpdate, workout, handleUpdate }) {
    const [prior, setPrior] = useState(set.prior_weight);
    const [now, setNow] = useState(set.now_weight);
    const [runFetch, setRunFetch] = useState(true);
    const [reps, setReps] = useState(set.reps);
    const [curSet,setCurSet] = useState(set);
    
    function handleConfirm(e){
      e.preventDefault();
      
      if(now !== 0){
        setPrior(now)
      }
      setNow(0)
    }
    useEffect(() =>{
      
      fetch(`/UpdateSet/${curSet.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prior_weight:prior,
          now_weight:now,
          reps
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((set) => {
            
            setCurSet(set);
            
            
            
          });
        }
      });
    },[prior])
    if(runFetch){
      fetch(`/Sets/${set.id}`,{credentials:'include'}).then((r) => {
        if (r.ok) {
          r.json().then((set)=>{
            setCurSet(set);
            
            // setPrior(set.prior_weight);
            // setReps(set.reps)
            setRunFetch(false);
          });
        }
      });
      
    }

    
    

    
    
    
    return (
          <SetReps onSubmit={handleConfirm}>
            
              <UpdateButton type="submit" >Update</UpdateButton>
           
            <Set>
              <PriorDiv><Prior>{prior}</Prior><Metric>lbs</Metric></PriorDiv>
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
            
          </SetReps>
  )
}

export default SetCard
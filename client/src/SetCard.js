import React,{useState} from 'react'
import styled from 'styled-components'


const SetReps = styled("div")`
display: flex;
flex-flow: column;
width: 12%;
text-align: center;
align-items: center;
gap:1%;
`
const Set = styled("div")`
display: flex;
flex-flow: column;
background-color: #111111;
width: 100%;
padding-top:9%;
padding-bottom:9%;
text-align: center;
align-items: center;


`
const PriorDiv = styled("div")`
display: flex;
text-align: center;
background-color: red;
aspect-ratio: 4/3;
width:81%;
margin: auto;
border:1px black solid;
`

const Prior = styled("h1")`
text-align: center;

margin: auto;
border: 0px;
font-size:26px;
color: black;
font-family: Arial;
`
const Now = styled("input")`
text-align: center;
background-color: blue;
margin-top:9%;
width:78%;
aspect-ratio: 4/3;
font-size: 26px;
border: none;
border:1px black solid;
font-family: Arial;
`
const Reps = styled("input")`
text-align: center;
margin-top:9%;
margin-bottom:9%;
width:95%;
border:1px black solid;
background-color: #2e2e2e;
border-radius: 5px;
`



function SetCard({ set, workout }) {
    const [prior, setPrior] = useState(set.prior_weight);
    const [now, setNow] = useState(0.0);
    const [runFetch, setRunFetch] = useState(true)
    const [reps, setReps] = useState(set.reps);
    const [curSet,setCurSet] = useState(set)
    if(runFetch){
      fetch(`/Sets/${set.id}`).then((r) => {
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
        <SetReps>
            <Set>
              
              <PriorDiv><Prior>{set.prior_weight +" lbs"}</Prior></PriorDiv>
              <Now 
                type="integer"
                id="now"
                autoComplete="off"
                value={now + " lbs"}
                onChange={(e) => setNow(e.target.value)}
              />
            </Set>
            {/* gap */}
            <Reps
              type="integer"
              id="reps"
              autoComplete="off"
              value={reps+" reps"}
              onChange={(e) => setReps(e.target.value)}
            />
        </SetReps>  
  )
}

export default SetCard
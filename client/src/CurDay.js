import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom"
const Week = styled("div")`
display: flex;
flex-flow: row;
justify-content: center;`
function CurDay({ user, setUser,routineId, routine, setRoutine, day, setDay }) {
  
    
    console.log(day);
    if(routine){
      return (
        <div>
          <h1>{day.title}</h1>
          <Week>
            
          </Week>
        </div>
      );
    }
    else
    {
      <div>
        <h1>No Routine Found</h1>
      </div>
    }
      
    
      
       
        
}
      
    
    

    
    

  
export default CurDay;

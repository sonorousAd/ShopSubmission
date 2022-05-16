import React from 'react';
import './Box.css';
// This component handles the creation of each box that contains both the response from the API and the prompt from the user 
export default function Box(props){
    return(
        <> 
            <div id='box'>
              <div id='prompt-div'>
                <span className='box-prints'>Prompt: </span><span id='prompt-output'>{props.usrprmpt}</span>
              </div>
              <div>
                <span className='box-prints'>Response: </span><span id='response'>{props.output}</span>
              </div>
        </div>
      </>    
        )   
}
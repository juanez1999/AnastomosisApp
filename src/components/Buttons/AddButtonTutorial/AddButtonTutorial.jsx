import React from 'react';

export const AddButtonTutorial = ({setNewTutorial}) => {

    const validateState = () =>{
        setNewTutorial(true);
    }
   
    return(
        <div>
            <button onClick={validateState}>+</button>
        </div>
    );
    
}

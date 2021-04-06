import React from 'react';

export const AddButtonLesson = ({setNewLesson}) => {

    const validateState = () =>{
        setNewLesson(true);
    }
   
    return(
        <div>
            <button onClick={validateState}>+</button>
        </div>
    );
    
}

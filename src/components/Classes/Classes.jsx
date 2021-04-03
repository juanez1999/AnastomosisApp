import React from 'react';
import { AddButtonTutorial } from '../Buttons/AddButtonTutorial/AddButtonTutorial';
import { NavBar } from '../NavBar/NavBar';

export const Classes = (params) => {

    return (
        <div>
            <h3>Clases</h3>
            <AddButtonTutorial />
            <NavBar/>
        </div>
    );   
}
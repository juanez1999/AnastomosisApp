import React from 'react';
import { Task } from './Task/Task';

export const Homework = () => {
    return(
        <div className="homework outer-pad">
            <div className="homework__active">
                <h3>Tareas actuales</h3>
                <Task/>
                <Task/>
            </div>
            <div className="homework__finished">
                <h3>Tareas finalizadas</h3>
                <Task style={'task--desactived'}/>
                <Task style={'task--desactived'}/>
            </div>
        </div>
    )
}

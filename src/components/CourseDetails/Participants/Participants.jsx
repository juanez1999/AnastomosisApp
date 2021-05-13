import React from 'react';
import { CardParticipant } from './CardParticipant/CardParticipant';

export const Participants = (params) => {
    return(
        <div className="participants outer-pad">
            <div className="participants__teacher">
                <h3>Docente</h3>
                <CardParticipant/>
            </div>
            <div className="participants__students">
                <div className="participants__studentsHeader">
                    <h3>Estudiantes</h3>
                    <div className="participants__studentsHeaderNotes">
                        <img src={process.env.PUBLIC_URL +'/resources/icon_upload.svg'} alt="" />
                        <p>Generar reporte de notas</p>
                    </div>
                </div>
                <CardParticipant/>
                <CardParticipant/>
                <CardParticipant/>
                <CardParticipant/>
                <CardParticipant/>
                <CardParticipant/>
            </div>
        </div>
    )
}

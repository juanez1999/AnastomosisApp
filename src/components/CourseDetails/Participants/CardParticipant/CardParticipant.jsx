import React from 'react';

export const CardParticipant = (params) => {
    return (
        <div className="cardParticipant">
            <img src={process.env.PUBLIC_URL +'/resources/student.jpg'} alt="" />
            <div className="cardParticipant__info">
                <h4>María Camila Pérez</h4>
                <p>camiperez04@gmail.com</p>
            </div>
        </div>
    )
}

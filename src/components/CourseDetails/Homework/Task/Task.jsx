import React from 'react';

export const Task = ({style}) => {
    return (
    <div className={`task ${style}`}>
        <img src={process.env.PUBLIC_URL +'/resources/icon_homework.svg'} alt="" />
        <div className="task__info">
            <p>Puesto de trabajo</p>
            <p>Publicada por mi el 25/06/2021</p>
            <p>Entregado por 9 personas</p>
        </div>
    </div>)
}

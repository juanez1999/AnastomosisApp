import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

export const Course = ({title,state,participants,idCourse}) => {

    let history = useHistory();

    const goToLessonDetails = (idCourse) => {
        history.push('/courseDetails/'+idCourse);
    }

    return(
        <Fragment>
            <div className="course" onClick={() => goToLessonDetails(idCourse)} style={{background: `linear-gradient(0deg, #008799 -31.35%, rgba(153, 207, 214, 0.401042) 202.53%, rgba(255, 255, 255, 0) 359.13%), url(${process.env.PUBLIC_URL}/resources/imgCourse.jpg)`}}>
                <div className="course__info">
                    <h3>{title}</h3>
                    <div className="course__infoState">
                        <p>En curso:</p>
                        <p>Tarea 2, Material de sutura</p>
                    </div>
                </div>
                <div className="course__participants">
                    <img src="" alt=""/>
                    <p>11 participantes</p>
                </div>
            </div>
        </Fragment>
    )
}

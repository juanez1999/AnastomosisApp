import React from 'react';
import { useHistory } from "react-router-dom";

export const ItemClasses = ({lesson}) => {

    let history = useHistory();

    const goToLessonDetails = (id) => {
        history.push('/lessonDetails/'+id);
    }
    return (
        <div onClick={() => goToLessonDetails(lesson.id)}>
            <p>{lesson.data().title}</p>
            <p>{lesson.data().description}</p>
        </div>
    )
}

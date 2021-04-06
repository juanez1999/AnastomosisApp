import React from 'react';

export const ItemClasses = ({lesson}) => {
    return (
        <div>
            <p>{lesson.title}</p>
            <p>{lesson.description}</p>
        </div>
    )
}

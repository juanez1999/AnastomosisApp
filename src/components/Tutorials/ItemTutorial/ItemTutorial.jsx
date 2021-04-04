import React from 'react';

export const ItemTutorial = ({item}) => {
    return (
        <div>
            <p>{item.title}</p>
            <p>{'Fecha de publicación: ' +item.date}</p>
            <p>{item.description}</p>
        </div>
    )
}

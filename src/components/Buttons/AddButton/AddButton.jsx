import React, { Fragment } from 'react';

export const AddButton = ({setAddElement}) => {

    const addElement = () => {
        setAddElement(true);
    }

    return(
        <Fragment>
            <div className="addBtn">
                <button className="btn--rounded" onClick={addElement}>+</button>
            </div>
        </Fragment>        
    )
}

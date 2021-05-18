import React, { Fragment } from 'react';

export const AddButton = ({handleClickOpen}) => {

    const addElement = () => {
        handleClickOpen();
    }

    return(
        <Fragment>
            <div className="addBtn">
                <button className="btn--rounded" onClick={addElement}>+</button>
            </div>
        </Fragment>        
    )
}

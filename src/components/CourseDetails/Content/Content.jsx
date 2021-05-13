import React, { Fragment } from 'react';

export const Content = ({unit,description,date}) => {
    return(<Fragment>
        <div className="content outer-pad">
            <p className="content__title"><b>Unidad 1.</b>Preparación y conocimientos previos (12min)</p>
            <p className="content__date">Última modificación realizada el 25/06/2021</p>
        </div>
    </Fragment>)
}

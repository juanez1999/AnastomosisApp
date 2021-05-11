import React from 'react';
import { Link } from 'react-router-dom';

export const AddElementView = () => {
    return(
        <div className="addElement outer-pad">
            <div className="addElement__header">
                <p>+</p>
                <h3>Agregar elemento del curso</h3>
            </div>
            <div className="addElement__options">
                <Link className="addElement__optionsItem" to="/classes">
                    <img src={process.env.PUBLIC_URL+'/resources/icon_homework.svg'} alt=""/>
                    <p>Tarea</p>
                </Link>
                <Link className="addElement__optionsItem">
                    <img src={process.env.PUBLIC_URL+'/resources/icon_folder.svg'} alt=""/>
                    <p>Unidad</p>
                </Link>
                <Link className="addElement__optionsItem">
                    <img src={process.env.PUBLIC_URL+'/resources/icon_camera.svg'} alt=""/>
                    <p>Contenido</p>
                </Link>
            </div>
        </div>
    )
}

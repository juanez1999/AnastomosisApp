import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (params) => {
    return (
        <div className="NavBar">
            <Link className="NavBar__link" to="/home">
                <div className="NavBar__home">
                    <img src="../resources/home.svg" alt=""/>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link className="NavBar__link" to="/tutorials">
                <div className="NavBar__tutorials">
                    <img src="../resources/tutorials.svg" alt=""/>
                    <p>Tutoriales</p>
                </div>
            </Link>
            <Link className="NavBar__link" to="/classes">
                <div className="NavBar__classes">
                    <img src="../resources/classes.svg" alt=""/>
                    <p>Clases</p>
                </div>
            </Link>
            <Link className="NavBar__link" to="/profile">
                <div className="NavBar__profile">
                    <img src="../resources/profile.svg" alt=""/>
                    <p>Perfil</p>
                </div>
            </Link>
        </div>
    );
}

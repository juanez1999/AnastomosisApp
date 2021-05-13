import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (params) => {
    return (
        <div className="NavBar">
            <Link className="NavBar__link" to="/home">
                <div className="NavBar__home">
                    <img src="../resources/home.svg" alt=""/>
                </div>
            </Link>
            <Link className="NavBar__link" to="/tutorials">
                <div className="NavBar__notifications">
                    <img src="../resources/notifications.svg" alt=""/>
                </div>
            </Link>
            {/* <Link className="NavBar__link" to="/classes">
                <div className="NavBar__classes">
                    <img src="../resources/classes.svg" alt=""/>
                </div>
            </Link> */}
            <Link className="NavBar__link" to="/profile">
                <div className="NavBar__profile">
                    <img src="../resources/profile.svg" alt=""/>
                </div>
            </Link>
        </div>
    );
}

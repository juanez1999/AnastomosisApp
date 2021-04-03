import React from 'react';
import { Link } from 'react-router-dom';

const BeginSession = (params) => (
    <div className="BeginSession">
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login">
            <button>Iniciar Sesión</button>
        </Link>
        <p>o puedes crear una cuenta gratis</p>
        <Link to="/register">
            <button>Registrarse</button>
        </Link>
    </div>
);

export default BeginSession;

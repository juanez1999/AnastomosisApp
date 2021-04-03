import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";


const Login = ({setUser}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    let history = useHistory();

    const sendData = e => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in
            setUser(user);
            history.push('/home');
        })
        .catch((error) => {
            //var errorCode = error.code;
            //var errorMessage = error.message;
        });   
    }
    
    return (
        <div className="Login">
            <div className="Login__Info">
                <h2>Bienvenido de nuevo</h2>
                <p>Coloca tu información para volver a tu cuenta</p>
            </div>
            <div className="Login__Data">
                <div className="Login__DataInputs">
                    <form
                        onSubmit={sendData}
                    >
                        <input type="text" 
                            placeholder="Correo" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" 
                            placeholder="Contraseña" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="Login__DataButtons">
                            <input type="submit" value="Iniciar Sesión"/>
                            <button>Google</button>
                        </div>
                    </form>
                </div>
                <Link to="/register">
                    <p>Registrarse</p>
                </Link>
            </div>
        </div>
    );
}

export default Login;

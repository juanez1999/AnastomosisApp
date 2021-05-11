import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

const Register = ({setUser}) => {

    let history = useHistory();
    var db = firebase.firestore();
    var rol;

    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');
    const [professor,setProfessor] = useState('');
    const [student,setStudent] = useState('');

    //console.log(professor);

    const sendData = e => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user.user.uid);
            setUser(user);
            registerUserDB(user);
        })
        .catch((error) => {
          //var errorCode = error.code;
          //var errorMessage = error.message;
        });
    }
    
    rol = professor  ? 'Profesor' : '';
    rol = student  ? 'Estudiante' : '';

    const registerUserDB = (user) => { 
        db.collection("users").doc(user.user.uid).set({
            name: name,
            lastName: lastName,
            id: user.user.uid,
            email: email,
            rol: rol
        })
        .then((docRef) => {
            console.log("Document successfully written!");
            history.push('/home');
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    };
        
    return (
        <Fragment>
            <div className="Register">
                <img src="../../../public/resources/icon_arrowLeft.svg" alt=""/>
                <div className="Register__Info">
                    <h2>Registro</h2>
                </div>
                <div className="Register__Data">
                    <div className="Register__DataInputs">
                        <form onSubmit={sendData}>
                            <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_profile.svg)`}}>
                                {/* <img src={process.env.PUBLIC_URL +'/resources/icon_profile.svg'} alt=""/> */}
                                <input type="text" 
                                    placeholder="Nombre" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_profile.svg)`}}>
                                <input type="text" 
                                    placeholder="Apellido" 
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_message.svg)`}}>
                                <input type="email"
                                    placeholder="Correo" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_password.svg)`}}>
                                <input type="password"
                                    placeholder="Contraseña" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_password.svg)`}}>
                                <input type="password"
                                    placeholder="Repetir contraseña" 
                                    value={repeatPassword}
                                    onChange={e => setRepeatPassword(e.target.value)}
                                />
                            </div>
                            <input type="checkbox"
                                placeholder="Contraseña" 
                                value={professor}
                                onChange={e => setProfessor(e.target.checked)}
                                id="professor"
                            /><label htmlFor="professor">Profesor</label>
                            <input type="checkbox" 
                                placeholder="Contraseña" 
                                value={student}
                                onChange={e => setStudent(e.target.checked)}
                                id="student"
                            /><label htmlFor="student">Estudiante</label>
                            <div className="Register__DataButtons">
                                <input className="btn" type="submit" value="Registrarse"/>
                            </div>
                        </form>
                    </div>
                    <div className="Register__DataAlredy">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to="/login">
                            <p>Iniciar Sesión</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Fragment>
        
    );

}

export default Register;

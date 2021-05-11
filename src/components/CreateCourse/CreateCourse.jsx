import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import shortid  from 'shortid';
import { userContext } from '../../utils/userContext';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const CreateCourse = () => {

    const [nameCourse,setNameCourse] = useState('');
    const [descriptionCourse,setDescriptionCourse] = useState('');
    const [codeCourse,setCodeCourse] = useState('');
    let history = useHistory();

    const { user } = useContext(userContext);
    const userID = user.user.uid;

    const generateCode = () => {
        setCodeCourse(shortid.generate());
    }

    const createCourse = () => {
        if(!userID) return;
        var db = firebase.firestore(); 
        db.collection("users").doc(userID).collection('courses').doc(codeCourse).set({
            nameCourse: nameCourse,
            descriptionCourse: descriptionCourse,
            codeCourse: codeCourse,
            id: uuidv4()
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        history.push('/home');
    }

    return(
        <div className="newCourse outer-pad">
            <div className="newCourse__header">
                <div className="newCourse__headerClose">
                    <img src={process.env.PUBLIC_URL +'/resources/icon_close.svg'} alt=""/>
                    <Link to='/home'>Cancelar</Link>
                </div>
                <Link onClick={createCourse}>Crear</Link>
            </div>
            <div className="newCourse__title">
                <h3>Nuevo Curso</h3>
                <p>Docente</p>
            </div>
            <div className="newCourse__details">
                <div className="inputField inputField--hasImg" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_edit.svg)`}}>
                    <input type="text" name="" id="" 
                    placeholder="Nombre del curso"              
                    value={nameCourse}
                    onChange={e => setNameCourse(e.target.value)}/>
                </div>
                <div className="inputField inputField--hasImg inputField--textarea" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/icon_description.svg)`}}>
                    <textarea type="text" name="" id="" 
                    placeholder="Descripción del curso"              
                    value={descriptionCourse}
                    onChange={e => setDescriptionCourse(e.target.value)}/>
                </div>
            </div>
            <div className="newCourse__participants">
                <div className="newCourse__participantsHeader">
                    <h4>Agregar participantes</h4>
                    <p>Comparta el siguiente código con todos los participantes para que puedan ingresar al curso</p>
                </div>
                <div className="newCourse__participantsCode">
                    <div className="inputField inputField--notImg">
                        <input type="text" name="" id="" 
                        placeholder="Código"              
                        value={codeCourse}
                        onChange={e => setCodeCourse(e.target.value)}/>
                    </div>
                    <button className="btn btn--small" onClick={generateCode}>Generar</button>
                </div>
            </div>
        </div>
    )
}

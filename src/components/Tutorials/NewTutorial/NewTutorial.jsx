import React,{ useState, useContext } from 'react';
import firebase from 'firebase';
import { userContext } from '../../../utils/userContext';

export const NewTutorial = () => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const { user } = useContext(userContext);
    console.log(user);
    
    const date = new Date();
    const currentDate = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
    var db = firebase.firestore();

    const sendData = e => {
        e.preventDefault();

        db.collection("users").doc(user.user.uid).collection('tutorials').add({
            title: title,
            description: description,
            date: currentDate
        })
        .then((docRef) => {
            console.log("Document successfully written!", docRef.id);
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <div>
            <h3>Nuevo tutorial</h3>
            <button >Presiona para grabar un tutorial</button>
            <form action="" onSubmit={sendData}>
                <input type="text" 
                    placeholder="Nombre del tutorial" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}>
                </input>
                <input type="text" 
                    placeholder="Descripción" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </input>
                <select name="select">
                    <option disabled selected>Selecciona una clase</option>
                    <option></option>
                </select>
                <button type="submit">Finalizar</button>
            </form>
        </div>
    );
}

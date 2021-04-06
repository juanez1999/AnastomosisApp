import React,{ useState, useContext } from 'react';
import firebase from 'firebase';
import { userContext } from '../../../utils/userContext';

export const NewLesson = () => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const { user } = useContext(userContext);
    
    const date = new Date();
    const currentDate = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
    var db = firebase.firestore();

    const sendData = e => {
        e.preventDefault();
        setDescription('');
        setTitle('');
        
        db.collection("users").doc(user.user.uid).collection('lessons').add({
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
            <h3>Nueva clase</h3>
            <form action="" onSubmit={sendData}>
                <input type="text" 
                    placeholder="Nombre de la clase" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}>
                </input>
                <input type="text" 
                    placeholder="Descripción" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </input>
                <button type="submit">Finalizar</button>
            </form>
        </div>
    );
}

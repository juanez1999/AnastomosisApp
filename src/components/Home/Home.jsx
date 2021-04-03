import React, { useState, useContext } from 'react';
import { NavBar } from '../NavBar/NavBar';
import firebase from 'firebase';
import { userContext } from '../../utils/userContext';

export const Home = () => {

    const { user } = useContext(userContext);
    const [name,setName] = useState('');
    const userID = user.user.uid;
    
    React.useEffect(()=>{
        const db = firebase.firestore();
        const docRef = db.collection("users").doc(userID);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setName(doc.data().name);
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });    
    },[userID])
    
    return (
        <div className="Home">
            <h3>{name}</h3>
            <NavBar/>
        </div>
    );   
}

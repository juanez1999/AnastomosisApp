import React, { useState,useContext} from 'react';
import { userContext } from '../../utils/userContext';
import { AddButtonTutorial } from '../Buttons/AddButtonTutorial/AddButtonTutorial';
import { NavBar } from '../NavBar/NavBar';
import { EmptyTutorials } from './EmptyTutorials/EmptyTutorials';
import { NewTutorial } from './NewTutorial/NewTutorial';
import firebase from 'firebase';

export const Tutorials = () => {

    const { user } = useContext(userContext);

    const [existTutorials,setExistTutorials] = useState(false);
    const [newTutorial,setNewTutorial] = useState(false);
    const userID = user.user.uid;
    
    React.useEffect(()=>{
        if(!userID) return;
        var db = firebase.firestore();    
        db.collection("users").doc(userID).collection('tutorials').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }, [userID]);

    if(existTutorials){
        return(
            <div>
                <h3>Tutoriales</h3>
                <AddButtonTutorial setNewTutorial={setNewTutorial}/>
                <NavBar />
            </div>
        );
    }
    if(newTutorial){
        return(
            <div>
                <h3>Tutoriales</h3>
                <NewTutorial />
                <NavBar />
            </div>
        );
    }
    return(
        <div>
            <h3>Tutoriales</h3>
            <EmptyTutorials />
            <AddButtonTutorial setNewTutorial={setNewTutorial}/>
            <NavBar />
        </div>
    );
}

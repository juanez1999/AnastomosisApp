import React, { useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import firebase from 'firebase';
import { userContext } from '../../utils/userContext';
import { NavBar } from '../NavBar/NavBar';

export const LessonDetails = () => {

    const { id } = useParams();
    const { user } = useContext(userContext);
    const [lessonDetails,setLessonDetails] = useState([]);

    const userID = user.user.uid;
    const idSearch = id;

    React.useEffect(()=>{
        if(!userID) return;
        if(!idSearch) return;
        var db = firebase.firestore(); 
        let lessonTemp = [];   
        db.collection("users").doc(userID).collection('lessons').doc(idSearch).get()
        .then((doc)=> {
            if (doc.exists) {
                lessonTemp.push(doc.data());
            } else {
                console.log("No such document!");
            }
            setLessonDetails(lessonTemp);
        })

    }, [userID,idSearch]);

    return(
        <div>
            {lessonDetails.map((lesson) =>{
                return(
                    <h3>{lesson.title}</h3>
                )
            })}
            <NavBar/>
        </div>
    )
}

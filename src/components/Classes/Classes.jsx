import React, {useContext,useState} from 'react';
import { userContext } from '../../utils/userContext';
import { EmptyClasses } from '../Classes/EmptyClasses/EmptyClasses';
import { NavBar } from '../NavBar/NavBar';
import firebase from 'firebase';
import { ItemClasses } from './ItemClasses/ItemClasses';
import { NewLesson } from './NewLesson/NewLesson';
import { AddButtonLesson } from '../Buttons/AddButtonLesson/AddButtonLesson';

export const Classes = () => {

    const { user } = useContext(userContext);
    const [classes,setClasses] = useState([]);
    const [existClasses,setExistClasses] = useState(false);
    const [newLesson,setNewLesson] = useState(false);

    const userID = user.user.uid;

    React.useEffect(()=>{
        if(!userID) return;

        var db = firebase.firestore();    
        let lessonsTemp = [];
        db.collection("users").doc(userID).collection('lessons').get()
        .then((querySnapshot) => {
            lessonsTemp.pop();
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                lessonsTemp.push(doc.data());
                setExistClasses(true);
                //console.log(doc.id, " => ", doc.data());
            });
            setClasses(lessonsTemp);
        })

    }, [userID]);

    return (
        <div>
            <h3>Clases</h3>
            {existClasses && 
                (<div>
                    {classes.map((lesson,index)=>{
                        return(
                            <ItemClasses key={index} lesson={lesson}/>
                            )
                        })}
                </div>)
            }
            {existClasses === false &&
                (<div>
                    <EmptyClasses />
                </div>)
            }
            <AddButtonLesson setNewLesson={setNewLesson} />
            <NavBar/>
            {newLesson && 
                (<div>
                    <NewLesson />
                </div>)
            }
        </div>
    );   
}
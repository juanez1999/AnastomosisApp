import React, { useState,useContext} from 'react';
import { userContext } from '../../utils/userContext';
import { AddButtonTutorial } from '../Buttons/AddButtonTutorial/AddButtonTutorial';
import { NavBar } from '../NavBar/NavBar';
import { EmptyTutorials } from './EmptyTutorials/EmptyTutorials';
import { NewTutorial } from './NewTutorial/NewTutorial';
import firebase from 'firebase';
import { ItemTutorial } from './ItemTutorial/ItemTutorial';

export const Tutorials = () => {

    const { user } = useContext(userContext);

    const [existTutorials,setExistTutorials] = useState(false);
    const [newTutorial,setNewTutorial] = useState(false);
    const [tutorials,setTutorials] = useState([]);

    const userID = user.user.uid;
    React.useEffect(()=>{
        if(!userID) return;

        var db = firebase.firestore();    
        let tutorialsTemp = [];
        db.collection("users").doc(userID).collection('tutorials').get()
        .then((querySnapshot) => {
            tutorialsTemp.pop();
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                tutorialsTemp.push(doc.data());
                setExistTutorials(true);
                //console.log(doc.id, " => ", doc.data());
            });
            setTutorials(tutorialsTemp);
        })

    }, [userID,tutorials]);

    return(
        <div>
            <h3>Tutoriales</h3>
            {existTutorials && 
                (<div>
                    {/* <h3>Tutoriales</h3> */}
                    {tutorials.map((item)=>{
                        return(
                            <ItemTutorial item={item}/>
                            )
                        })}
                        {/* <AddButtonTutorial setNewTutorial={setNewTutorial}/>
                        <NavBar /> */}
                </div>)
            }
            {existTutorials === false &&
                (<div>
                    <EmptyTutorials />
                </div>)
            }
            <AddButtonTutorial setNewTutorial={setNewTutorial}/>
            <NavBar />
            
            {newTutorial && 
                (<div>
                    {/* <h3>Tutoriales</h3> */}
                    <NewTutorial />
                    {/* <NavBar /> */}
                </div>)
            }
            
        </div> 
    );
}

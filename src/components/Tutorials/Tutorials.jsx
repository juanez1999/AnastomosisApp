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

    const userID = user?.user?.uid;

    React.useEffect(()=>{
        if(!userID) return;

        var db = firebase.firestore();    
        const unsubscribe =  db.collection("users").doc(userID).collection('tutorials').onSnapshot((querySnapshot) => {
            let tutorialsTemp = [];
            querySnapshot.forEach((doc) => {
                tutorialsTemp.push(doc.data());
                setExistTutorials(true);
            });
            setTutorials(tutorialsTemp);
        });

        return () => {
            console.log('component destroyed');
            unsubscribe();
        }

    }, [userID]);

    return(
        <div>
            <h3>Tutoriales</h3>
            {existTutorials && 
                (<div>
                    {/* <h3>Tutoriales</h3> */}
                    {tutorials.map((item,index)=>{
                        return(
                            <ItemTutorial  key={index} item={item}/>
                            )
                        })}
                        {/* <AddButtonTutorial setNewTutorial={setNewTutorial}/>
                        <NavBar /> */}
                </div>)
            }
            {tutorials.length === 0 &&
                (<div>
                    <EmptyTutorials />
                </div>)
            }
            <AddButtonTutorial setNewTutorial={setNewTutorial}/>
            <NavBar />
            
            {newTutorial && 
                (<div>
                    <NewTutorial />
                </div>)
            }
            
        </div> 
    );
}

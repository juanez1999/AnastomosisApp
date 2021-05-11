import React, { Fragment, useState, useContext } from 'react';
import { NavBar } from '../NavBar/NavBar';
import firebase from 'firebase';
import { userContext } from '../../utils/userContext';
import { Link } from 'react-router-dom';
import { Course } from '../Course/Course';

export const Home = () => {

    const { user } = useContext(userContext);
    const [name,setName] = useState('');
    const [search,setSearch] = useState('');
    const [courses,setCourses] = useState([]);

    const userID = user?.user?.uid;
    
    React.useEffect(()=>{
        if(!userID) return;
        const db = firebase.firestore();
        const docRef = db.collection("users").doc(userID);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setName(doc.data().name);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });   

        const unsubscribe = db.collection("users").doc(userID).collection('courses').onSnapshot((querySnapshot) => {
            let coursesTemp = []; 
            querySnapshot.forEach((doc) => {
                coursesTemp.push(doc.data());
            });
            setCourses(coursesTemp);
        });

        return () => {
            console.log('component destroyed');
            unsubscribe();
        }
    },[userID])
    
    return (
        <Fragment>
            <div className="home outer-pad">
                <img src={process.env.PUBLIC_URL +'/resources/logo.svg'} alt=""/>
                <div className="home__info">
                    <div className="home__infoData">
                        <h3>Bienvenido,</h3>
                        <h3>Dr. {name}</h3>
                    </div>
                    <p>Docente</p>
                </div>
                <div className="inputField inputField--hasImg inputField--filled">
                    <input type="text" name="" id="" 
                    placeholder="Buscar"              
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
                </div>
                <div className="home__courses">
                    <div className="home__coursesHeader">
                        <h3>Mis cursos</h3>
                        <Link to="/nuevoCurso">
                            + Agregar nuevo curso
                        </Link>
                    </div>
                    <div className="home__coursesList">
                    {courses.map((course) =>{
                        return(
                            <Course key={course.id} title={course.nameCourse} idCourse={course.codeCourse}/>
                        )
                    })}
                    </div>
                </div>
            </div>
            <NavBar/>
        </Fragment>
    );   
}

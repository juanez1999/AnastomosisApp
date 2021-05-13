import React, { useState, useContext, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { useParams } from "react-router-dom";
import { userContext } from '../../utils/userContext';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { AddButton } from '../Buttons/AddButton/AddButton';
import { AddElementView } from '../AddElementView/AddElementView';
import { Novelty } from './Novelty/Novelty';
import { Content } from './Content/Content';
import { Homework } from './Homework/Homework';
import { Participants } from './Participants/Participants';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const CourseDetails = () => {

    const { id } = useParams();
    const { user } = useContext(userContext);
    const userID = user?.user?.uid;
    const idSearch = id;

    const [courseDetails,setCourseDetails] = useState([]);
    const [addElement,setAddElement] = useState(false);
    const [novelty,setNovelty] = useState(true);
    const [content,setContent] = useState(false);
    const [homework,setHomework] = useState(false);
    const [participants,setParticipants] = useState(false);
    const [tabValue,setTabValue] = useState('');

    const handleChangeTab = (func,value) => {
        setTabValue(value);
    }

    const toggleNovelty = () => {
        setContent(false);
        setNovelty(true);
        setHomework(false);
        setParticipants(false);
    }

    const toggleContent = () => {
        setContent(true);
        setNovelty(false);
        setHomework(false);
        setParticipants(false);
    }

    const toggleHomework = () => {
        setContent(false);
        setNovelty(false);
        setHomework(true);
        setParticipants(false);
    }

    const toggleParticipants = () => {
        setContent(false);
        setNovelty(false);
        setHomework(false)
        setParticipants(true);
    }
    React.useEffect(()=>{
        if(!userID) return;
        if(!idSearch) return;
        var db = firebase.firestore(); 
        db.collection("users").doc(userID).collection('courses').doc(idSearch).get()
        .then((doc)=> {
            if (doc.exists) {
                setCourseDetails(doc.data());
            } else {
                console.log("No such document!");
            }
        })
    }, [userID,idSearch]);

    return(
        <div className="courseDetails">
            <div className="courseDetails__header outer-pad" style={{background: `linear-gradient(0deg, #008799 -31.35%, rgba(153, 207, 214, 0.401042) 202.53%, rgba(255, 255, 255, 0) 359.13%), url(${process.env.PUBLIC_URL}/resources/imgCourse.jpg)`}}>
                <div className="courseDetails__headerLogo">
                    <img src={process.env.PUBLIC_URL +'/resources/logo_white.svg'} alt=""/>
                    <div>
                        <img src={process.env.PUBLIC_URL +'/resources/icon_editWhite.svg'} alt=""/>
                        <a href="">Editar</a>
                    </div>
                </div>
                <div className="courseDetails__headerInfo">
                    <h3>{courseDetails.nameCourse}</h3>
                    <div className="courseDetails__headerInfoState">
                        <p>En curso:</p>
                        <p>Tarea 2, material de sutura</p>
                    </div>
                    <div className="courseDetails__headerInfoCode">
                        <p>Código del curso:</p>
                        <p>{courseDetails.codeCourse}</p>
                    </div>
                    <div className="courseDetails__headerInfoParticipants">
                        <p>11 Participantes</p>
                    </div>
                </div>
            </div>
            <div className="courseDetails__nav">
                {/* <Link onClick={toggleNovelty}>Novedades</Link>
                <Link onClick={toggleContent}>Contenido</Link>
                <Link onClick={toggleHomework}>Tareas</Link>
                <Link onClick={toggleParticipants}>Participantes</Link> */}
                <Tabs value={tabValue} onChange={handleChangeTab} aria-label="simple tabs example">
                    <Tab value={'novelty'} label="Novedades"/>
                    <Tab value={'content'}label="Contenidos"/>
                    <Tab value={'homework'} label="Tareas"/>
                    <Tab value={'participants'} label="Participantes"/>
                </Tabs>
            </div>
            {novelty &&  
                (<Novelty/>) 
            }

            {content &&  
                (<div className="courseDetails__content">
                    <Content/>
                    <Content/>
                </div>) 
            }

            {homework &&  
                (<Homework/>) 
            }

            {participants &&  
                (<Participants/>) 
            }
            <AddButton setAddElement={setAddElement}/>
            <NavBar/>
            {/* {addElement === false && 
                (<Fragment>
                </Fragment>)
            } */}
            {addElement && 
                (ReactDOM.createPortal(<AddElementView/>,document.body))
            }
        </div>
    )
}

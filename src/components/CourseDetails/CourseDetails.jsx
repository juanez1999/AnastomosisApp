import React, { useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { userContext } from '../../utils/userContext';
import firebase from 'firebase';
import { NavBar } from '../NavBar/NavBar';
import { AddButton } from '../Buttons/AddButton/AddButton';
import { AddElementView } from '../AddElementView/AddElementView';
import { Novelty } from './Novelty/Novelty';
import { Content } from './Content/Content';
import { Homework } from './Homework/Homework';
import { Participants } from './Participants/Participants';
import { makeStyles, createStyles, Tab, Tabs } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const CourseDetails = () => {

    const { id } = useParams();
    const { user } = useContext(userContext);
    const userID = user?.user?.uid;
    const idSearch = id;

    const [courseDetails,setCourseDetails] = useState([]);
    const [tabValue,setTabValue] = useState('novelty');
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const handleChangeTab = (func,value) => {
        setTabValue(value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
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
                <Tabs value={tabValue} onChange={handleChangeTab} className="courseDetails__navTabs" classes={{root: classes.tabs}}>
                    <Tab value={'novelty'} label="Novedades"/>
                    <Tab value={'content'}label="Contenidos"/>
                    <Tab value={'homework'} label="Tareas"/>
                    <Tab value={'participants'} label="Participantes"/>
                </Tabs>
            </div>
            
            {
                {
                'novelty': <Novelty/>,
                'content': <Content />,
                'homework': <Homework />,
                'participants': <Participants />
                }[tabValue]
            }
            <AddButton handleClickOpen={handleClickOpen}/>
            <NavBar/>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className="portalAddElement"
            >
                <AddElementView/>
            </Dialog>
        </div>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        tabs: {
            letterSpacing: '0',
            fontSize: '8px',
            padding: '0px 25px'
        }
    })
);
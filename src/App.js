import React, {Fragment,useState} from 'react';
import Begin from './components/Begin/Begin'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import firebase from 'firebase';
import { Home } from './components/Home/Home';
import { Tutorials } from './components/Tutorials/Tutorials';
import { Classes } from './components/Classes/Classes';
import { Profile } from './components/Profile/Profile';
import { userContext } from './utils/userContext';
import { LessonDetails } from './components/LessonDetails/LessonDetails';

var firebaseConfig = {
    apiKey: "AIzaSyDpLcgdcaf-N-T3rxfxDOOT_0hz2WYUuLA",
    authDomain: "anastomosis-127e8.firebaseapp.com",
    projectId: "anastomosis-127e8",
    storageBucket: "anastomosis-127e8.appspot.com",
    messagingSenderId: "258481329588",
    appId: "1:258481329588:web:f64526cd1a835cb18e0ee1",
    measurementId: "G-7YWDFF5VCT"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
  firebase.analytics();
  
function App() {

  const [user,setUser] = useState('');

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user, error) => {
      if(user) setUser({ user });
    })
  }, []);

  return (
    <Fragment>
      <userContext.Provider value={{user}}>
        <Router>
            <Route path="/" exact component={Begin} />
            <Route path="/login" render={()=>{
                return <Login setUser={setUser}/> 
            }}/>
            <Route path="/register" render={()=>{
                return <Register setUser={setUser}/> 
            }}/>
            <Route path="/home" render={()=>{
                return <Home /> 
            }}/>
            <Route path="/tutorials" render={()=>{
                return <Tutorials /> 
            }}/>
            <Route path="/classes" render={()=>{
                return <Classes /> 
            }}/>
            <Route path="/profile" render={()=>{
                return <Profile /> 
            }}/>
            <Route exact path="/lessonDetails/:id" component={LessonDetails} />
        </Router>
      </userContext.Provider>
    </Fragment>
  );
}

export default App;

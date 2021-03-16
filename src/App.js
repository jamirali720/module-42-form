import './App.css';
import {useState} from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase-config';
import SignIn from './Component/Second/SignIn';
import Form from './Component/Form/Form';
import FormSystemTwo from './Component/form_system_two/FormSystemTwo';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
      isSignedIn : false,
      name : '',
      email : '',
      photo : ''
      
  })
const  provider = new firebase.auth.GoogleAuthProvider();
const handleSignIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const {displayName, email, photoURL} = result.user;
      const signedInUser = {
            isSignedIn : true,
            name : displayName,
            email : email,
            photo : photoURL
      }
      setUser(signedInUser)
        console.log(displayName, email, photoURL);
      // const credential = result.credential;     
      // const token = credential.access.Token;      
      // const user = result.user;
     
    })
    .catch((error) => {
      console.log(error.message);
      // const errorCode = error.code;
      // const errorMessage= error.message;
      // const email = error.email;
      // const credential = error.credential;
    })
}
const handleSignOut = () => {
    firebase.auth()
    .signOut()
    .then(() => {
        const signOutUser ={
          isSignedIn : false,
          name : '',
          email : '',
          photo : ''
        }
        setUser(signOutUser)
         

    }).catch((err) => {
      
    })
}
  return (
    <div className="App">
        {
          user.isSignedIn ?  <button onClick={handleSignOut}>Sign out</button>:
          <button onClick={handleSignIn}>Sign in</button>
        }
        {
          user.isSignedIn && <div>
              <p>Welcome  {user.name}</p> 
              <p> Your Email  {user.email}</p> 
              <img src={user.photo} alt=""/>
          </div>
        }
        <SignIn></SignIn>
        <Form></Form>
        <FormSystemTwo></FormSystemTwo>
    </div>
  );
}

export default App;

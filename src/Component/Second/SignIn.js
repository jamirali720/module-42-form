import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from '../../firebase-config';

// firebase.initializeApp(firebaseConfig)

var provider = new firebase.auth.GoogleAuthProvider();
const SignIn = () => {
    const [user, setUser] = useState({
         isSignedIn : false,
         name: '',
         email : '',
         photo : ''
    })
 
    const handleSignIn =() => {
       firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser ={
                isSignedIn : true,
                name : displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
        })     
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(() =>{
            const signOutUser = {
                isSignedIn : false,
                name : '',
                email : '',
                photo : ''
               }
               setUser(signOutUser)
        })
    }
         
    return (
        <div>
            { 
                user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleSignIn}>SignIn</button>
            }
            {
               user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your Email {user.email}</p>
                    <img src={user.photo} alt=""/>
                </div>
            }
        </div>
    );
};

export default SignIn;
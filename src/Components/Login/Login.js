import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
// import google from '../../images/logos/google.png';
import './Login.css';

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // google signin
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedUser = { name: displayName, email }
            setLoggedInUser(signedUser);
            storeAuthToken();

        }).catch(function (error) {
            var errorCode = error.code;
            console.log(errorCode);
        });
    }

    //to load/ store individual data
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken); // store data in sessionStorage
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className="loginForm">
            <h3>Login With</h3>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            <hr />
            <p>Don't have account ? <a href="/account">Create an account</a></p>
        </div>
    );
};

export default Login;
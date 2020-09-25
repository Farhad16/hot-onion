import React, { useContext, useState } from 'react';
import fb from '../../assests/ICON/fb.png'
import google from '../../assests/ICON/google.png'
import './Login.css'

import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [signInUser, setSignInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState(false);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password1: '',
        photoURL: '',
        error: '',
        success: false
    });

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    isSignedIn: true,
                    success: true,
                    error: '',
                    photoURL: photoURL
                }
                setUser(loggedInUser);
                setSignInUser(loggedInUser);
                setNewUser(loggedInUser);
                history.replace(from);


            }).catch(error => {
                console.log(error);
            });
    }

    const handleFbSingIn = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleBlur = (e) => {
        let isFieldValid;

        if (e.target.name === 'email') {
            const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
            if (validEmail) {
                const msg = '';
                setMessage(msg)
                isFieldValid = validEmail;
            }
            else {
                const msg = 'Email is not valid';
                setMessage(msg)
            }
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (e.target.name === "password1") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (e.target.value === "") {
            setMessage('');
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    return (
        <div className="signInAndSignUp">
            {
                newUser ?
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Create an account</h5>
                            <input type="text" onBlur={handleBlur} name="firstName" placeholder="First Name" required /><br />
                            <input type="text" onBlur={handleBlur} name="lastName" placeholder="Last Name" required /><br />
                            <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required /><br />
                            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required /><br />
                            <input type="password" onBlur={handleBlur} name="password1" placeholder="Confirm Password" required /><br />
                            <br />
                            <span className="error">{message}</span>
                            <input type="submit" className="createAccount" onClick={handleSubmit} value="Create Account" />
                            <p className="note">Already have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Login</span></p>
                        </form>
                    </div> :
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Login</h5>
                            <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required /><br />
                            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required /><br />
                            <p className="sizing">
                                <label htmlFor="">
                                    <input type="checkbox" id="remember" /><span style={{ paddingLeft: '10px' }}>Remember me</span>
                                </label>
                                <span className="colorBrown" >Forget Password?</span>
                            </p><br /> <br />
                            <span className="error">{message}</span>
                            <input type="submit" className="createAccount" onClick={handleSubmit} value="Login" />
                            <p className="note">Don't have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Create an account</span></p>
                        </form>
                    </div>
            }
            <div style={{ marginTop: '20px' }}>
                <label className="line"></label>Or<label className="line"></label>
            </div>
            <div className="alternativeLogin">
                <button onClick={handleFbSingIn}><img src={fb} alt="" /> Continue with Facebook</button><br />
                <button onClick={googleSignIn}><img src={google} alt="" />Continue with Google</button>
            </div>
        </div >
    );
};


export default Login;
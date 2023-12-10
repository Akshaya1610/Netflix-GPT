import React, { useRef, useState} from 'react';
import Header from './Header';
import {validateData, validateUserName} from '../utils/validateData';
import { createUserWithEmailAndPassword ,
        signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';
const Login = () => {

 const [isSignInForm, setIsSignInForm] = useState(true);
 const email = useRef(null);
 const password =  useRef(null);
 const name=  useRef(null)
 const [errormessage, setErrorMessage] = useState(null);
 const dispatch = useDispatch();
 const changetoggle = ()=> {
    setIsSignInForm(!isSignInForm)
 }
 const validateFormData = () => {
    
    if (email.current?.value.length  === 0 ) {
      setErrorMessage("please fill mandatory field");
      return
    } else if(password.current?.value.length  === 0){
      setErrorMessage("please fill mandatory field");
      return
    }
    if(!isSignInForm  && name.current?.value.length === 0){
        console.log("required");
        setErrorMessage("please fill mandatory field");
        return
    }
    if(!isSignInForm  && name.current.value){
      setErrorMessage(validateUserName(name.current.value)) ; return
    }
    const message = validateData(email.current.value, password.current.value)
    setErrorMessage(message);
    if (message) return;

    //logic for sign in & up

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
        })
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" " + errorMessage)
      });
    }else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
        const user = userCredential.user;
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" " + errorMessage)
      });
    }

  }
  return (
    <div>
        <Header />
        <div className="absolute overflow-x-hidden">
            <img className='mobile-gpt-bg'
            src = {BG_URL}
            alt="bg-img"
            />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-[450px] absolute p-10 bg-black my-28 mx-auto
         right-0 left-0 text-white rounded-lg bg-opacity-80 mobile-res-form">
        <h1 className="font-semibold text-3xl text-center py-3">
          { isSignInForm ? "Sign In" : "Sign Up" }
        </h1>
            {
            !isSignInForm && 
            <input 
            ref={name}
            type="text" placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-[#333]"
            />
            }       
        <input 
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full rounded-lg bg-[#333]"
        />
        <input 
            ref={password}
           type="password" placeholder="Password" 
            className="p-4 my-4 w-full rounded-lg bg-[#333]"
        />
        <p className='font-bold text-red-600'>{errormessage}</p>
        <button className="p-4 my-6 bg-[#e50914] w-full rounded-lg" onClick={validateFormData}>
         { isSignInForm ? "Sign In" : "Get Started" }
        </button>
        <p className="cursor-pointer" onClick={changetoggle}>
        { isSignInForm ?  "New to Netflix GPT? Sign Up Now" :"Already Registered? Sign In Now"   } </p>
      </form>
    </div>
  )
}

export default Login
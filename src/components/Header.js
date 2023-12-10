import { useNavigate } from "react-router-dom";
import { useSelector }  from "react-redux";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { USER_ICON } from "../utils/constants";
import  {toggleGptView, clearGptMovies} from "../utils/gptSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email, displayName} = user;
      dispatch(addUser({
        uid : uid, 
        email :email,
        displayName : displayName
      }
      ));
      navigate("/browse")
     
    } else {
      dispatch(removeUser());
      navigate("/")
    }
    });

    return() => unsubscribe();
  }, []) 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const toggleGptButtons = ()=>{
   dispatch(toggleGptView())
   dispatch(clearGptMovies())
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between mobile-res-header">
    {/* <img
      className="w-44 mobile-res-logo cursor-pointer"
      src= {LOGO}
      alt="logo"
    /> */}
    <img
      className="w-44 mobile-res-logo cursor-pointer"
      src= {require('../assets/logo.png')}
      alt="logo"
    />
    {user && (
      <>
      
        <div className="flex p-4 mobile-header-padding">
        <img className="w-10 h-10 user-logo-mobile" alt="usericon" src ={USER_ICON} />
          <div className="text-white mx-2 px-2 py-2 res-name md:mt-0 sm:mt-4">{user?.displayName}</div>
          <button onClick={toggleGptButtons} className="font-bold text-white py-2 px-4 mx-2 ">
            {gptSearchView ? "Home" : "GPT Search"}
          </button>
          
          <button onClick={handleSignOut} className="font-bold text-white text-[16px] mx-2 cursor-pointer mobile-btn-font">
            Sign Out
          </button>
        </div>
      
      </>
      )}
  </div>
  )
}

export default Header;
import React,{useState,useEffect} from 'react';
import './Nav.css';

 function Nav() {
     const [show,handeShow] = useState(false);
     const transitionNavBar = () =>{
         if (window.scrollY > 100){
             handeShow(true)
         }
         else {
             handeShow(false)
         }
     }

     useEffect (()=>{
         window.addEventListener("scroll",transitionNavBar); //as we scroll trigger function transitionNavBar
         //cleaning
         return () => window.removeEventListener("scroll",transitionNavBar);

     },[])
  return (
      <div className={`nav ${show && "nav__black"}`}>
          <div className="nav__contents">

          <img className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="the logo" />
          <img className="nav__avatar" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          </div>
         
      </div>
   
  );


}
export default Nav;



import { useEffect, useState, createContext } from "react";
import Sidebar from "./Components/Sidebar";
import './App.css'
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Main from "./Components/Main";
import SignupModal from "./Components/elements/SignupModal";
import {Route, Routes, useNavigate} from 'react-router-dom';
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import SigninModal from "./Components/elements/SigninModal";
import User_Data_Modal from "./Components/elements/User_Data_Modal";


function App() {
  const  UserContext = createContext();
  const [profiles, setProfiles] = useState(
    "white"
);


let toggle = ()=>{
  
    console.log("clciked")
   
   if(profiles == "white"){
      setProfiles("black");
      localStorage.setItem("mode", "black");
    
   }
   else{
      setProfiles("white")
      console.log(profiles);
      localStorage.setItem("mode", "white");
    
   }
     
      
     
  }
  let mode = localStorage.getItem("mode");
  useEffect(()=>{
    if(mode == "black"){
      setProfiles("black");
      document.querySelector('.form-check-input').checked = true;
    }
    else{
      setProfiles("white")
      document.querySelector('.form-check-input').checked = false;
    }
    console.log(profiles)
   
    

  },[])
 
  
  let num = 1;
  let profile = ()=>{
    num++;
    if(num % 2 == 0){
      console.log("clciked")
      document.querySelector(".profiles").style.display = "block";
    }
    else{
      document.getElementById("profile").style.display = "none";
      document.getElementById("mode").style.display = "none";
    }

  }
  let signup = ()=>{
    console.log("clciked")
    document.querySelector(".profiles").style.display = "none";
    document.querySelector('.signup').style.display = "block";
  }
  let modal = ()=>{
    document.querySelector('.data_form').style.display = "none";
  }
  let userdata = ()=>{
    document.querySelector('.data_form').style.display = "block";


  }
  return (
    <>
    
    
    
    <User_Data_Modal modal = {modal}/> 
    <SignupModal/>
  
      <Navbar  profiles = {profiles}/>
      
       <Sidebar profile = {profile}   userdata={userdata} profiles = {profiles}/>
       <Profile signup={signup}  toggle={toggle} profiles = {profiles}/>

   
   
   
   <Routes>
   <Route element = {<PrivateRoute/>}>
   <Route path = "/"  element = {<Main  profiles = {profiles}/>}></Route>

   </Route>
   <Route element = {<PublicRoute/>}>
     <Route path = "/SigninModal" element = {<SigninModal/>}></Route>
     <Route path = "/User_Data_Modal" element = {<User_Data_Modal/>}></Route>
     
   </Route>

   </Routes>
   
   
   
    
  
   

    </>
  )
}

export default App

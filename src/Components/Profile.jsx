import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
//const navigate = useNavigate();
function Profile({toggle, signup, profiles}){
  
  const navigate = useNavigate();
  const [user, setUser] = useState();

    let mode= ()=>{
        console.log("clicked")
        document.getElementById('mode').style.display = "block";
        document.getElementById('profile').style.display = "none";


    }
    let modes = ()=>{
        document.getElementById('mode').style.display = "none";
        document.getElementById('profile').style.display = "block";

    }
    let nums = 1;
   useEffect(()=>{
    let user_id = localStorage.getItem("user_id");
    setUser(user_id);


   }, [user])
   console.log(user)
  
  let logout = ()=>{
    localStorage.removeItem("user_id");
    document.querySelector('.profiles').style.display = "none";
   navigate('/SigninModal');

  }
  
    
   
    return(
        <>
         <div className="profiles modal w-52 mt-64  h-96 border ml-6 " id = "profile" style={{backgroundColor: profiles === 'black'?'black':'white', color:profiles == 'black'?'white':'black'}} >
             <div className="flex justify-start  mt-3 items-center ml-3"><i class="fa-solid fa-gear text-2xl mr-3"></i>Setting</div>
             <div className="flex justify-start  mt-3 items-center ml-3"><i class="fa-solid fa-chart-line text-2xl mr-3"></i>Setting</div>
             <div className="flex justify-start  mt-3 items-center ml-3"><i class="fa-regular fa-bookmark text-2xl mr-3"></i>Saved</div>
             <div className="flex justify-start  mt-3 items-center ml-3" onClick={mode}><i class={`${profiles === 'black'?'fa-regular fa-moon':'fa-regular fa-sun '} text-2xl mr-3`}></i>Switch Appereance</div>
             <div className=" border-t-2 border-gray-300">
             <div className="mt-3  border-b-2 p-3" onClick={signup} >
             Switch accounts

             </div>
             <div className="mt-3 ml-3 p-3">
             {user?<button onClick={logout}>logout</button>: ''}

             </div>

             </div>
         </div>
         <div className="mode modal mt-96 mr-7 h-40 border  w-60  rounded-xl ml-3" id = "mode" style={{backgroundColor: profiles == 'black'?'black':'white', color: profiles == 'black'?'white':'black'}}>
         <div className=" border-b-2 p-3">
         <i className="fa fa-angle-left text-gray-500" onClick = {modes}></i>  <span className = "ml-3">Switch apperenace</span><i className={`${profiles === 'black'?'fa-regular fa-moon':'fa-regular fa-sun '} text-2xl ml-3`}></i>

         </div>
         <div className=" p-3 flex" >
            <span>{profiles == 'black'?'Light Mode': 'Dark Mode'}</span><div class="form-check form-switch ml-9">
  <input className="form-check-input  ml-9"  type="checkbox" role="switch" value = "light" id="flexSwitchCheckDefault" onClick ={toggle}/>
  
</div>
         </div>
          
         </div>
           
        </>
    )
}

export default Profile;
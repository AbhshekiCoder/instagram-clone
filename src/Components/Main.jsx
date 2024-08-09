
import UserData from "./elements/UserData";
import { useState, useEffect } from "react";
import axios from "axios";
import bg1 from './pictures/bg1.jpg';

function Main({profiles}){
    
    return(
        <>
        
        <div className="maincontainer " style={{backgroundColor: profiles === 'black'?'black':'white', color: profiles == 'black'?'white':'black'}} id = "sidebar">
        <div className="status  h-16  mt-9">
             cccxc
        </div>
        <div className="data   mt-6  "  style={{ border: profiles == 'black'?'solid 1px black':'solid 1px silver'}}>
        <div className = "name flex p-3 items-center border">
        <div className=" flex  items-center">
        <img src = {bg1} className=' h-9 w-9 rounded-circle'/>
        <div className='ml-3'>wskjhsh</div>

        </div>
        <div className=" flex justify-end w-full">
        <i class="fa-solid fa-ellipsis"></i>


        </div>
        
     
        </div> 
       {<UserData profiles={profiles}/>}
        </div>
        <div>
               
           
        </div>

        </div>
       

        </>
    )
}
export default Main;
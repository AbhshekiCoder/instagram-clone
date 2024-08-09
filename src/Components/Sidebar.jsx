



function Sidebar({profile, userdata, profiles}){
  
   
   return(
        <>
        <div className="sidebar  max-md:hidden w-64 border"  style={{backgroundColor: profiles=== 'black'?'black':'white', color: profiles == 'black'?'white':'black'}} id = "sidebar" >
        <div className="flex   ml-9 mt-6 ">sjsjhs</div>
         <div className=' ml-9  mt-16'>
        
         <div className="flex justify-start mt-6 items-center  "><a href = "#"> <i className="fa fa-home mr-3  text-2xl"></i> Home</a></div>
         <div className="flex ju ify-start mt-6 items-center "><i className="fa fa-search mr-3  text-2xl"></i> Search</div>
         <div className="flex justify-start mt-6 items-center "><i className="fa fa-compass mr-3  text-2xl"></i>Explore</div>
         <div className="flex justify-start mt-6 items-center "> <i className="fas fa-images mr-3  text-2xl"></i>Reel</div>
         <div className="flex justify-start mt-6 items-center "><i className="fas fa-paper-plane mr-3  text-2xl"></i>Send</div>
         <div className="flex justify-start mt-6 items-center "><i className="far fa-plus-square  mr-3  text-2xl" onClick={userdata}></i>Notification</div>
         <div className="flex justify-start mt-6 items-center "><i class="far fa-user-circle mr-3  text-2xl"></i>Profile</div>
         <div className="flex  profile justify-start  items-center "><i class="fa-solid fa-bars mr-3 text-2xl" onClick={profile}></i>More</div>
         </div>
         </div>
         <div className='header hidden max-md:block sticky-top p-2'>
         <ul className='' type = "none">
         <li className=' float-left ml-3 '>
            ajjshjs
         </li>
         <li className=' float-right'>
         <i class="fa-regular fa-heart mr-3 text-2xl"></i>
         </li>
         <li className=' float-right'>
         
        
         <i className="far fa-plus-square  mr-3  text-2xl"></i>
         </li>

         </ul>
         </div>
      
        

        </>
    )
}

export default Sidebar;
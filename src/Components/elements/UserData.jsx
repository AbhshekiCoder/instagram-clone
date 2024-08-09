import { useEffect, useState } from 'react';
import img1 from '../pictures/bg1.jpg'
import axios from 'axios';

function UserData({profiles}){
   
    return(
        <>
             
             <div className="user-data p-3 max-sm:p-0 border"  style={{backgroundColor: profiles === 'black'?'black':'white', color: profiles == 'black'?'white':'black'}}>
            
          
            </div>
            <div className='flex p-3 items-center'>
            <div className=''>
            <i className="fa-regular fa-heart text-2xl max-sm:text-xl "></i>
            <span className=''>1 Likes</span>

            </div>
        
            <i className="fa-regular fa-comment text-2xl ml-3  max-sm:text-xl"></i>
            <i class="fa-regular fa-bookmark text-2xl save  max-sm:text-xl"></i>
            </div>
            <div className='description p-3'>
                kskskdskdsmkd
            </div>
            <div className='p-3 comment '>
            <input type='text' placeholder='add a comment...' className=' border-b-2'/>

            </div>

        </>
    )
}
export default UserData;
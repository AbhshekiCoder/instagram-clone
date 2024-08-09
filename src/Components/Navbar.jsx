


function Navbar({profiles}){
    
  
    return(
        <>
           <div className='navbar hidden sticky-bottom  max-md:block borde  '  style={{backgroundColor: profiles === 'black'?'black':'white', color: profiles== 'black'?'white':'black'}}>
           <ul className="float-left" type = "none">
            <li className=" "><i className="fa fa-home  text-xl"></i></li>
            <li><i className="fa fa-search  text-xl"></i></li>
            <li><i className="fas fa-images  text-xl"></i></li>
            <li><i className="fas fa-paper-plane  text-xl"></i></li>
            <li><i className="far fa-user-circle  text-xl text-gray-500"></i></li>
           </ul>
         </div>

        </>
    )
}
export default Navbar;
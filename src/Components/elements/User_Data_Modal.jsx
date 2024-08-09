import axios from "axios";
import { useEffect, useState } from "react";


function User_Data_Modal({modal}){
    
    const [data1, setData1] = useState();
    const [image, setImage] = useState();
    const [datatype, setDataType]  = useState("");
    
    
   const data  = async(e)=>{
        const file = e.target.files[0];
        console.log(file.name);
        const url = URL.createObjectURL(file);
        setImage(url);
       // var regex = new RegExp('[^.]+$'); 
         var  extension = file.name.split('.').pop();
         console.log(extension);
         if(extension === "png" || extension === "jpj" || extension === 'jpg'){
            setDataType("image");
         
         }
         if(extension === "mp4" || extension === "mp3" ){
            setDataType("video");
         

         }
         console.log(datatype);
       
        document.querySelector(".profile-data").style.display = "none";
        document.querySelector(".form1").style.display = "block";

        const obj = {
            img: url,

        }
     
       axios.post("http://localhost:5000/data", obj, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }).then((res)=>{
       console.log(res.data);
       setData1(url);
      
    });
     
      
       
    }
    let Left = ()=>{
        document.querySelector(".form1").style.display = "none";
        document.querySelector(".profile-data").style.display = "block";
        
    }
   
    let div = () =>{
        if(datatype == "image"){
            return  <img src = {image?image: ''}/>
        }
        else if(datatype == "video"){
            return  <video src = {image?image: ''} controls></video>

        }

    }   
       

   
    /** 
    useEffect(()=>{
        let result =  axios.post("http://localhost:5000/data1").then((result)=>{
            setData1(result.data);
            console.log(data1);
            

        })

    }, [])
  */
    
    return(
        <>
            <div className="w-full h-full border modal data_form ">
            <div className="flex justify-end text-blue  text-white  h-fit"><i class="fa-solid fa-xmark text-2xl" onClick={modal}></i></div>
            <div className=" form1   p-3" > 
            <div className=" row">
            <div className="col-md " >
            <i class="fa-solid fa-arrow-left ml-3 text-xl" onClick={Left}></i>
                

            </div>
            <div className="col-md  text-black font-bold flex justify-center">
               Create New Post
                
             </div>
             <div className="col-md text-blue-400 flex justify-end">
             share
            
             </div>

            </div>
            <div className="flex ">
                <div className=" data2">
               {div()}
                   
                </div>
                <div className="flex  w-full">
                <div className=" border-2 w-full p-3 h-fit">
                <div className="flex items-center h-fit">
                    <i className="fa fa-user-circle text-gray-500 text-2xl "></i> <span className="ml-3 text-black">balakhana78@gmail.com</span>
                </div>
                <input type="text" className=" h-56 w-full place-content-start" placeholder="Write a caption"/>
               

                </div>
                

                </div>
            </div>
               
              
             </div>
            <div className="profile-data" id = "profile-data">
           
            <div className=" border-b-2 flex justify-center text-black font-bold p-3">
            create new post

            </div>
            <div className="border  mr-auto content">
            <i className="fa-solid fa-photo-film text-6xl flex justify-center"></i>
            <h1 className=" mt-3 text-lg  ">Drag your Photo and Videos Here</h1>
            <input type = "file" className=" absolute formdata rounded-xl mt-3" onChange={data}/>
            <button>Select from computer</button>
            
             


            </div>
                
            </div>

            </div>
        </>
    )


}
export default User_Data_Modal;
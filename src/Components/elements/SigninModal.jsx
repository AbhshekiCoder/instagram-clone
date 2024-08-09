import '../elements/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SigninModal(){
    const navigate = useNavigate();
    let signin = ()=>{
        let form = document.forms['signin'];
        var email = form.email.value;
        var password = form.password.value;
        console.log(email)
        var body = {
            email: email,
            password: password
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/login', // Replace with your backend API endpoint
            data: body
           
        })
        .then(function (response) {
            // Handle success
            alert(response.data.success);
            navigate('/');
            
            if(response.data.session_id == email){
                localStorage.setItem("user_id", email);
            }
            document.querySelector('.sidebar').style.display = "block";
          
          
        
        })
        .catch(function (error) {
            // Handle error
      
            console.log(error);
        });
       



    }
    document.querySelector('.sidebar').style.display = "none";
  
    return(
      
            <>
 <div className="signin  ">
 <div className='forms'>
 <form className='form' name = "signin">
 <div className='mt-3'>
 <input  type='email' name = "email" placeholder='email'/>

 </div>
 <div className='mt-3'>
 <input  type='text' name = "password" placeholder='password'/>

 </div>


</form>
<button type = "submit" onClick={signin}>Submit</button>
 </div>

 </div>
  
</>

       
    )
}
export default SigninModal;
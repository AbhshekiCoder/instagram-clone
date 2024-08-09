import '../elements/signup.css';
import axios from 'axios';
function SignupModal(){
    let signup = ()=>{
        let form = document.forms['signup'];
        var email = form.email.value;
        var password = form.password.value;
        console.log(email)
        var body = {
            email: email,
            password: password
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/register', // Replace with your backend API endpoint
            data: body
           
        })
        .then(function (response) {
            // Handle success
            alert(response.data.success);
          
        
        })
        .catch(function (error) {
            // Handle error
      
            console.log(error);
        });


    }

    return(
      
            <>
 <div className="signup modal ">
 <div className='forms'>
 <form className='form' name = "signup">
 <div className='mt-3'>
 <input  type='email' name = "email" placeholder='email'/>

 </div>
 <div className='mt-3'>
 <input  type='text' name = "password" placeholder='password'/>

 </div>


</form>
<button type = "submit" onClick={signup}>Submit</button>
 </div>

 </div>
  
</>

       
    )
}
export default SignupModal;
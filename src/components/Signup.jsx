import React, { useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router'
import { Link,useHistory,withRouter} from 'react-router-dom'
import Login from './Login'

const Signup = () => {
var jsonString = localStorage.getItem("amay");
var login = JSON.parse(jsonString);

const[name,Setname]=useState("")
const[mobile,Setmobile]=useState("")
const[email,Setemail]=useState("")
const[password,Setpassword]=useState("")
const history = useHistory()
var amay ={
   name:name,
   mobile:mobile,
   email:email,
   password:password
}


 const validate = () =>{
     console.log(name)
     localStorage.setItem("amay", JSON.stringify(amay));
    
  
    
        var name=document.getElementById("name").value;  
        var number=document.getElementById("number").value;  
        var email=document.getElementById("email").value; 
        var password=document.getElementById("password").value; 
        var letters = /^[A-Z a-z]+$/;  
        var phoneno = /^[6-9]\d{0,10}$/
        var password_valid=/^[A-Z a-z 0-9 !@#$%&*()<>]{6,12}$/; 
        

        if(name=='' || email=='' || number=='' || password=='' ){  
         alert("ALL FIELDS ARE COMPULSORY"); 
      
         }  
 
         else if(!letters.test(name)  )  
             {  
              alert('Names should contain Letters only');  
              return false; 

             }  
         
      
 
   
         else if(!phoneno.test(number))  
             {  
             alert("Enter a number starting from 6 8 7 9");  
       
             } 
             
         else if(!password_valid.test(password)) 
         {
         alert("Password Must Be 6 to 12 and allowed !@#$%&*()<> character");
             password.focus();
             password.style.background = '#f08080';
             return false;                    
         

         }
 
             else{
     
          history.push('/login')
          return true;
    
             } 

 }


    return (
       <div>
           <h1 className="login">SignUp</h1>
            <div className="loginBox">
            <form>

             <label>Name</label><br></br>   
            <input class="fname" type="text" placeholder=" Enter First name" id="name" 
               onChange={e => Setname(e.target.value)}/ ><br></br>
             
          <label>Email</label><br></br>
          <input type="text"  placeholder=" Enter Email" id ="email"
             onChange={e => Setemail(e.target.value)}/><br></br>
          <label>Contact</label><br></br>
          <input type="text"  placeholder=" Enter Mobile number" id="number"
             onChange={e => Setmobile(e.target.value)}/><br></br>
          <label>Password</label><br></br>
          <input type="password" placeholder=" Enter Password" id="password"
             onChange={e => Setpassword(e.target.value)}/><br></br>
          <button className="btns"onClick={validate}>Register </button><br></br>
          

          {/* <button className="btns" >
          <Link to="/search" >Search here</Link><br/>
         </button> */}
        

            </form>
            </div>
            </div>
    )
}

export default withRouter(Signup)


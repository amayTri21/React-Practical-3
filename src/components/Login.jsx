import React from 'react'
import { Redirect,Route } from 'react-router-dom'
import Search from './Search';


const Login = () => {


    const validate = () =>{

        var jsonString = localStorage.getItem("amay");
        var login = JSON.parse(jsonString);
        
        var email1 = document.getElementById("email").value;
        var pass1 = document.getElementById("password").value;

        if(email1=='' || pass1==''){
            alert("enter all ")
        }
        else if(email1==login.email && pass1==login.password){

            <Redirect to ="/search" component={Search}></Redirect>
         
        }
        else{
            alert("failure")
        }
    }

    
    return (
        <div>

<div className="loginBox">
            <form>

            <label>Email</label><br></br>
          <input type="text" name="name" placeholder=" Enter Email" id ="email"></input><br></br>
          <label>Password</label><br></br>
          <input type="password" name="name" placeholder=" Enter Password" id="password"></input>

          <button className="btn"onClick={validate}>Login</button>
             </form>
        </div>
        </div>
    )
}

export default Login
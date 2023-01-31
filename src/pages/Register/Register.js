import { useState } from "react";
import { Link } from "react-router-dom";
import "./../Register/Register.css"
import { validEmail, validPassword } from "./Regex";


function Register(){

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword:""
    })

    const [error, setErros] = useState({
        username: null,
        email:null,
        password:null,
        confirmPassword:null
    })

    const changeUserData = (e) => {
        // console.log(e.target.name)
        if(e.target.name === "username"){
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErros({
                ...error, 
                username: e.target.value.length === 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        } else if(e.target.name === "password"){
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErros({
                ...error,
                password: e.target.value.length === 0 ? "This Field is Required" : 
                validPassword.test(e.target.value)? null:
                "password length not les than 8 characters  contains at least onelowercase  one uppercase at least one digit and special character ",
                
            })

        }
        else if(e.target.name === "confirmPassword"){
            setUserData({
                ...userData,
                confirmPassword: e.target.value
            })
            setErros({
                ...error,
                confirmPassword : e.target.value !== userData.password ?"Does not match":null
            })
           
        }
        else{
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email: e.target.value.length === 0 ? "This Field is Required" : 
                validEmail.test(e.target.value) ? null : "Invalid Email",
                
            })
        }

    }
    return(
        <div className="main m-2"  >
    <main className="form-signin  m-auto mt-5 col-xl-4 col-md-5 col-sm-7 col-xs-7 text-light"  >
        <form className="border rounded" style={{fontSize: "14px"}} >
            
          
          <h1 className="h4 m-3 fw-normal ">Create account</h1>
      
          <div className="col-11 m-3">
            <label htmlFor="name" className="form-label fw-bold">Your Name</label>
            <input name="username" type="text" style={{height: "30px"}} className={`form-control ${error.username && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)}  placeholder="First and last name" />
            <p className="text-danger">  {error.username}  </p>
          </div>
          <div className="col-11 m-3">
            <label htmlFor="mail" className="form-label fw-bold">Email Address</label>
            <input name="email" type="text" style={{height: "30px"}} className={`form-control ${error.email && "border-danger"}`}
             placeholder="example@gmail.com"   value={userData.email} onChange={(e) => changeUserData(e)} />
            <p className="text-danger">  {error.email}  </p>
          </div>

          <div className="col-11 m-3">
            <label htmlFor="pass" className="form-label fw-bold">Password</label>
            <input name="password" type="password" style={{height: "30px"}} className={`form-control ${error.password && "border-danger"}`}
             placeholder="Enter your password"   value={userData.password} onChange={(e) => changeUserData(e)} />
            <p className="text-danger"> {error.password}</p>
          </div>
          <div className="col-11 m-3">
            <label htmlFor="repass" className="form-label fw-bold">Confirm Password</label>
            <input name="confirmPassword" type="password" style={{height: "30px"}} className={`form-control ${error.confirmPassword && "border-danger"}`}
             placeholder="Re enter your password"   value={userData.confirmPassword} onChange={(e) => changeUserData(e)}/>
            <p className="text-danger"> {error.confirmPassword}</p>
          </div>
      
          
          <button className="m-3 col-11 btn btn-sm btn-warning "  type="submit">Continue</button>
          <p className="m-3 text-muted smallfont text-center">By creating account, you agree to <a href="/#">Amazon's Conditions of Use</a> and <a href="/#">Privacy Notice.</a></p>
          
          <div className="border-top text-center">
            <div className="m-3 smallfont">
            Already have an account? <Link to={"/login"} >Sign-In</Link>
           </div>
           <div className="m-3 smallfont">
            Buying for work? <a href="Signin.html" >Create a free business account</a>
           </div>
        </div>
        
        </form>

        

        <div className="row flex-row smallfont m-3 border-top extrasmall">
            <a href="/#" className="text-decoration-none col-5">Conditions of Use</a>
            <a href="/#" className="text-decoration-none col-4">Privacy Notice</a>
            <a href="/#" className="text-decoration-none col-3">Help</a>
        </div>
        <p className="text-muted extrasmall">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </main>
    </div>
    )


}



    



export default Register;
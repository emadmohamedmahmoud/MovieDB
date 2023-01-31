import { useState } from "react";
import "./../Register/Register.css"
import { validEmail , validPassword } from "../Register/Regex";

function Login(){
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
    if(e.target.name === "password"){
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
      } else{
        setUserData({
            ...userData,
            email: e.target.value
        })

        setErros({
            ...error,
            email: e.target.value.length === 0 ? "This Field is Required" : 
            validEmail.test(e.target.value) ? null : "Invalid Email",
            
        })}
      }
        


    return(

      <div className=" mt-5 main"  >
    <main className="form-signin  m-auto mt-5 col-xl-4 col-md-5 col-sm-7 col-xs-7 text-light "  >
        <form className="border rounded " >
          <h1 className="h4 m-3 fw-normal ">Sign in</h1>
          <div className="col-11 m-3">
            <label htmlFor="email" className="form-label fw-bold">Email </label>
            <input name="email" type="text" style={{height:"30px"}}  className={`form-control ${error.email && "border-danger"}`}
             placeholder="Enter your email address"   value={userData.name} onChange={(e) => changeUserData(e)}/>
            <p className="text-danger"> {error.email} </p>
          </div>
          <div className="col-11 m-3">
            <label htmlFor="pass" className="form-label fw-bold">Password</label>
            <input name="password" type="password" style={{height:"30px"}} className={`form-control ${error.password && "border-danger"}`} 
            placeholder="Enter your password" value={userData.name} onChange={(e)=> changeUserData(e)}/>
           <p className="text-danger">{error.password}</p>
          </div>
      
          <div className="checkbox m-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="m-3 col-11 btn btn-sm btn-warning" type="submit">Sign in</button>
          <p className="m-3 text-muted smallfont">By continuing, you agree to <a href="/#">Amazon's Conditions of Use</a> and <a href="/#">Privacy Notice.</a></p>
          
          <div className="dropdown m-3 smallfont">
            <p className=" dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
              Need Help?
            </p>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item " href="/#">Forgot your password?</a></li>
              <li><a className="dropdown-item" href="/#">Other issues with Sign-In</a></li>
            </ul>
          </div>
        
        </form>
        </main>
        </div>
        
    )

}


export default Login;
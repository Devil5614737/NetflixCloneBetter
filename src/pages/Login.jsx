import React, { useContext, useState } from 'react';
import '../styles/login.css';
import Logo from '../assets/logo3.png';
import Input from '../components/Input';
import Button from '../components/Button';
import {auth} from '../Firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Context';


function Login() {
  const{setUser}=useContext(Context)
    const navigate=useNavigate()
    const[show,setShow]=useState(false)
    const[values,setValues]=useState({
        email:'',
        password:''
    })
    const handleChange=e=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

// implementing login feature🧡💗 
const handleLogin=async ()=>{
    const { email, password } = values;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setUser(user.user)
        localStorage.setItem("token", user.user.accessToken);
        
        // setIsLoading(false);
        // window.location = "/profile"
        navigate('/whowatching');
        return;
      }
    } catch (error) {
      if (error) window.alert("Invalid credentials");

    //   console.log(error.message);
    //   setIsLoading(false);
    }
}

// implementing signup feature🧡💗 
const handleSignup=async()=>{
const {email,password}=values;
try {
    const user = await createUserWithEmailAndPassword(
      auth,

      email,
      password
    );
    if (user) {
      window.alert("user created");
      navigate('/login')
    }

    // setSignup(false);
    // setIsLoading(false);
    return;
  } catch (error) {
    if (error) {
      window.alert(error);

    //   setIsLoading(false);
    //   console.log(error);
    }
  }
}


  return (
      <div className="main">
          <div className="main-container">
              <div className="logo">
                  <img src={Logo} alt="logo" />
              </div>
            {!show &&  <div className="login-card">
                  <p>Sign In</p>
                  <div className="input-container">
                      <Input className='login-input' placeholder='Email or phone number' type='email' onChange={handleChange}
                      name='email'
                      value={values.email}
                      />
                      
                      <Input className='login-input' placeholder='Password' type='password'
                      onChange={handleChange}
                      name='password'
                      value={values.password}
                      />
                      <Button onClick={handleLogin}  className='login-btn'>Sign In</Button>
                  <p className="signup-link">
                    New to netflix?<span onClick={()=>setShow(true)}>Sign up now</span>
                  </p>
                  </div>
                  
              </div>}
           {show &&   <div className="login-card">
                  <p>Sign Up</p>
                  <div className="input-container">
                      <Input className='login-input' placeholder='Email or phone number' type='email'
                      onChange={handleChange}
                      name='email'
                      value={values.email}
                      />
                      <Input className='login-input' placeholder='Password' type='password'
                      onChange={handleChange}
                      name='password'
                      value={values.password}
                      />
                      <Button onClick={handleSignup} className='login-btn'>Sign Up</Button>
                 
                  </div>
                  
              </div>}
          </div>
      </div>
  )
}

export default Login;

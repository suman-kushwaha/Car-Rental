import React, { useState } from 'react'
import './../Components/Style/Form.css'
// import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {registerUserLogin} from '../API/API';

function UserLogin () {

    const [inputdata, setInputData] = useState({
        email: "",
        password: ""
      });
      
      const handleEmailChange = (e) => {
        setInputData({...inputdata, email: e.target.value});
      }
      
      const handlePasswordChange = (e) => {
        setInputData({...inputdata, password: e.target.value});
      }

    // const navigate = useNavigate();

    const onSubmitData = async(e)=>{
        e.preventDefault();
        // console.log(inputdata);
        const {email, password} = inputdata;

        if(email=== ""){
            toast.error("Email is required");
        }
        else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
        else if (password === "") {
            toast.error("Password is required")
        }
        else if (password.length < 4) {
            toast.error("password is too short")
        }
        else if (password.length > 20) {
            toast.error("password is too Long")
        }
        else{

            const data = new FormData();
            data.append("email",email)
            data.append("password",password)

            const config = {
                "Content-Type":"multipart/form-data"
            }

            const response = await registerUserLogin(data, config);

            if(response.status === 200) {
                setInputData({
                  ...inputdata,
                  email: "",
                  password: ""
                });
                // navigate("/");
              }else{
                toast.error("Error!")
              }

            console.log(email,password);
            toast.success("You are Logged in!");
        }
        
    } 

    return (
        <>
            <div className="container" id='form'>
            <h2 className='fom'>User Login</h2>
            <form action="post">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" onChange={handleEmailChange} placeholder='Email'  />


             <label htmlFor="password">Password</label>
             <input type="password" onChange={handlePasswordChange} placeholder='password'/>
             <button type='submit' onClick={onSubmitData}>Submit</button>
            </form>
            <ToastContainer
               position="top-center"
               autoClose={1500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               theme="dark"
            />
            </div>
        </>
    )
}
  

export default UserLogin
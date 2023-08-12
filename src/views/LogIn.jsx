import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { ReactComponent as Loading } from "../assets/svg/Loading.svg";


const LogIn = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleOnCheck = () => {
        let psw = document.getElementById("password");
        (psw.type === "password") ?
            (psw.type = "text") :
            (psw.type = "password")
    }

    const handleRequest = () => {
        setLoading(true)
        setPasswordError(null);
        setEmailError(null);
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in
            setLoading(false)
            navigate("/profile")
        })
        .catch((error) => {
            setLoading(false);
            const errorCode = error.code;
            errorCode === "auth/user-not-found" ?
                //handle email already exists
                alert("Email not registered") :
            errorCode === "auth/wrong-password" ? (
                //handle weak passwords
                setPasswordError("Wrong password")
            ) : errorCode === "auth/invalid-email" ? (
                setEmailError("Invalid email address")
            ) : ("")
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(!formData.email || !formData.password){
            alert('Please fill all the fields')
        }else{
            handleRequest()
        }
    }

    return (
        <main>                     
            <h1 className='text-center text-2xl md:text-4xl font-medium my-3'>Log in to your account</h1>  
            <div className="bg-indigo-950 text-white mt-4 rounded-xl md:rounded-none py-4 mx-4 md:mx-0">
            <form className='flex flex-col items-center justify-center md:gap-5 gap-3'>                                                                                            
                    <div className='flex flex-col items-center gap-3 w-full md:w-[80%]'>
                        <label htmlFor="email-address" className='font-medium'>
                            Email address
                        </label>
                        <input
                            className='border-2 border-black rounded-md p-2 bg-neutral-1000 text-black w-[80%] md:w-[50%]'
                            type='email'
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}                                
                            placeholder="Email address"
                            required                                      
                        />
                        {
                        emailError && <p className='text-red-800'>
                            {emailError}
                        </p>
                         }
                    </div>

                    <div className='flex flex-col items-center gap-3 w-full md:w-[80%]'>
                        <label htmlFor="password" className='font-medium'>
                            Password
                        </label>
                        <input
                            className='border-2 border-black rounded-md p-2 bg-neutral-1000 text-black w-[80%] md:w-[50%]'
                            type="password"
                            id = "password"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}                                
                            placeholder="Password" 
                            required               
                        />
                        {
                        passwordError && <p className='text-red-800'>
                            {passwordError}
                        </p>
                        }
                    </div> 
                    <div>
                        <label htmlFor="">
                            <input className='mr-2' type="checkbox" onChange={handleOnCheck}/>  
                            Show Password?
                        </label>                                     
                    </div>                                             
                            
                    <button
                        className="px-8 py-2 bg-[#aca4a4] rounded-md text-white"
                        type="submit" 
                        onClick={handleOnSubmit}                        
                    >  
                    {
                        loading ? (
                            <div className='flex gap-2'>
                                <Loading className="w-5 h-5 animate-spin"/>
                                <p>Processing</p>
                            </div>
                        ) : (
                            <div>
                                Log In
                            </div>
                        )
                    }
                                                    
                    </button>
                                                                        
                </form>   
                <p className='text-center mt-4'>
                    <NavLink className= "underline hover:no-underline ml-2" to="/reset-password" >
                        forgot password ?
                    </NavLink>
                </p>  
                <p className='text-center mt-4'>
                    No account yet?
                    <NavLink className= "underline hover:no-underline ml-2" to="/signup" >
                        Sign in
                    </NavLink>
                </p>  
            </div>                                                                          
                                
        </main>
    )
}

export default LogIn

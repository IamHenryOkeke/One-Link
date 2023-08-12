import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail} from 'firebase/auth';
import { auth } from '../firebase';
import { ReactComponent as Loading } from "../assets/svg/Loading.svg";


const ResetPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState(null)
    const [emailValue, setEmailValue] = useState("")

    const handleOnChange = (e) => {
        setEmailValue(e.target.value);
    }
    const handleRequest = async () => {
        setLoading(true);
        setEmailError(null);
        try {
            await sendPasswordResetEmail(auth, emailValue)
            setLoading(false);
            alert("Password reset email sent")
            navigate("/login");
        } catch (error) {
                const errorCode = error.code;
                console.log(error);
                errorCode === "auth/invalid-email" ? (
                    setEmailError("Invalid email address")
                ) : ("")
                setLoading(false); 
            }
    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(!emailValue){
        alert('Please fill all the fields')
        }else{
        handleRequest()
        }
    }
    return (
    <main>                     
        <h1 className='text-center text-2xl md:text-4xl font-medium my-3'>Reset Password</h1>  
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
                        value={emailValue}
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
                <button
                    className="px-8 py-2 bg-indigo-1000 rounded-md text-white"
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
                                Reset Password
                            </div>
                        )
                    }                               
                </button>
                                                                     
            </form>    
        </div>                                                                          
                            
    </main>
  )
}

export default ResetPassword




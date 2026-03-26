import React,{ useState} from 'react'
function AuthForm() {
    const [islogin, setIsLogin] = useState(true)
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={islogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
                    Login
                </button>
                <button className={!islogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
                    Sign Up
                </button>
            </div>  
            {islogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <a href="#"> Forgot Passward</a>
                <button>Login</button>
                <p>Not a memeber? 
                    <a href="#">Sign Up now</a>
                </p>
                
            </div>       
            </> : ""}     
            {!islogin ? <>
            <div className='form'>
                <h2>Sign Up Form</h2>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign Up</button>
                <p>Already a member? 
                    <a href="#">Login now</a>
                </p>
                
            </div>       
            </> : ""}        
        </div>
        
    </div>
  )
}

export default AuthForm
import React, { useState } from 'react'

const Login = ({handleLogin}) => {



    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
       setemail("")
        setpassword("")
       
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 '>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center '>
                <input
                value={email}
                 onChange={(e)=>{
                   setemail(e.target.value);
                     }}
                 required 
                 className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full text-xl  py-3 px-5 '  type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                setpassword(e.target.value);
                }}
                required  
                className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full text-xl  py-3 px-5 mt-3 ' type="password" placeholder='Enter password' />
                <button  className='text-white outline-none border-none placeholder:text-white w-full hover:bg-emerald-600 font-semibold bg-emerald-600 rounded-full text-xl mt-7  py-2 px-8 '>Log in</button>
            </form>

        </div>

    </div>
  )
}

export default Login
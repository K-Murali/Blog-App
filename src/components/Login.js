
import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { noteContext } from '../context/notes/NoteState';


const Login = () => {
    const [details, setdetails] = useState({ email:"",password:""});
 const [log, setlog] = useState(true);
 const {settoken,auth ,setauth}=  useContext(noteContext);

 const navigate= useNavigate();

    const handlesubmit = async (e) => {
        settoken(false);
        const {email,password}=details;
        e.preventDefault();
        const options={
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email,password}),
        }
        const base_url=`http://localhost:5000/api/auth/login`;
        const res= await fetch(base_url,options);
        const json=await res.json()
        setlog(json.success);
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            setauth(json.authtoken)
            navigate('/mynotes');
        }
    }
   
    const onchange = (e) => {
        setdetails({ ...details, [e.target.name]: e.target.value });
    }
  
      



    return (
        <>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)" }}>
                <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back... </h1>
                            <p className="pr-3">You can enter here..</p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p className="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <form onSubmit={handlesubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="email">Email</label>
                                    <input onChange={onchange} name='email' className=" bg-transparent w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide" htmlFor="password">Password</label>
                                   
                                    <input onChange={onchange} name='password' className="w-full bg-transparent content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" />
                                    {!log&&<div className='text-sm text-error'>Wrong password !</div>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-transparent  focus:ring-blue-400 border-gray-300 rounded" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">Checkout</label>
                                    </div>

                                </div>
                                <div>
                                    <button  type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">Sign in</button>
                                </div>
                            </form>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>Copyright © 2021-2022 <a href="https://codepen.io/uidesignhub" rel="noopener noreferrer" target="_blank" title="Ajimon" className="text-green hover:text-green-500">AJI</a></span>
                            </div>
                            <div className="pt-5 text-center  text-blue-700 text-sm">
                            <Link className='text-right' to='/Signup'>Sign up here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

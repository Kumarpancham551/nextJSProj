"use client"
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const router = useRouter();
   const [data,setData]= useState({
        email:"",
        password:""
    })

    const loginFormSubmitted= async(event)=>{
        event.preventDefault();
        if (data.email.trim() === "" || data.email == null) {
            toast.warning("Invalid credential !!", {
              position: "top-center"
            })
            return;
          }
          try{
           const result = await login(data)
           console.log(result);
           toast.success("Logge in !!", {
            position: "top-center"
          })
          router.push("/profile/user") // This route is used inside functional componenet
          }catch(error){
            console.log(error)
            toast.error(error.response.data.message, {
                position: "top-center"
              })
          }
    }
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5'>
                <div className='py-5'>
                    <h1 className='text-3xl text-center'>Login Here</h1>
                    <form action='#!' onSubmit={loginFormSubmitted}>
                        <div className='mt-3'>
                            <label htmlFor='user_email'
                                className='block text-sm font-medium mb-2 ps-2'>Email</label>
                            <input type='email' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                                id='user_email'
                                name='user_email'
                            onChange={(event) => {
                                setData({ ...data, email: event.target.value })
                            }}
                            value={data.email}
                            />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor='user_password'
                                className='block text-sm font-medium mb-2 ps-2'>Password</label>
                            <input type='password' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                                id='uer_password'
                                name='uer_password'
                            onChange={(event) => {
                                setData({ ...data, password: event.target.value })
                            }}
                            value={data.password}

                            />
                        </div>

                        <div className="mt-3 text-center">
                            <button type='submit'
                                className='px-2 py-3 bg-green-600 rounded hover:bg-green-400'>Login</button>
                            <button  type='button'
                                className='px-2 py-3 bg-orange-600 rounded hover:bg-orange-400 ms-5'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
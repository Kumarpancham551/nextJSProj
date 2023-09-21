"use client"
import React, { useState } from 'react'
import signupSvg from "../../assets/Signup.svg";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
  })
  const doSignUp = async (event) => {
    event.preventDefault()
    // Here we can add validation
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center"
      })
    }

    try {
      const result = await signUp(data);

      console.log(result);
      toast.success("USer is register !!", {
        position: "top-center"
      })

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: ""
      })
    } catch (error) {
      console.log(error)
      toast.error("SignUP Error " + error.response.data.message, {
        position: "top-center"
      })
    }

  }

  const resetForm=()=>{
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:""
    })
  }
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 col-start-5'>
        <div className='py-5'>
          <div className=' my-8 flex justify-center'>
            <Image src={signupSvg} style={{
              width: "50%"
            }} alt='Image not found' />
          </div>
          <h1 className='text-3xl text-center'>Signup Here</h1>
          <form action='#!' className='mt-5' onSubmit={doSignUp}>
            <div className='mt-3'>
              <label htmlFor='user_name'
                className='block text-sm font-medium mb-2 ps-2'>Username</label>
              <input type='text' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                id="user_name"
                name='user_name'
                onChange={(event) => {
                  setData({ ...data, name: event.target.value })
                }}
                value={data.name}
              />
            </div>

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

            <div className='mt-3'>
              <label htmlFor='user_about'
                className='block text-sm font-medium mb-2 ps-2'>About</label>
              <textarea className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                id='user_about'
                rows={8}
                name='user_about'
                onChange={(event) => {
                  setData({ ...data, about: event.target.value })
                }}
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-3 text-center">
              <button type='submit'
                className='px-2 py-3 bg-green-600 rounded hover:bg-green-400'>Signup</button>
              <button onClick={resetForm} type='button'
               className='px-2 py-3 bg-orange-600 rounded hover:bg-orange-400 ms-5'>Reset</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
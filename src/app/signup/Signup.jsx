"use client"
import React from 'react'
import signupSvg from "../../assets/Signup.svg";
import Image from 'next/image';

const Signup = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 col-start-5'>
        <div className='py-5'>
        <div className=' my-8 flex justify-center'>
          <Image src={signupSvg} style={{
            width:"50%"
          }} alt='Image not found' />
        </div>
          <h1 className='text-3xl text-center'>Signup Here</h1>
          <form action='#!' className='mt-5' >
              <div className='mt-3'>
                  <label htmlFor='user_name'
                  className='block text-sm font-medium mb-2 ps-2'>Username</label>
                  <input type='text' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                   id='user_email' />
              </div>

              <div className='mt-3'>
                  <label htmlFor='user_email'
                  className='block text-sm font-medium mb-2 ps-2'>Email</label>
                  <input type='email' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here'
                  id='user_email' />
              </div>

              <div className='mt-3'>
                  <label htmlFor='user_password'
                  className='block text-sm font-medium mb-2 ps-2'>Password</label>
                  <input type='password' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here' 
                  id='uer_password'
                  />
              </div>

              <div className='mt-3'>
                  <label htmlFor='user_about'
                  className='block text-sm font-medium mb-2 ps-2'>About</label>
                  <textarea  className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' placeholder='Enter here' 
                  id='user_about'
                  rows={8}></textarea>
              </div>
              <div className="mt-3 text-center">
                <button className='px-2 py-3 bg-green-600 rounded hover:bg-green-400'>Signup</button>
                <button className='px-2 py-3 bg-orange-600 rounded hover:bg-orange-400 ms-5'>Reset</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
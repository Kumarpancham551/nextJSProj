"use client"
import Link from 'next/link'
import React from 'react'

const CustomNavbar = () => {
  return (
    <nav className='bg-blue-600 h-12 py-2 px-4 flex justify-between items-center'>
      <div className='brand'>
        <h1 className='txt-2xl bold font-semibold'>
            <a href='#!'>Work Manager</a>
        </h1>
        </div>
      <div>
        <ul className='flex space-x-5'>
            <li>
               <Link href={'/'}>Home</Link>
            </li>

            <li>
                <Link href={'/add-task'}>Add Task</Link>
            </li>

            <li>
                <a href='#!'>Show Task</a>
            </li>
        </ul>
      </div>
      <div>
        <ul className='flex space-x-3'>
            <li>
                <a href='#!'>Login</a>
            </li>

            <li>
                <a href='#!'>Signup</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default CustomNavbar
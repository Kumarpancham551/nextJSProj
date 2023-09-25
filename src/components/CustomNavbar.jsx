"use client"
import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const CustomNavbar = () => {
  const context = useContext(UserContext)
  const router = useRouter()
  async function doLogout(){
    try{
     const result = await logout()
     console.log(result);
     context.setUser(undefined)
     router.push("/login")
    }catch (error){
      console.log(error, "error")
      toast.error("Logout Error")
    }
  }
  return (
    <nav className='bg-blue-600 h-12 py-2 px-4 flex justify-between items-center'>
      <div className='brand'>
        <h1 className='txt-2xl bold font-semibold'>
          <a href='#!'>Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className='flex space-x-5'>
          {
            context.user && (
              <>
                <li>
                  <Link href={'/'} className='hover:text-blue-200'>Home</Link>
                </li>

                <li>
                  <Link href={'/add-task'} className='hover:text-blue-200'>Add Task</Link>
                </li>

                <li>
                  <a href='/show-tasks' className='hover:text-blue-200'>Show Tasks</a>
                </li></>
            )
          }
        </ul>
      </div>
      <div>
        <ul className='flex space-x-3'>
       {
        context.user && (
          <>
             <li>
            <Link href={"#!"} >{context.user.name}</Link>
          </li>

          <li>
            <button onClick={doLogout} >Logout</button>
          </li></>
        )
       }
       {
          !context.user && (
            <>
               <li>
            <Link href='/login'>Login</Link>
          </li>

          <li>
            <Link href='/signup'>Signup</Link>
          </li></>
          )
       }
        </ul>
      </div>
    </nav>
  )
}

export default CustomNavbar
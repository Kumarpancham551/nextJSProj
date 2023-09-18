"use client"
import React, { useState } from 'react'
import loginSvg from "../../assets/login.svg";
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import {toast} from 'react-toastify'

export const AddTask = () => {
 
const [task,setTask] = useState({
    title:"",
    content:"",
    status:"none",
    userId:"65004bde6d770375146e949f"
  })

  const handleAddTask = async (event)=>{
    event.preventDefault();
    try{
     const result =  await addTask(task)
     console.log(result, "result")
     toast.success("Your task is added")
    }catch(error){
      console.log(error,"error")
    }
  }
  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-5 col-start-4 p-5 shadow-sm'>
        <div className=' my-8 flex justify-center'>
          <Image src={loginSvg} style={{
            width:"50%"
          }} alt='Image not found' />
        </div>
        <h1 className='text-3xl text-center' >Add your task here</h1>
        <form action='!#' onSubmit={handleAddTask}>

          <div className='mt-4'>
            <label htmlFor='task_title' className='block text-sm font-medium mb-2'>Title</label>
            <input type='text' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' 
            id='task_title' 
            name='task_title'
            onChange={(event)=>{
              setTask({
                ...task,
                title:event.target.value
              })
            }}
            value={task.title}
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='task_content' className='block text-sm font-medium mb-2'>Content</label>
            <textarea  className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800' id='task_content'
             rows={5} 
             name='task_content'
            onChange={(event)=>{
              setTask({
                ...task,
                content:event.target.value
              })
            }}
            value={task.content}
             />
          </div>

          <div className='mt-4'>
            <label htmlFor='task_status' className='block text-sm font-medium mb-2'>Status</label>
            <select id='task_status' className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-100 border border-gray-800'
            name='task_status'
            onChange={(event)=>{
              setTask({
                ...task,
                status:event.target.value
              })
            }}
            value={task.status}
            >
              <option value="none"  disabled>Select Status</option>
              <option id='Pending'>Pending</option>
              <option id='Completd'>Completd</option>
            </select>
          </div>


          <div className='mt-4 flex justify-center'>
            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
            <button className='bg-red-600 py-2 px-3 rounded-lg ms-3 hover:bg-red-800'>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask;

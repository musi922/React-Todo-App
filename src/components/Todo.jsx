import React from 'react'
import { FaTrash } from "react-icons/fa";

function Todo({heading,handleCheckboxChange}) {
    

  return (
   <>
   <div className='flex-col h-auto'>
   <div className='flex justify-between h-[5vh] items-center p-8 border-b-4 mt-14 w-[140%] ml-96'>
    <input type={'checkbox'} className='absolute mt-10' checked={heading.ichecked} onChange={handleCheckboxChange}></input>
    <h1 type="text" className=' font-bold mt-10 ml-10 text-xl outline-none'>{heading.fname}</h1>
    <div className='p-5 bg-gray-200 rounded-full h-16 w-16 float-right'>
    <FaTrash className='text-[#ff2700] text-2xl font-extrabold'/>
    </div>
   </div>
   </div>
   </>
  )
}

export default Todo

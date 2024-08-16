import React from 'react'
import { FaTrash } from "react-icons/fa";

function Todo({todo,handleCheckboxChange,handleDelete}) {
    

  return (
   <>
   <div className='flex-col h-auto'>
   <div className='flex justify-between h-[5vh] items-center p-8 border-b-4 mt-14 w-[140%] ml-96'>
    <input type={'checkbox'} className='absolute mt-10' checked={todo.ichecked} onChange={()=>handleCheckboxChange(todo.id)}></input>
    <h1  className={`font-bold mt-10 ml-10 text-xl outline-none ${todo.isChecked ? 'line-through' : ''}`} >{todo.title}</h1>
    <div className='p-5 bg-gray-200 rounded-full h-16 w-16 float-right' onClick={()=>handleDelete(todo.id)}>
    <FaTrash className='text-[#ff2700] text-2xl font-extrabold'/>
    </div>
   </div>
   </div>
   </>
  )
}

export default Todo

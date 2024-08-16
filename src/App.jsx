import React, { useState } from 'react';
import './App.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import {useDispatch,useSelector} from "react-redux"
import { addTodo,toggleTodo,deleteTodo } from './features/todoslice';
import Todo from './components/Todo';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state=>state.todos.todos)
  const [title,setTitle] = useState("")

  function handlesubmit() {
    if(title.trim()==="") return;
    dispatch(addTodo({title}))
    setTitle("")
  }

  function onChangeheading(event) {
    setTitle(event.target.value)
  }

  function handleDelete(id) {
    dispatch(deleteTodo({id}))
    }

  function handleCheckboxChange(id) {
    dispatch(toggleTodo({id}))
  }
  return (
    <>
      <h1 className='text-gray-200 font-extrabold text-9xl ml-[100%]'>todos</h1>
      <div className='flex justify-between shadow-[-1px_1px_6px_0px_#1a202c] h-[10vh] items-center p-8 rounded-full mt-32 w-[140%] ml-96'>
        <input 
          type="text" 
          name='title' 
          value={title} 
          onChange={onChangeheading} 
          placeholder='Add todo...' 
          className='h-12 w-[60%] font-bold p-4 outline-none' 
        />
        <BsPlusCircleFill className='text-[#008985] text-4xl font-extrabold' onClick={handlesubmit} />
      </div>
      <div className='flex-col h-auto'>
      {todos.map(todo => (
  <Todo
  key={todo.id}
  todo={todo}
  handleCheckboxChange={handleCheckboxChange}
  handleDelete={handleDelete}
  />
))}
      </div>
    </>
  );
}

export default App;




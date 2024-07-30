import React, { useEffect, useState } from 'react';
import './App.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [heading, setHeading] = useState({
    title: "",
    isChecked: false
  });
  
  const [todos, setTodos] = useState(() => {
    // Initialize todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  // Save todos to local storage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handlesubmit() {
    if (heading.title.trim() === "") return; // Prevent adding empty todos
    const newTodo = { title: heading.title, isChecked: heading.isChecked, id: Date.now() };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setHeading({ title: "", isChecked: false });
  }

  function onChangeheading(event) {
    const { value, name, type, checked } = event.target;
    setHeading(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleDelete(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function handleCheckboxChange(id) {
    setTodos(prevTodos => prevTodos.map(todo =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    ));
  }
  return (
    <>
      <h1 className='text-gray-200 font-extrabold text-9xl ml-[100%]'>todos</h1>
      <div className='flex justify-between shadow-[-1px_1px_6px_0px_#1a202c] h-[10vh] items-center p-8 rounded-full mt-32 w-[140%] ml-96'>
        <input 
          type="text" 
          name='title' 
          value={heading.title} 
          onChange={onChangeheading} 
          placeholder='Add todo...' 
          className='h-12 w-[60%] font-bold p-4 outline-none' 
        />
        <BsPlusCircleFill className='text-[#008985] text-4xl font-extrabold' onClick={handlesubmit} />
      </div>
      <div className='flex-col h-auto'>
        {todos.map(todo => (
          <div key={todo.id} className='flex justify-between h-[5vh] items-center p-8 border-b-4 mt-14 w-[140%] ml-96'>
            <input 
              type='checkbox' 
              className='absolute mt-10' 
              checked={todo.isChecked} 
              onChange={() => handleCheckboxChange(todo.id)} 
            />
            <h1 
              className={`font-bold mt-10 ml-10 text-xl outline-none ${todo.isChecked ? 'line-through' : ''}`} 
            >
              {todo.title}
            </h1>
            <div 
              className='p-5 bg-gray-200 rounded-full h-16 w-16 float-right' 
              onClick={() => handleDelete(todo.id)}
            >
              <FaTrash className='text-[#ff2700] text-2xl font-extrabold' />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

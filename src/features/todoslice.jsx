import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    todos: JSON.parse(localStorage.getItem('todos'))|| []
}
const todoSlice = createSlice({
    name:"todos",
    initialState:initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                isChecked:false
            }
            state.todos = [...state.todos,newTodo]
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload.id)
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map(todo=>
                todo.id === action.payload.id ? {...todo, isChecked: !todo.isChecked}:todo
            )
        }
    }
})

export const {addTodo,deleteTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer

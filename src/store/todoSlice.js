import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    completedTasks: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state, action)
      state.tasks.push(action.payload)
    },
    removeTodo(state, action) {
      state.tasks = state.tasks.filter(task => task.id != action.payload)
    },
    toggleTodo(state, action) {
      const index = state.tasks.findIndex(task => task.id == action.payload.id)
      console.log(index)
      state.tasks[index] = action.payload
      console.log(state.tasks[index])
    },
    completeTodo(state, action) {
      state.completedTasks.push(state.tasks.find(task => task.id == action.payload.id))
      state.tasks = state.tasks.filter(task => task.id != action.payload.id)
    },
    removeCompleteTodo(state, action) {
      state.completedTasks = state.completedTasks.filter(task => task.id != action.payload)
    },
    returnTodo(state, action) {
      state.tasks.push(state.completedTasks.find(task => task.id == action.payload.id))
      state.completedTasks = state.completedTasks.filter(task => task.id != action.payload.id)
    }
  }

})

export const {addTodo, removeTodo, toggleTodo, completeTodo, removeCompleteTodo, returnTodo} = todoSlice.actions
export default todoSlice.reducer
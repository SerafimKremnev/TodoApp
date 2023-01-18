import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: []
  },
  reducers: {
    addTodo(state, action) {
      console.log(state, action)
      state.tasks.push(action.payload)
    },
    removeTodo(state, action) {},
    toggleTodo(state, action) {},
  }

})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer
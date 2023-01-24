import {createSlice} from "@reduxjs/toolkit";


const groupSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [],
  },
  reducers: {
    addGroup(state, action) {
      state.groups.push(action.payload)
    },
    deleteGroup(state, action) {
      state.groups = state.groups.filter(group => group.idGroup != action.payload)
    }
  }
})

export const {addGroup, deleteGroup} = groupSlice.actions
export default groupSlice.reducer
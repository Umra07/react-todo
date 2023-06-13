import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  lists: [],
};

// export const fetchListsTodos = createAsyncThunk('todos/fetchListsTodos', async () => {
//   const response = await axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks');
//   return response.data;
// });

// export const postList = createAsyncThunk('todos/postList', async (initialList) => {
//   const response = await axios.post('http://localhost:3001/lists/', initialList);
//   return response.data;
// });

// export const deleteListRequest = createAsyncThunk('todos/deleteList', async (list) => {
//   const response = await axios.delete(`http://localhost:3001/lists/${list.id}`);
//   return response.data;
// });

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    // addList(state, action) {
    //   state.lists.push({ id: Date.now(), title: action.payload });
    // },
    // deleteList(state, action) {
    //   state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    // },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchListsTodos.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.lists = action.payload;
  //     })
  //     .addCase(postList.fulfilled, (state, action) => {
  //       state.lists.push(action.payload);
  //     });
  // },
});

// export const selectAllLists = (state) => state.lists.lists;

// export const { addList, deleteList } = listsSlice.actions;

export default listsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { initialStateTypes } from './types';
import { v4 } from 'uuid';

const initialState: initialStateTypes = {
  todosLists: [
    { id: '1', name: 'full' },
    { id: '2', name: 'end' },
  ],
  selectedList: undefined,
  todos: [],
};

const todoAppSlice = createSlice({
  name: 'todoApp',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.todosLists = [
        ...state.todosLists,
        {
          id: v4(),
          name: action.payload,
        },
      ];
    },
    removeList: (state, action) => {
      state.todosLists = state.todosLists.filter((list) => list.id !== action.payload);
    },
    selectList: (state, action) => {
      state.selectedList = state.todosLists.find((list) => list.id === action.payload);
    },
  },
});

export const { addList, removeList, selectList } = todoAppSlice.actions;

export default todoAppSlice.reducer;

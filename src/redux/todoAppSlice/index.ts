import { createSlice } from '@reduxjs/toolkit';
import { initialStateTypes } from './types';
import { v4 } from 'uuid';

const initialState: initialStateTypes = {
  todosLists: [],
  selectedList: undefined,
  todos: [],
  sort: '',
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
      state.todos = state.todos.filter((todo) => todo.listId !== action.payload);
    },
    selectList: (state, action) => {
      state.selectedList = state.todosLists.find((list) => list.id === action.payload);
    },
    addNewTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todoStatusChanged: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    statusFilterChanged: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.listId === state.selectedList?.id) {
          todo.completed = action.payload;
        }
        return todo;
      });
    },
    sortedTodos: (state, action) => {
      state.sort = action.payload;
      console.log(action.payload);
    },
  },
});

export const {
  addList,
  removeList,
  selectList,
  addNewTodo,
  removeTodo,
  todoStatusChanged,
  statusFilterChanged,
  sortedTodos,
} = todoAppSlice.actions;

export default todoAppSlice.reducer;

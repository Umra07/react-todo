import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const TODOS_URL = `http://localhost:3001/tasks`;

const initialState = {
  todos: [],
  listId: 0,
};

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (id) => {
//   const { data } = await axios.get(`http://localhost:3001/lists/${id}/tasks`);
//   return { data, id };
// });

// export const postNewTask = createAsyncThunk('todos/postNewTask', async (initialTodo) => {
//   const { data } = await axios.post(TODOS_URL, initialTodo);
//   return data;
// });

// export const deleteRequest = createAsyncThunk('todos/deleteRequest', async (id) => {
//   const response = await axios.delete(TODOS_URL + `/${id}`, { data: { id } });
//   return response.data;
// });

// export const changeTaskStatusRequest = createAsyncThunk(
//   'todos/changeStatusRequest',
//   async (task) => {
//     const { data } = await axios.put(TODOS_URL + `/${task.id}`, {
//       ...task,
//       completed: !task.completed,
//     });
//     return data;
//   },
// );

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // addTasks(state, action) {
    //   state.todos.push({ id: Date.now(), title: action.payload });
    //   console.log(state.todos);
    // },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchTodos.fulfilled, (state, action) => {
  //       state.todos = action.payload.data;
  //       state.listId = action.payload.id;
  //     })
  //     .addCase(postNewTask.fulfilled, (state, action) => {
  //       state.todos.push(action.payload);
  //     })
  //     .addCase(deleteRequest.fulfilled, (state, action) => {
  //       state.todos = state.todos.filter((task) => task.id !== action.meta.arg);
  //     })
  //     .addCase(changeTaskStatusRequest.fulfilled, (state, action) => {
  //       state.todos = state.todos.map((todo) => {
  //         if (todo.id === action.payload.id) {
  //           return { ...todo, completed: action.payload.completed };
  //         }
  //         return todo;
  //       });
  //     });
  // },
});

// export const selectAllTasks = (state) => state.tasks.todos;
// export const selectListId = (state) => state.tasks.listId;

// export const { addTasks } = todosSlice.actions;

export default todosSlice.reducer;

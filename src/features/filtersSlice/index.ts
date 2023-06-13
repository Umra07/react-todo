import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  status: 'idle',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    deleteList(state, action) {},
  },
  extraReducers(builder) {},
});

export const {} = filtersSlice.actions;

export default filtersSlice.reducer;

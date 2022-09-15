import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todos/getTodosAsync", async () => {
  const res = await axios({
    method: "GET",
    url: "https://631f139522cefb1edc420f64.mockapi.io/todos",
    headers: {},
  });
  return res.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const res = await axios.post(
    "https://631f139522cefb1edc420f64.mockapi.io/todos/",
    todo
  );
  return res.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  await axios.put(
    `https://631f139522cefb1edc420f64.mockapi.io/todos/${todo.id}/`,
    todo
  );
  return todo;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios({
    method: "DELETE",
    url: `https://631f139522cefb1edc420f64.mockapi.io/todos/${id}`,
    headers: {},
  });
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    Items: [],
    isLoading: false,
    error: null,
    updateItem: {},
    showUpdate: false,
  },
  reducers: {
    updateItem: (state, action) => {
      state.updateItem = action.payload;
      state.showUpdate = true;
    },
    cancelUpdate: (state, action) => {
      state.updateItem = {};
      state.showUpdate = false;
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.Items = action.payload;
      state.isLoading = false;
    },
    [getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    // delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      const id = action.payload;
      const filtered = state.Items.filter((a) => a.id != id);
      state.Items = filtered;
    },

    // add todo
    [addTodo.fulfilled]: (state, action) => {
      state.Items.push(action.payload);
    },

    // update todo
    [updateTodo.fulfilled]: (state, action) => {
      let data = [];
      const updateData = action.payload;
      state.Items.map((a) => {
        a.id == updateData.id ? data.push(updateData) : data.push(a);
      });
      state.Items = data;
    },
  },
});

export default todosSlice.reducer;
export const { updateItem, cancelUpdate } = todosSlice.actions;

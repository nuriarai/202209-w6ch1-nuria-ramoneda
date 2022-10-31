import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../../../data/types";

interface toDosState {
  todos: ToDo[];
}

const toDosInitialState: toDosState = {
  todos: [],
};

const toDosSlice = createSlice({
  name: "todos",
  initialState: toDosInitialState,
  reducers: {
    loadToDos: (
      currentToDoState,
      action: PayloadAction<ToDo[]>
    ): toDosState => ({
      ...currentToDoState,
      todos: [...action.payload],
    }),
    removeToDo: (
      currentToDoState,
      action: PayloadAction<number>
    ): toDosState => ({
      ...currentToDoState,
      todos: currentToDoState.todos.filter(
        (todo) => todo.id !== action.payload
      ),
    }),
  },
});

export const toDoReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  removeToDo: removeToDoActionCreator,
} = toDosSlice.actions;

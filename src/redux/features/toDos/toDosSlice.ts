import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../../../data/types";

interface toDosState {
  list: ToDo[];
}

const toDosInitialState: toDosState = {
  list: [],
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
      list: [...action.payload],
    }),
    removeToDo: (
      currentToDoState,
      action: PayloadAction<number>
    ): toDosState => ({
      ...currentToDoState,
      list: currentToDoState.list.filter((todo) => todo.id !== action.payload),
    }),
  },
});

export const toDoReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  removeToDo: removeToDoActionCreator,
} = toDosSlice.actions;

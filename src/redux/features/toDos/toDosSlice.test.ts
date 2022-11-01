import mockToDos from "../../../mocks/mockToDos";
import { loadToDosActionCreator, toDoReducer } from "./toDosSlice";

describe("Given the toDoReducer", () => {
  describe("When it receives a loadToDos action with 4 toDos in it and an empty state", () => {
    test("Then it should return a new state with a copy of the 4 toDos received", () => {
      const loadToDosAction = loadToDosActionCreator(mockToDos);

      const currentToDoState = { list: [] };
      const expectedToDoState = { list: mockToDos };

      const newToDoState = toDoReducer(currentToDoState, loadToDosAction);

      expect(newToDoState).toStrictEqual(expectedToDoState);
    });
  });
});

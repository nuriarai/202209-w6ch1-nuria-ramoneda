import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ToDo from "../../data/types";
import { store } from "../../redux/store";
import ToDoCard from "./ToDoCard";

describe("Given a ToDo card component", () => {
  describe("When it's rendered with a 'Do laundry' toDo", () => {
    test("Then it should show 'Do laundry' in a level 2 heading", () => {
      const task: ToDo = {
        id: 45,
        name: "Do laundry",
        isDone: false,
      };

      render(
        <Provider store={store}>
          <ToDoCard todo={task} />
        </Provider>
      );

      const headingExpected = screen.queryByRole("heading", {
        level: 2,
        name: task.name,
      });

      expect(headingExpected).toBeInTheDocument();
    });
  });
});
